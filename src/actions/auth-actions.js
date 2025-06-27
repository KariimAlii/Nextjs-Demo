"use server";

import {createUser} from "@/training-lib/users";
import {hashUserPassword} from "@/training-lib/hash";
import {redirect} from "next/navigation";
import {createAuthSession} from "@/training-lib/auth";

export async function signup(prevState, formData) {
    const email = formData.get('email');
    const password = formData.get('password');

    // validate
    let errors = {};
    if(!email.includes('@')) {
        errors.email = 'Email is not valid email address';
    }
    if(password.trim().length < 8) {
        errors.password = 'Password must be at least 8 characters long';
    }

    if(Object.keys(errors).length > 0) {
        return {errors};
    }
    // store in DB

    const hashedPassword = hashUserPassword(password);


    try {
        const userId = createUser(email, hashedPassword);
        await createAuthSession(userId);
        redirect('/training');
    } catch(err) {
        if(err.code === 'SQLITE_CONSTRAINT_UNIQUE') {
            return {
                errors: {
                    email: 'User already exists'
                }
            }
        }
        throw err;
    }
}