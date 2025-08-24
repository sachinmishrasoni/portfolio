import { Container, Grid2, Stack, Typography } from '@mui/material'
import CustomTextField from '@/components/ui/CustomTextField'
import CustomSelect from '@/components/ui/CustomSelect'
import CustomDatePicker from '@/components/ui/CustomDatePicker'
import { IconList } from '@/utils/iconList'
import ImagePreview from './ImagePreview'
import TipTapEditor from '@/components/common/TipTapEditor'
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import CustomBreadcrumb from '@/components/common/CustomBreadcrumb';
import CustomButton from '@/components/ui/CustomButton';
import { ProjectFormData, projectSchema } from '@/types/schemas/projectSchema'
import TechStackInput from '@/components/common/TechStackInput'
import { useState } from 'react'
import { saveProject } from '@/services/projectService'

interface ImageFile {
    url: string;
    file: File;
}

const AddEditProject = () => {

    // Initialize React Hook Form
    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
        reset
    } = useForm<ProjectFormData>({
        resolver: zodResolver(projectSchema),
        defaultValues: {
            title: '',
            startDate: null,
            endDate: null,
            status: 'Ongoing' as const,
            githubLink: '',
            liveLink: '',
            techStack: [],
            description: '',
            projectImages: [],
        },
    });

    const techStack = watch('techStack');
    const projectImages = watch("projectImages") as ImageFile[]; // Cast to ImageFile[]
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    // Handle form submission
    // const onSubmit = (data: ProjectFormData) => {
    //     const transformedData = {
    //         ...data,
    //         projectImages: imageFiles.map((img: ImageFile) => img.url), // Convert ImageFile[] to string[]
    //     };
    //     console.log('Form Data:', transformedData);
    // };
    const onSubmit = async (data: ProjectFormData) => {
        // setIsSubmitting(true);
        try {
            const safeData: any = {
                ...data,
                projectImages: data.projectImages || [],
            };
            const projectId = await saveProject(safeData);
            console.log("Project saved with ID:", projectId);
            reset();
            setPreviewImage(null);
        } catch (error) {
            console.error("Submission error:", error);
        } finally {
            // setIsSubmitting(false);
        }
    };

    const handleTechStackChange = (updatedTechStack: string[]) => {
        setValue("techStack", updatedTechStack);
    };

    const handleImagesChange = (newImages: ImageFile[]) => {
        setValue("projectImages", newImages); // Update form state
    };

    const handlePreviewChange = (imageUrl: string | null) => {
        setPreviewImage(imageUrl); // Update local preview state
    };

    const breadcrumbItems = [
        { label: "Portfolio", },
        { label: "Projects", },
        { label: "Add Project", isLast: true },
    ];
    return (
        <Container maxWidth={'md'} disableGutters sx={{ mb: 5 }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12 }}>
                        <CustomBreadcrumb items={breadcrumbItems} />
                    </Grid2>

                    <Grid2 size={{ xs: 12 }}>
                        <ImagePreview
                            images={projectImages}
                            previewImage={previewImage}
                            onImagesChange={handleImagesChange}
                            onPreviewChange={handlePreviewChange}
                        />
                    </Grid2>

                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Controller
                            name="title"
                            control={control}
                            render={({ field }) => (
                                <CustomTextField
                                    {...field}
                                    placeholder="Project Name"
                                    label="Project Name"
                                    error={!!errors.title}
                                    helperText={errors.title?.message}
                                />
                            )}
                        />
                    </Grid2>

                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Controller
                            name="status"
                            control={control}
                            render={({ field }) => (
                                <CustomSelect
                                    {...field}
                                    options={[
                                        { value: 'ongoing', label: 'Ongoing' },
                                        { value: 'completed', label: 'Completed' }
                                    ]}
                                    prefix="Status"
                                    error={!!errors.status}
                                />
                            )}
                        />
                    </Grid2>

                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Controller
                            name="startDate"
                            control={control}
                            render={({ field }) => (
                                <CustomDatePicker
                                    label="Start Date"
                                    value={field.value} // Date | null
                                    onChange={field.onChange} // Expects Date | null
                                    error={!!errors.startDate}
                                    errorMessage={errors.startDate?.message}
                                />
                            )}
                        />
                    </Grid2>

                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Controller
                            name="endDate"
                            control={control}
                            render={({ field }) => (
                                <CustomDatePicker
                                    label="End Date"
                                    value={field.value} // Date | null
                                    onChange={field.onChange} // Expects Date | null
                                    error={!!errors.endDate}
                                    errorMessage={errors.endDate?.message}
                                />
                            )}
                        />
                    </Grid2>

                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Controller
                            name="githubLink"
                            control={control}
                            render={({ field }) => (
                                <CustomTextField
                                    {...field}
                                    placeholder="GitHub Link"
                                    label="GitHub Link"
                                    error={!!errors.githubLink}
                                    helperText={errors.githubLink?.message}
                                />
                            )}
                        />
                    </Grid2>

                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Controller
                            name="liveLink"
                            control={control}
                            render={({ field }) => (
                                <CustomTextField
                                    {...field}
                                    placeholder="Live Link"
                                    label="Live Link"
                                    error={!!errors.liveLink}
                                    helperText={errors.liveLink?.message}
                                />
                            )}
                        />
                    </Grid2>

                    <Grid2 size={{ xs: 12, md: 12 }} >
                        <TechStackInput
                            techStack={techStack}
                            onChange={handleTechStackChange}
                            error={!!errors.techStack}
                            helperText={errors.techStack?.message}
                        />
                    </Grid2>

                    <Grid2 size={{ xs: 12, md: 12 }}>
                        <Controller
                            name="description"
                            control={control}
                            render={({ field }) => (
                                <TipTapEditor
                                    content={field.value}
                                    onChange={(content) => field.onChange(content)}
                                // error={!!errors.description}
                                />
                            )}
                        />
                        {errors.description && (
                            <Typography color="error" variant="caption">
                                {errors.description.message}
                            </Typography>
                        )}
                    </Grid2>

                    <Grid2 size={{ xs: 12, md: 12 }}>
                        <Stack direction={'row'} alignItems={'center'} justifyContent={'flex-end'} gap={1}>
                            <CustomButton
                                shape='round'
                                variant='outlined'
                                color="error"
                                startIcon={<IconList.close />}
                                sx={{ px: 4 }}
                            >
                                Cancel
                            </CustomButton>
                            <CustomButton
                                type="submit"
                                shape='round'
                                variant='contained'
                                color="primary"
                                startIcon={<IconList.save />}
                                sx={{ px: 4 }}
                            >
                                Save
                            </CustomButton>
                        </Stack>
                    </Grid2>
                </Grid2>
            </form>
        </Container>
    )
}

export default AddEditProject
