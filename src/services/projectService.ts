// projectService.ts
import { db } from "@/lib/firebase"; // Adjust path as needed
import { collection, addDoc, getDocs, doc, setDoc, query } from "firebase/firestore";
import { uploadImagesToStorage } from "./imageService"; // Adjust path
import { IProjectProps } from "@/types/project";


// Save project data to Firestore
export const saveProject = async (projectData: IProjectProps): Promise<string> => {
    try {
        // Add project to Firestore to get an ID
        const docRef = await addDoc(collection(db, "projects"), {
            title: projectData.title,
            description: projectData.description,
            status: projectData.status,
            startDate: projectData.startDate ? projectData.startDate.toISOString() : null,
            endDate: projectData.endDate ? projectData.endDate.toISOString() : null,
            githubLink: projectData.githubLink || "",
            liveLink: projectData.liveLink || "",
            techStack: projectData.techStack,
            projectImages: [], // Placeholder, will update after upload
        });

        // Upload images if they exists
        const imageUrls = projectData.projectImages?.length
            ? await uploadImagesToStorage(projectData.projectImages, `projects/${docRef.id}`)
            : [];

        // Update the document with image URLs if there are any
        if (imageUrls.length > 0) {
            await setDoc(doc(db, "projects", docRef.id), { projectImages: imageUrls }, { merge: true });
        }

        return docRef.id;
    } catch (error) {
        console.error("Error saving project:", error);
        throw error;
    }
};

// CREATE PROJECT
export const createProject = async (projectData: IProjectProps): Promise<string> => {
    try {
        // Add project to Firestore to get an ID
        const docRef = await addDoc(collection(db, "projects"), {
            title: projectData.title,
            description: projectData.description,
            status: projectData.status,
            startDate: projectData.startDate ? projectData.startDate.toISOString() : null,
            endDate: projectData.endDate ? projectData.endDate.toISOString() : null,
            githubLink: projectData.githubLink || "",
            liveLink: projectData.liveLink || "",
            techStack: projectData.techStack,
            projectImages: [], // Placeholder, will update after upload
        });

        // Upload images if they exists
        const imageUrls = projectData.projectImages?.length
            ? await uploadImagesToStorage(projectData.projectImages, `projects/${docRef.id}`)
            : [];

        // Update the document with image URLs if there are any
        if (imageUrls.length > 0) {
            await setDoc(doc(db, "projects", docRef.id), { projectImages: imageUrls }, { merge: true });
        }

        return docRef.id;
    } catch (error) {
        console.error("Error creating project:", error);
        throw error;
    }
};

// Fetch all projects from Firestore
export const getProjects = async (): Promise<IProjectProps[]> => {
    try {
        const q = query(collection(db, "projects"));
        const querySnapshot = await getDocs(q);
        const projects: IProjectProps[] = querySnapshot.docs.map((doc) => {
            const data = doc.data();
            return {
                id: doc.id,
                title: data.title,
                description: data.description,
                status: data.status,
                startDate: data.startDate ? new Date(data.startDate) : null,
                endDate: data.endDate ? new Date(data.endDate) : null,
                githubLink: data.githubLink || undefined,
                liveLink: data.liveLink || undefined,
                techStack: data.techStack || [],
                projectImages: data.projectImages || [], // Array of URLs from Cloudinary
            };
        });
        return projects;
    } catch (error) {
        console.error("Error fetching projects:", error);
        throw error;
    }
};
