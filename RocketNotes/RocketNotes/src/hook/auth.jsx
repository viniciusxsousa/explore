import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

import { api } from '../services/index';

const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [ data, setData ] = useState('');

    async function signIn({ email, password }) {

        try {
            const response = await api.post('/session', { email, password });
            const {token, user} = response.data;

            api.defaults.headers.authorization = `Bearer ${token}`;

            setData({token, user});

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert('Não foi possível realizar o login. Tente novamente mais tarde.');
            }
        }
    }

    return (
        <AuthContext.Provider value={{ signIn, user: data.user }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context
}

export { AuthProvider, useAuth };