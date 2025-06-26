"use client";

import {useFormStatus} from "react-dom";

export default function FormSubmit(params) {
    const status = useFormStatus();
    if(status.pending) {
        return <p>Creating a post....</p>
    }
    // gives you a status object which represents the status of the sorrounding form
    // must be used between <form> tags
    return (
        <>
            <button type="reset">Reset</button>
            <button>Create Post</button>
        </>
    )
}