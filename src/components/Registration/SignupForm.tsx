import React, {useState} from "react";

const SignupForm: React.FC =()=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [profilePicture, setProfilePicture] = useState<File|null>(null);

    const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.files && e.target.files[0]){
            setProfilePicture(e.target.files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const signupData ={
            username,
            password,
            email,
            firstName,
            lastName,
            profilePicture
        };
    }
    return(
        <>
        <h3>Sign Up</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username" value={username} onChange={(e=>setUsername(e.target.value))} />
            <input type="password" placeholder="********" value={password} onChange={(e=>setPassword(e.target.value))} />
            <input type="email" placeholder="abc@example.com" value={email} onChange={(e=>setEmail(e.target.value))} />
            <input type="text" placeholder="First Name" value={firstName} onChange={(e=>setFirstName(e.target.value))}/>
            <input type="text" placeholder="Last Name" value={lastName} onChange={(e=>setLastName(e.target.value))}/>
            <input type="file" onChange={handleProfileChange} />
            <button type="submit">Sign Up</button>
        </form>
        </>
    )
    
};
export default SignupForm;