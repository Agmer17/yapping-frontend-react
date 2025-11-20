import { useState } from "react";
import { PrimaryButton, SecondaryButton } from "../../../shared/Button"
import { InputBorderlessFocus } from "../../../shared/Input"
import { Link } from "react-router";
import type { LoginRequest, SuccessResponse } from "../types/authTypes";

interface LoginFormProps {
  postLoginForm: (loginData: LoginRequest) => Promise<SuccessResponse | undefined>
  loading: boolean;
}


export default function LoginForm({ postLoginForm, loading }: LoginFormProps) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = async () => {
        await postLoginForm({
            username: username,
            password: password
        })
    }

    return (
        <div className="flex-1 flex flex-col font-bold gap-4 items-center">
            <h1 className="text-primary text-4xl mb-4">LOGIN</h1>

            <InputBorderlessFocus
                type="text" className="md:w-[80%] w-full"
                placeholder="username"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
            />
            <InputBorderlessFocus
                type="password"
                className="md:w-[80%] w-full"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <PrimaryButton className="md:w-[80%] w-full" onClick={handleSubmit}>
                {loading ? (
                    <span className="loading loading-dots loading-md"></span>
                ) : (
                    "Login"
                )}
            </PrimaryButton>
            <div className="divider divider-secondary text-primary">
                OR
            </div>
            <Link to={"/sign-up"} className="w-full md:w-[80%]">
                <SecondaryButton className="w-full">
                    Daftar
                </SecondaryButton>
            </Link>


        </div>
    )
}