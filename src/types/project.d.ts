interface ImageFile {
    url: string;
    file: File;
}

export interface IProjectProps {
    title: string,
    description: string,
    startDate: Date | null,
    endDate: Date | null,
    status: 'ongoing' | 'completed',
    githubLink?: string,
    liveLink?: string,
    techStack: string[],
    projectImages?: ImageFile[]
};
