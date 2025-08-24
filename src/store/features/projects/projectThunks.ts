import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProjects } from "@/services/projectService";
import { IProjectProps } from "@/types/project";

// Fetch all projects
export const fetchProjects = createAsyncThunk<IProjectProps[], void, { rejectValue: string }>(
    "projects/fetchProjects",
    async (_, { rejectWithValue }) => {
        try {
            const projects = await getProjects();
            return projects;
        } catch (error) {
            const message = error instanceof Error ? error.message : "Failed to fetch projects";
            return rejectWithValue(message);
        }
    },
    {
        condition: (_, { getState }) => {
            const { projects } = getState() as { projects: { loading: boolean; projects: IProjectProps[] } };
            return !projects.loading && projects.projects.length === 0; // Only fetch if not loading and no projects
        },
    }
);

