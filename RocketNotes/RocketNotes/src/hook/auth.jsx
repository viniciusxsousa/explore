import { useContext } from "react";
import { createContext } from "react";

const AuthContext = createContext({});

function AuthProvider({children}) {
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context
}

export { AuthProvider, useAuth };