import React, {useState} from "react";

const SignupForm: React.FC =()=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [profilePicture, setProfilePicture] = useState<File|null>(null);

    const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.files && e.target.files[0]){
            setProfilePicture(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const signupData ={
            username,
            password,
            email,
            first_name,
            last_name,
            profilePicture
        };
    

    try{
        const response = await fetch('http://localhost:8000/api/v1/accounts/user_register/',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(signupData),
});
    if (response.ok){
        alert("Sign Up Successful");
    }
    else{
        alert("Something went wrong");
    }
    console.log(response.json)  
} catch (error){
    alert("Error in Sign Up");
}
};
    
    return(
        <>
        <h3>Sign Up</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username" value={username} onChange={(e=>setUsername(e.target.value))} />
            <input type="password" placeholder="*********" value={password} onChange={(e=>setPassword(e.target.value))} />
            <input type="email" placeholder="abc@example.com" value={email} onChange={(e=>setEmail(e.target.value))} />
            <input type="text" placeholder="First Name" value={first_name} onChange={(e=>setFirst_name(e.target.value))}/>
            <input type="text" placeholder="Last Name" value={last_name} onChange={(e=>setLast_name(e.target.value))}/>
            <input type="file" onChange={handleProfileChange} />
            <button type="submit">Sign Up</button>
        </form>
        </>
    )
    
};
export default SignupForm;