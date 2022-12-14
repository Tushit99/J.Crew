import { createContext, useState } from "react";


export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {

    const [Auth, setAuth] = useState(false);

    const Login = () => {
        setAuth(true);
    }
    const Logout = () => {
        setAuth(false);
    }

    return <AuthContext.Provider value={{ Auth, Login, Logout }}>
        {children}
    </AuthContext.Provider> 
}

