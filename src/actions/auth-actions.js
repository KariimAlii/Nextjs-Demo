"use server";

import {createUser, getUserByEmail} from "@/training-lib/users";
import {hashUserPassword, verifyPassword} from "@/training-lib/hash";
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

export async function login(prevState, formData) {
    const email = formData.get('email');
    const password = formData.get('password');
    const existingUser = getUserByEmail(email);
    if(!existingUser) {
        return {
            errors: {
                email: 'Could not authenticate user, Check credentials'
            }
        }
    }
    const isValidPassword = verifyPassword(existingUser.password, password);
    if(!isValidPassword) {
        return {
            errors: {
                password: 'Could not authenticate user, Check credentials'
            }
        }
    }

    await createAuthSession(existingUser.id);
    redirect('/training');
}

export async function auth(mode, prevState, formData) {
    if(mode === 'login') {
        return login(prevState, formData);
    }
    return signup(prevState, formData);
}