import { alpha, Box, Button, Stack, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { IconList } from '../../utils/iconList'; // Adjust path as needed
import CustomTextField from '../../components/ui/CustomTextField'; // Adjust path as needed
import SpotlightPaper from '../../components/ui/SpotlightPaper'; // Adjust path as needed

// Regular Expressions
const nameExp = /^[A-Za-z ]{2,50}$/;
const emailExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const mobExp = /^[6-9][0-9]{9}$/;
const subExp = /^[A-Za-z0-9 ]{2,100}$/;

const ContactForm = () => {
    const theme = useTheme();

    // State for form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    // State for validation errors
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    // Validation function
    const validateForm = () => {
        const newErrors = {
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        };
        let isValid = true;

        // Name: Required, must match nameExp
        if (!formData.name) {
            newErrors.name = 'Name is required';
            isValid = false;
        } else if (!nameExp.test(formData.name)) {
            newErrors.name = 'Name must be 2-50 characters, letters and spaces only';
            isValid = false;
        }

        // Email: Required, must match emailExp
        if (!formData.email) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!emailExp.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
            isValid = false;
        }

        // Phone: Required, must match mobExp
        if (!formData.phone) {
            newErrors.phone = 'Phone number is required';
            isValid = false;
        } else if (!mobExp.test(formData.phone)) {
            newErrors.phone = 'Enter a valid 10-digit Indian mobile number (starts with 6-9)';
            isValid = false;
        }

        // Subject: Required, must match subExp
        if (!formData.subject) {
            newErrors.subject = 'Subject is required';
            isValid = false;
        } else if (!subExp.test(formData.subject)) {
            newErrors.subject = 'Subject must be 2-100 characters, letters, numbers, and spaces only';
            isValid = false;
        }

        // Message: Required, min 10 characters
        if (!formData.message) {
            newErrors.message = 'Message is required';
            isValid = false;
        } else if (formData.message.length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Clear error for the field as user types
        setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
            alert('Message sent! (This is a demo—just logged to console.)');
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); // Reset form
            setErrors({ name: '', email: '', phone: '', subject: '', message: '' }); // Reset errors
        } else {
            console.log('Validation failed');
        }
    };

    return (
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
                onSubmit={handleSubmit}
                sx={{
                    mt: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                }}
            >
                <CustomTextField
                    required
                    name="name"
                    placeholder="Name"
                    prefixIcon={<IconList.user fontSize={20} />}
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                />
                <Stack direction={{ xs: 'column', sm: 'row' }} gap={2}>
                    <CustomTextField
                        required
                        name="email"
                        placeholder="Email"
                        type="email"
                        prefixIcon={<IconList.email fontSize={20} />}
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                    />
                    <CustomTextField
                        required
                        name="phone"
                        placeholder="Phone"
                        type="tel"
                        prefixIcon={<IconList.phone fontSize={20} />}
                        value={formData.phone}
                        onChange={handleChange}
                        error={!!errors.phone}
                        helperText={errors.phone}
                    />
                </Stack>
                <CustomTextField
                    required
                    name="subject"
                    placeholder="Subject"
                    prefixIcon={<IconList.user fontSize={20} />}
                    value={formData.subject}
                    onChange={handleChange}
                    error={!!errors.subject}
                    helperText={errors.subject}
                />
                <CustomTextField
                    required
                    name="message"
                    placeholder="Message"
                    multiline
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    helperText={errors.message}
                />
                <Button variant="contained" type="submit" sx={{ borderRadius: 25 }}>
                    Submit
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
    );
};

export default ContactForm;