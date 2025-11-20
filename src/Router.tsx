import { createBrowserRouter, Outlet, useLocation } from "react-router";
import { Home } from "./features/feed";
import { Login, SignUp } from "./features/auth";
import { PageTransition } from "./animation/PageTransition";
import { AnimatePresence } from "framer-motion";

// Wrapper component untuk handle transitions
const AnimatedOutlet = () => {
    const location = useLocation();
    
    return (
        <AnimatePresence mode="wait">
            <PageTransition key={location.pathname}>
                <Outlet />
            </PageTransition>
        </AnimatePresence>
    );
};

const router = createBrowserRouter([
    {
        element: <AnimatedOutlet />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/sign-up",
                element: <SignUp />
            }
        ]
    }
]);

export default router;