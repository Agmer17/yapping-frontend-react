import { Link } from "react-router";
import { PrimaryButton, SecondaryButton } from "../../../shared/Button";
import { InputBorderlessFocus } from "../../../shared/Input";

export default function SignUpForm() {


    return (
        <div className="flex flex-1 flex-col gap-4 items-center font-bold">

            <h1 className="text-3xl text-primary">Daftar</h1>
            <InputBorderlessFocus type="text" className="w-full" placeholder="username">
            </InputBorderlessFocus>
            <InputBorderlessFocus type="email" className="w-full" placeholder="email">
            </InputBorderlessFocus>
            <InputBorderlessFocus type="text" className="w-full" placeholder="full name">
            </InputBorderlessFocus>
            <InputBorderlessFocus type="password" className="w-full" placeholder="password">
            </InputBorderlessFocus>

            <PrimaryButton className="w-full">
                Daftar
            </PrimaryButton>

            <div className="divider divider-secondary text-primary">OR</div>

            <Link to={"/login"} className="w-full">
                <SecondaryButton className="w-full">
                    Masuk
                </SecondaryButton>
            </Link>

        </div>
    )

}