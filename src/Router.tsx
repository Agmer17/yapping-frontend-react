import { createBrowserRouter, Navigate, Outlet, useLocation } from "react-router";
import { Home } from "./features/feed";
import { Login, SignUp } from "./features/auth";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "./animation/pageTransition";
import { useAuth } from "./context/AuthContext";

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


export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { token } = useAuth();

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
};

export const ProtectedLayout = () => {
    return (
        <ProtectedRoute>
            <Outlet />
        </ProtectedRoute>
    );
};


const router = createBrowserRouter([
    {
        element: <AnimatedOutlet />,
        children: [
           {
            element : <ProtectedLayout />,
            children : [
                {
                    path : "/",
                    element : <Home />
                }
            ]
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