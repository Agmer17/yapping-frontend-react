import NeoContainer from "../../../shared/Container";
import SignUpForm from "../component/SignUpForm";
import { useSignUp } from "../hooks/useSignUp";
import loginImage from "./../../../assets/loginImage.png"
import { useEffect } from "react";
import { useNavigate } from "react-router";
import AuthNotification from "../component/AuthNotification";

export default function SignUp() {

    const { loading, error, setError, success, postSignUp } = useSignUp()
    const navigate = useNavigate()

    useEffect(() => {
        if (success != null) {
            setTimeout(() => {
                navigate("/login");
            }, 1000);

        }

    }, [success])

    return (

        <div className="w-full h-screen flex justify-center items-center overflow-hidden">
            <NeoContainer className="flex w-full h-full md:w-[85%] md:h-[85%] items-center gap-6">
                <SignUpForm loading={loading} postSignUp={postSignUp} />
                <div className="flex-1 h-full overflow-hidden border-2 rounded-2xl hidden md:block">
                    <img src={loginImage} className="w-full h-full object-cover" />
                </div>
            </NeoContainer>
            
            <AuthNotification error={error} onClose={()=> setError(null)} success={success}></AuthNotification>

        </div>

    )
}