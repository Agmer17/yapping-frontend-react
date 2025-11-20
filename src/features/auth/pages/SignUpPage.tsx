import { AnimatePresence, motion } from "framer-motion";
import NeoContainer from "../../../shared/Container";
import SignUpForm from "../component/SignUpForm";
import { useSignUp } from "../hooks/useSignUp";
import loginImage from "./../../../assets/loginImage.png"
import { isErrorResponse, isValidationError } from "../types/authTypes";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function SignUp() {

    const { loading, error, setError, success, postSignUp } = useSignUp()
    const navigate = useNavigate()

    const getErrorMessage = () => {
        if (isErrorResponse(error)) return error.error;
        if (isValidationError(error)) return "harap isi data dengan benar!";
        return undefined;
    };

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
                                <span className="flex-1 text-center">
                                    {error && getErrorMessage()}
                                </span>

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

                <AnimatePresence>
                    {success && (
                        <motion.div
                            initial={{ x: 300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 300, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 120, damping: 15 }}
                            className="absolute top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[60%] z-50"
                        >
                            <div
                                role="alert"
                                className="alert alert-success flex justify-between items-center text-center"
                            >
                                <span className="flex-1 text-center">
                                    {success.message}
                                </span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 shrink-0 stroke-current"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </NeoContainer>


        </div>

    )
}