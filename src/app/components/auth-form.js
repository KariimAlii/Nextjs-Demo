"use client";

import Link from 'next/link';
import {useActionState} from "react";
import {auth, signup} from "@/actions/auth-actions";

export default function AuthForm({ mode }) {
    const [formState, formAction] = useActionState(auth.bind(null, mode), {})
    return (
        <form id="auth-form" action={formAction}>
            <div>
                <img src="/images/auth-icon.jpg" alt="A lock icon" />
            </div>
            <p>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
            </p>
            <p>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
            </p>
            <p>
                <button type="submit">
                    {mode === 'login' ? 'Login' : 'Create Account'}
                </button>

                {formState.errors &&
                    <ul id="form-errors">
                        {
                            Object.keys(formState.errors)
                                .map(errorKey =>
                                    <li key={errorKey}>{formState.errors[errorKey]}</li>
                                )
                        }
                    </ul>
                }
            </p>
            <p>
                {mode === 'login' && <Link href="/home?mode=signup">Signup with us!</Link>}
                {mode === 'signup' && <Link href="/home?mode=login">Login with existing account.</Link>}
            </p>


        </form>
    );
}
