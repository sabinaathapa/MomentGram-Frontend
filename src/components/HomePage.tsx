import React from "react";
import SignupForm from "./Registration/SignupForm";
import LoginForm from "./Registration/LoginForm";
const HomePage: React.FC =()=>{
    return(
        <>
        <h2>Welcome to the MomentGram</h2>
        <SignupForm/>
        <LoginForm/>

        </>
    );
};
export default HomePage;