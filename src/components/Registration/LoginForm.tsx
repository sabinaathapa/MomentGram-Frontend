import React, {useState} from "react";
import Cookies from 'js-cookie';

const LoginForm: React.FC =()=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState<string>("");
     const handleSubmit = async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const loginData ={
            username,
            password,
        };
        try{
            const response = await fetch('http://localhost:8000/api/v1/accounts/user_login/',{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData),
                 
        });
        if (response.ok){
            const data = await response.json();
            console.log(data.data.access_token);
            console.log(data.data.refresh_token)
            Cookies.set("access_token",data.data.access_token);
            Cookies.set("refresh_token", data.data.refresh_token);

            alert("Successful Login");
            setUsername("");
            setPassword("");

        }else{
            const errorData = await response.json();
            setErrorMessage(errorData.detail || "Login Failed");
        }}catch (error){
            console.error("Error during fetch:", error);
            setErrorMessage("An error occured during login");
        }};
        
    
    return(
        <>
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" value={username} onChange={(e=>setUsername(e.target.value))}/>
            <input type="password" placeholder="*********" value={password} onChange={(e=>setPassword(e.target.value))}/>
            <button type="submit">Login</button>
            {errorMessage && <div style={{color:'red'}}>{errorMessage}</div>}
        </form>
        </>
    )
};
export default LoginForm;

