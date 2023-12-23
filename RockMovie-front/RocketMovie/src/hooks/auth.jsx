import { createContext, useContext, useState, useEffect } from "react";

import { api } from '../services/api'

const AuthContext = createContext({});

function AuthProvider({children}) {
    const [data, setData] = useState({});

    async function singIn({email, password}) {
        try {
            const response = await api.post("/sessions", { email, password });
            const {token, user} = response.data;

            localStorage.setItem("@rocketmovie:user", JSON.stringify(user));
            localStorage.setItem("@rocketmovie:token", token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({token, user});

        } catch(error) {
            if(error.response) {
                alert(error.response.data.message);
            }
        } 

    }

    function logout() {
        localStorage.removeItem("@rocketmovie:user");
        localStorage.removeItem("@rocketmovie:token");

        setData({});
    }

    useEffect(() => {
        const token = localStorage.getItem("@rocketmovie:token");
        const user = localStorage.getItem("@rocketmovie:user");

        if(token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user)
            })
        }

    },[]);

    return (
        <AuthContext.Provider value={{ 
          singIn, 
          logout,
          user: data.user
          }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const data = useContext(AuthContext);

    return data;
}

export { AuthProvider, useAuth }