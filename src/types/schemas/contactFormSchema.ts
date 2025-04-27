import * as z from 'zod';

export const contactFormSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: 'Name is required' })
      .min(2, { message: 'Must be at least 2 characters' })
      .max(50, { message: 'Must be at most 50 characters' })
      .regex(/^[A-Za-z ]+$/, { message: 'Only letters and spaces allowed' }),

    email: z
      .string()
      .min(1, { message: 'Email is required' })
      .email({ message: 'Please enter a valid email' }),

    phone: z
      .string()
      .min(1, { message: 'Phone number is required' })
      .regex(/^[6-9][0-9]{9}$/, { message: 'Enter a valid 10-digit Indian mobile number' }),

    subject: z
      .string()
      .min(1, { message: 'Subject is required' })
      .min(2, { message: 'Must be at least 2 characters' })
      .max(100, { message: 'Must be at most 100 characters' })
      .regex(/^[A-Za-z0-9 ]+$/, { message: 'Only letters, numbers, and spaces allowed' }),

    message: z
      .string()
      .min(1, { message: 'Message is required' })
      .min(10, { message: 'Must be at least 10 characters' }),
  })
  .superRefine((data, ctx) => {
    const fields: (keyof ContactFormData)[] = ['name', 'email', 'phone', 'subject', 'message'];
  
    for (const field of fields) {
      if (!data[field]) {
        ctx.addIssue({
          code: "custom", // ✅ Required for custom error messages
          path: [field],
          message: `${field.charAt(0).toUpperCase() + field.slice(1)} is required`,
        });
        break; // Stop at the first empty field
      }
    }
  });

export type ContactFormData = z.infer<typeof contactFormSchema>;
