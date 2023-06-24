import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}

export function AuthProvider({ children }){

    const [logged, setLogged] = useState(false)
    const [loading, setLoding] = useState(false)

    function signIn(){
        return new Promise(resolve => {
            setLoding(true)
            setTimeout(function(){
                setLogged(true)
                setLoding(false)
            }, 2000)
        })
    }

    return(
        <AuthContext.Provider value={{ logged, signIn, loading }}>
            { children }
        </AuthContext.Provider>
    )
}
export default AuthContext;
