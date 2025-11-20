import NeoContainer from "../../../shared/Container";
import SignUpForm from "../component/SignUpForm";
import loginImage from "./../../../assets/loginImage.png"

export default function SignUp() {
    return (

        <div className="w-full h-screen flex justify-center items-center overflow-hidden">
            <NeoContainer className="flex w-full h-full md:w-[85%] md:h-[85%] items-center gap-6">
                <SignUpForm></SignUpForm>
                 <div className="flex-1 h-full overflow-hidden border-2 rounded-2xl hidden md:block">
                    <img src={loginImage} className="w-full h-full object-cover" />
                </div>
            </NeoContainer>


        </div>

    )
}