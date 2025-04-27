import { alpha, Box, Button, Stack, Typography, useTheme } from '@mui/material';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { IconList } from '@/utils/iconList'; // Adjust path as needed
import CustomTextField from '@/components/ui/CustomTextField'; // Adjust path as needed
import SpotlightPaper from '@/components/ui/SpotlightPaper'; // Adjust path as needed
import { useDispatch } from 'react-redux';
import { showToast } from '@/store/features/ui/uiSlice';
import ConfirmationDialog from '@/components/common/ConfirmationDialog';
import { ContactFormData, contactFormSchema } from '@/types/schemas/contactFormSchema';


const ContactForm = () => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const [loading, setLoading] = React.useState(false);
    const [openDialog, setOpenDialog] = React.useState(false);

    // Initialize react-hook-form with yup resolver
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        },
    });

    useEffect(() => {
        const fieldOrder: (keyof ContactFormData)[] = ['name', 'email', 'phone', 'subject', 'message'];

        const firstErrorKey = fieldOrder.find((field) => errors[field]);

        if (firstErrorKey && errors[firstErrorKey]?.message) {
            dispatch(showToast({
                message: errors[firstErrorKey].message,
                severity: 'error'
            }));
        }
    }, [errors, dispatch]);

    // Handle form submission to Formspree
    const confirmSubmit = async (data: ContactFormData) => {
        setLoading(true);
        try {
            const response = await fetch('https://formspree.io/f/xeqbplgd', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Name: data.name,
                    Email: data.email,
                    Mobile: data.phone,
                    Subject: data.subject,
                    Message: data.message,
                }),
            });

            if (response.ok) {
                dispatch(showToast({ message: 'Form submitted successfully!', severity: 'success' }));
                reset(); // Reset form after successful submission
            } else {
                dispatch(showToast({ message: 'Form submission failed.', severity: 'error' }));
            }
        } catch (error) {
            dispatch(showToast({ message: 'Error submitting form.', severity: 'error' }));
            console.error('Error submitting form:', error);
        } finally {
            setLoading(false);
        }
    };

    // Handle form submission
    const onSubmit = () => {
        setOpenDialog(true); // Open confirmation dialog
    };

    return (
        <>
            <ConfirmationDialog
                open={openDialog}
                title="Confirmation Submission"
                message="Are you sure you want to submit this form?"
                onCancel={() => setOpenDialog(false)}
                onConfirm={() => {
                    setOpenDialog(false);
                    handleSubmit(confirmSubmit)();
                }}
            />

            <SpotlightPaper
                spotlightColor={alpha(theme.palette.primary.main, 0.25)}
                sx={{
                    p: 2,
                    borderRadius: 2,
                    position: 'relative',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                    overflow: 'hidden',
                    zIndex: 5,
                }}
            >
                <Typography variant="h6" color="text.secondary">
                    Send me a message
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)} // Use handleSubmit from react-hook-form
                    sx={{
                        mt: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                    }}
                >
                    <CustomTextField
                        // required
                        placeholder="Name"
                        prefixIcon={<IconList.user fontSize={20} />}
                        {...register('name')}
                        disabled={loading}
                        error={!!errors.name}
                    // helperText={errors.name?.message}
                    />
                    <Stack direction={{ xs: 'column', sm: 'row' }} gap={2}>
                        <CustomTextField
                            // required
                            placeholder="Email"
                            type="email"
                            prefixIcon={<IconList.email fontSize={20} />}
                            {...register('email')}
                            disabled={loading}
                            error={!!errors.email}
                        // helperText={errors.email?.message}
                        />
                        <CustomTextField
                            // required
                            placeholder="Phone"
                            type="tel"
                            prefixIcon={<IconList.phone fontSize={20} />}
                            {...register('phone')}
                            disabled={loading}
                            error={!!errors.phone}
                        // helperText={errors.phone?.message}
                        />
                    </Stack>
                    <CustomTextField
                        // required
                        placeholder="Subject"
                        prefixIcon={<IconList.user fontSize={20} />}
                        {...register('subject')}
                        disabled={loading}
                        error={!!errors.subject}
                    // helperText={errors.subject?.message}
                    />
                    <CustomTextField
                        // required
                        placeholder="Message"
                        multiline
                        rows={5}
                        {...register('message')}
                        disabled={loading}
                        error={!!errors.message}
                    // helperText={errors.message?.message}
                    />
                    <Button variant="contained" type="submit" sx={{ borderRadius: 25 }} disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit'}
                    </Button>
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '-30px',
                        right: '-20px',
                        borderRadius: '50%',
                        color: 'primary.light',
                        zIndex: -1,
                        opacity: (theme) => (theme.palette.mode === 'dark' ? 0.02 : 0.05),
                    }}
                >
                    <IconList.telegram fontSize={300} />
                </Box>
            </SpotlightPaper>
        </>
    );
};

export default ContactForm;
