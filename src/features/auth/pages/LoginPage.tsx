import NeoContainer from "../../../shared/Container";
import LoginForm from "../component/LoginForm";
import { useLogin } from "../hooks/usePostLogin";
import loginImage from "./../../../assets/loginImage.png"
import AuthNotification from "../component/AuthNotification";

export default function LoginPage() {

    const { error, setError, postLoginForm, loading, successData } = useLogin()
    return (
        <div className="w-full h-screen flex justify-center items-center overflow-hidden">
            <NeoContainer className="flex w-full h-full md:w-[80%] md:h-[80%] items-center gap-4">
                <div className="flex-1 h-full overflow-hidden border-2 rounded-2xl hidden md:block">
                    <img src={loginImage} className="w-full h-full object-cover" />
                </div>
                <LoginForm postLoginForm={postLoginForm} loading={loading} sucess={successData}/>
               <AuthNotification error={error} onClose={()=> setError(null)} success={null}>

               </AuthNotification>
            </NeoContainer>
        </div>


    )

}