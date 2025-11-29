import { createContext, useContext, useState } from "react";

interface AuthContextType {
    token: string | null;
    id: string | null;
    logout: () => void;
    login: (token: string, id: string) => void;
}

interface AuthProviderProps {
    children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: AuthProviderProps) {
    const [token, setToken] = useState<string | null>(() => localStorage.getItem("token"));
    const [id, setId] = useState<string | null>(() => localStorage.getItem("id"));

    function login(newToken: string, userId: string) {
        setToken(newToken);
        setId(userId);
        localStorage.setItem("token", newToken);
        localStorage.setItem("id", userId);
    }

    function logout() {
        setToken(null);
        setId(null);
        localStorage.removeItem("token");
        localStorage.removeItem("id");
    }

    return (
        <AuthContext.Provider value={{ token, id, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be inside AuthProvider");
    return ctx;
}

