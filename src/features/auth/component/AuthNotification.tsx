import { AnimatePresence, motion } from "framer-motion";
import { isErrorResponse, type ErrorResponse, type SuccessSignUp, type ValidationError } from "../types/authTypes";

interface NotificationProps {
    error: ErrorResponse | ValidationError | null,
    onClose: () => void,
    success: SuccessSignUp | null

}
export default function AuthNotification({ error, onClose, success }: NotificationProps) {

    return (
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
                        <span className="flex-1 text-center font-extrabold">
                            {error
                                ? isErrorResponse(error)
                                    ? error.error
                                    : "Harap isi data dengan benar"
                                : null}
                        </span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 shrink-0 stroke-current cursor-pointer"
                            fill="none"
                            viewBox="0 0 24 24"
                            onClick={onClose}
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
                        <span className="flex-1 text-center text-white font-extrabold">
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
    )

}