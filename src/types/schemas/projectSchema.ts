import * as z from 'zod';

// Define validation schema with Zod
export const projectSchema = z.object({
    title: z.string().min(1, 'Project Name is required'),
    startDate: z.date().nullable(),
    endDate: z.date().nullable().refine((val) => !val || (val >= new Date()), {
        message: 'End Date cannot be in the past',
    }),
    status: z.enum(['Ongoing', 'Completed']),
    githubLink: z.string().url('Must be a valid URL').optional().or(z.literal('')),
    liveLink: z.string().url('Must be a valid URL').optional().or(z.literal('')),
    techStack: z.array(z.string()).min(1, 'At least one tech is required'),
    description: z.string().min(1, 'Description is required'),
    projectImages: z.array(
        z.object({
            url: z.string(),
            file: z.any(), // File objects can't be fully validated by Zod, so use z.any()
        })
    ).optional(),
});

// Type for form data
export type ProjectFormData = z.infer<typeof projectSchema>;