import { storage } from "@/lib/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

interface ImageFile {
    url: string;
    file: File;
}

// Upload a single image to Firebase Storage
export const uploadSingleImage = async (
    image: File,
    path: string = "images",
    fileName?: string
): Promise<string> => {
    try {
        const finalFileName = fileName || `${Date.now()}_${image.name}`;
        const storageRef = ref(storage, `${path}/${finalFileName}`);
        await uploadBytes(storageRef, image);
        const downloadURL = await getDownloadURL(storageRef);
        return downloadURL;
    } catch (error) {
        console.error("Error uploading single image:", error);
        throw error;
    }
};

// Upload multiple images to Firebase Storage
export const uploadMultipleImages = async (
    images: File[],
    path: string = "images",
    prefix: string = "image"
): Promise<string[]> => {
    try {
        const uploadPromises = images.map(async (image, index) => {
            const fileName = `${prefix}_${index}_${Date.now()}`;
            const storageRef = ref(storage, `${path}/${fileName}`);
            await uploadBytes(storageRef, image);
            const downloadURL = await getDownloadURL(storageRef);
            return downloadURL;
        });

        return Promise.all(uploadPromises);
    } catch (error) {
        console.error("Error uploading multiple images:", error);
        throw error;
    }
};

// Helper to upload images and return ImageFile objects
export const uploadImagesToStorage = async (
    images: ImageFile[],
    path: string = "images"
): Promise<string[]> => {
    try {
        const uploadPromises = images.map(async (image, index) => {
            const fileName = `image_${index}_${Date.now()}`;
            const storageRef = ref(storage, `${path}/${fileName}`);
            await uploadBytes(storageRef, image.file);
            const downloadURL = await getDownloadURL(storageRef);
            return downloadURL;
        });

        return Promise.all(uploadPromises);
    } catch (error) {
        console.error("Error uploading ImageFile array:", error);
        throw error;
    }
};
