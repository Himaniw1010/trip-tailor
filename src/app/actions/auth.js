"use server";
import { LoginFormSchema, SignupFormSchema } from '@/app/lib/definitions';
import db from '../lib/firebase.config';
import bcrypt from "bcrypt";
import { collection, addDoc, getDocs, where, query } from "firebase/firestore";
import { createSession } from './session'
import { redirect } from 'next/navigation'
export async function signup(state, formData) {

    // Validate form fields
    const validatedFields = SignupFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    })

    // If any form fields are invalid, return early
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { name, email, password } = validatedFields.data
    const hashedPassword = await bcrypt.hash(password, 10)

    // Query to check if user alreadcy exist
    const alreadyExistQuery = query(collection(db, "users"), where("email", "==", validatedFields.data.email))

    try {
        const querySnapshot = await getDocs(alreadyExistQuery);
        if (querySnapshot.docs.length > 0) {
            return {
                errors: {
                    userExist: true
                }
            }
        } else {
            const docRef = await addDoc(collection(db, "users"), {
                name,
                email,
                password: hashedPassword,
            });
            console.log("Document written with ID: ", docRef.id);
            return true
        }


    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function login(state, formData) {
    // Validate form fields
    const validatedFields = LoginFormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password')
    })
    console.log(validatedFields.data)
    // If any form fields are invalid, return early
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    try {
        const alreadyExistQuery = query(collection(db, "users"), where("email", "==", validatedFields.data.email))

        const querySnapshot = await getDocs(alreadyExistQuery);
        if (querySnapshot.docs.length > 0) {
            const hash = querySnapshot.docs[0].data().password
            bcrypt.compare(validatedFields.data.password, hash, async function (err, result) {
                await createSession(querySnapshot.docs[0].id)
            });
        } else {
            return {
                errors: {
                    userExist: false
                }
            }
        }
    } catch (e) {
        console.error("Error adding document: ", e);
    } finally {
        redirect('/')
    }
}