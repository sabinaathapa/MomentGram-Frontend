import React, {useState} from "react";

const LoginForm: React.FC =()=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
     const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const loginData ={
            username,
            password,
        };
        console.log(loginData);
    };
    
    return(
        <>
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" value={username} onChange={(e=>setUsername(e.target.value))}/>
            <input type="password" placeholder="*********" value={password} onChange={(e=>setPassword(e.target.value))}/>
            <button type="submit">Login</button>
        </form>
        </>
    )
};

export default LoginForm;

