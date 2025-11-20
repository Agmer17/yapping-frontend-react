import { AnimatePresence, motion } from "framer-motion";
import NeoContainer from "../../../shared/Container";
import LoginForm from "../component/LoginForm";
import { useLogin } from "../hooks/usePostLogin";
import loginImage from "./../../../assets/loginImage.png"

export default function LoginPage() {

    const { error, setError, postLoginForm, loading } = useLogin()
    return (
        <div className="w-full h-screen flex justify-center items-center overflow-hidden">
            <NeoContainer className="flex w-full h-full md:w-[80%] md:h-[80%] items-center gap-4">
                <div className="flex-1 h-full overflow-hidden border-2 rounded-2xl hidden md:block">
                    <img src={loginImage} className="w-full h-full object-cover" />
                </div>
                <LoginForm postLoginForm={postLoginForm} loading={loading} />
                <AnimatePresence>
                    {error && (
                        <motion.div
                            initial={{ x: 300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 300, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 120, damping: 15 }}
                            className="absolute top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[60%] z-50"
                        >
                            <div
                                role="alert"
                                className="alert alert-error flex justify-between items-center text-center"
                            >
                                <span className="flex-1 text-center">{error.error}</span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 shrink-0 stroke-current cursor-pointer"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    onClick={() => setError(null)}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </NeoContainer>
        </div>


    )

}