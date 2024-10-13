import { z } from 'zod'

export const SignupFormSchema = z.object({
    name: z
        .string()
        .min(2, { message: 'Name must be at least 2 characters long.' })
        .trim(),
    email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
    password: z
        .string()
        .min(8, { message: 'Be at least 8 characters long' })
        .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
        .regex(/[0-9]/, { message: 'Contain at least one number.' })
        .regex(/[^a-zA-Z0-9]/, {
            message: 'Contain at least one special character.',
        })
        .trim(),
})

export const LoginFormSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
    password: z
        .string()
        .min(8, { message: 'Be at least 8 characters long' })
        .trim(),
})
export const itinerarySchema = z.object({
    title: z.string().min(2, { message: "Itinerary Title must be at least 2 characters long" }),
    country: z.string().min(2, { message: "Country name must be at least 2 characters long" }),
    duration: z.number().min(1, { message: "Duration must be at least 1 day" }),
    description: z.string().min(30, { message: "Description must be at least 30 characters long" })
})
const timeRegex = /^(0?[0-9]|1[0-9]|2[0-3]):([0-5][0-9]) ?([APap][mM])?$/;
// Define the schema for an activity
const activitySchema = z.object({
    activity_title: z.string().min(2, { message: "Activity title must be at least 2 characters long" }),
    time: z.string().regex(timeRegex, { message: "Time must be in the format HH:MM or HH:MM AM/PM" }),
    description: z.string().min(30, { message: "Description must be at least 30 characters long" })
});

// Define the schema for a day
const daySchema = z.record(activitySchema);

// Define the schema for the entire structure
export const formSchema = z.record(daySchema);
