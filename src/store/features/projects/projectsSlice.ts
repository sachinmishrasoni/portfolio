// store/projectsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProjects } from "./projectThunks"; // Import thunk
import { ProjectData } from "@/services/projectService";

interface ProjectsState {
    projects: ProjectData[];
    loading: boolean;
    error: string | null;
}

const initialState: ProjectsState = {
    projects: [],
    loading: false,
    error: null,
};

const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        clearError(state) {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProjects.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProjects.fulfilled, (state, action: PayloadAction<ProjectData[]>) => {
                state.loading = false;
                state.projects = action.payload;
            })
            .addCase(fetchProjects.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to fetch projects";
            });
    },
});

export const { clearError } = projectsSlice.actions;
export default projectsSlice.reducer;
