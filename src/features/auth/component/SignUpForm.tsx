import { Link } from "react-router";
import { PrimaryButton, SecondaryButton } from "../../../shared/Button";
import { InputBorderlessFocus } from "../../../shared/Input";
import type { SignUpRequest, SuccessSignUp } from "../types/authTypes";
import { useState } from "react";

interface SignUpProps {
    postSignUp: (data: SignUpRequest) => Promise<SuccessSignUp | undefined>
    loading: boolean
}

export default function SignUpForm({ postSignUp, loading }: SignUpProps) {

    const [username, setUsername] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [fullName, setFullName] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleSubmit = async () => {
        let data = {username,email,fullName,password}
        await postSignUp(data)
    }

    return (
        <div className="flex flex-1 flex-col gap-4 items-center font-bold">

            <h1 className="text-3xl text-primary">Daftar</h1>
            <InputBorderlessFocus onChange={(e) => setUsername(e.target.value)}
                type="text"
                className="w-full"
                placeholder="username">
            </InputBorderlessFocus>

            <InputBorderlessFocus
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="w-full"
                placeholder="email">
            </InputBorderlessFocus>

            <InputBorderlessFocus
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                className="w-full"
                placeholder="full name">
            </InputBorderlessFocus>

            <InputBorderlessFocus
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="w-full"
                placeholder="password">
            </InputBorderlessFocus>

            <PrimaryButton className="w-full" onClick={handleSubmit}>

                {loading ? (
                    <span className="loading loading-dots loading-md"></span>
                ) : (
                    "Daftar"
                )}
            </PrimaryButton>

            <div className="divider divider-secondary text-primary">OR</div>

            <Link to={"/login"} className="w-full">
                <SecondaryButton className="w-full" >
                    Masuk
                </SecondaryButton>
            </Link>

        </div>
    )

}