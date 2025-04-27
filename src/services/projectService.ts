// projectService.ts
import { db } from "@/lib/firebase"; // Adjust path as needed
import { collection, addDoc, getDocs, doc, setDoc, query  } from "firebase/firestore";
import { uploadImagesToStorage } from "./imageService"; // Adjust path

interface ImageFile {
    url: string;
    file: File;
}

export interface ProjectData {
    projectName: string;
    startDate: Date | null;
    endDate: Date | null;
    status: "Ongoing" | "Completed";
    githubLink?: string;
    liveLink?: string;
    techStack: string[];
    description: string;
    projectImages?: ImageFile[];
}

// Save project data to Firestore
export const saveProject = async (projectData: ProjectData): Promise<string> => {
    try {
        // Add project to Firestore to get an ID
        const docRef = await addDoc(collection(db, "projects"), {
            projectName: projectData.projectName,
            startDate: projectData.startDate ? projectData.startDate.toISOString() : null,
            endDate: projectData.endDate ? projectData.endDate.toISOString() : null,
            status: projectData.status,
            githubLink: projectData.githubLink || "",
            liveLink: projectData.liveLink || "",
            techStack: projectData.techStack,
            description: projectData.description,
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

// Fetch all projects from Firestore
export const getProjects = async (): Promise<ProjectData[]> => {
    try {
        const q = query(collection(db, "projects"));
        const querySnapshot = await getDocs(q);
        const projects: ProjectData[] = querySnapshot.docs.map((doc) => {
            const data = doc.data();
            return {
                id: doc.id,
                projectName: data.projectName,
                startDate: data.startDate ? new Date(data.startDate) : null,
                endDate: data.endDate ? new Date(data.endDate) : null,
                status: data.status,
                githubLink: data.githubLink || undefined,
                liveLink: data.liveLink || undefined,
                techStack: data.techStack || [],
                description: data.description,
                projectImages: data.projectImages || [], // Array of URLs from Cloudinary
            };
        });
        return projects;
    } catch (error) {
        console.error("Error fetching projects:", error);
        throw error;
    }
};
