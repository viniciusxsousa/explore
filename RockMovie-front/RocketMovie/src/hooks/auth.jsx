import { createContext, useContext, useState } from "react";

import { api } from '../services/api'

const AuthContext = createContext({});

function AuthProvider({children}) {

    async function singIn({email, password}) {
        const [data, setData] = useState({});

        try {
            const response = await api.post("/sessions", { email, password });
            const {token, user} = response.data;

            api.defaults.headers.authorization = `Bearer ${token}`;

            setData({token, user});

        } catch(error) {
            if(error.response) {
                alert(error.response.data.message);
            }
        } 

    }

    return (
        <AuthContext.Provider value={{ singIn, user: data.user }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const data = useContext(AuthContext);

    return data;
}

export { AuthProvider, useAuth }