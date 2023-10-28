"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

function SubmitButton({ className, content, loading }) {
    const { pending } = useFormStatus();

    return (
        <button className={className} disabled={pending} type="submit">
            {pending ? loading : content}
        </button>
    );
}

export default SubmitButton;
