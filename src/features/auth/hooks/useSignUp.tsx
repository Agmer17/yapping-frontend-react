import { useState } from "react";
import type { ErrorResponse, SignUpRequest, SuccessSignUp, ValidationError } from "../types/authTypes";

export function useSignUp() {

    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<ErrorResponse | ValidationError | null>(null)
    const [success, setSuccess] = useState<SuccessSignUp | null>(null)

    async function postSignUp(data: SignUpRequest) {
        setLoading(true)
        setError(null)

        try {
            const res = await fetch("http://localhost/api/auth/sign-up", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "username" : data.username,
                    "email" : data.email,
                    "full_name" : data.fullName,
                    "password" : data.password

                }),
            })

            if (!res.ok) {
                let parsed: ErrorResponse | ValidationError | null = null;

                try {
                    const json = await res.json();

                    if (json.errors) {
                        parsed = json.errors;
                    } else if (json.error) {
                        parsed = { error: json.error };
                    } else {
                        parsed = { error: "Request failed" };
                    }

                } catch (_) {
                    parsed = { error: "Request failed" };
                }

                console.log(parsed)
                setError(parsed);

                throw new Error("Request failed");
            }

            const respData: SuccessSignUp = await res.json()
            setSuccess(respData)

            return respData
        } catch (_) {

        } finally {
            setLoading(false)
        }

        
    }
    return {loading, error, setError, success, postSignUp}
}

