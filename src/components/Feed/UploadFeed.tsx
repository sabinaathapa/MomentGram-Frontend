import React, {useState} from "react";

interface PostData {
    content: string;
    caption: string;
}
const CreatePostForm: React.FC =()=>{
    const [postData, setPostData]= useState<PostData>({
        content: '',
        caption: '',
    });
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        const {name, value}= e.target;
        setPostData(prevData => ({...prevData, [name]:[value]}));
 };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        try{
            const response = await fetch('http://localhost:8000/api/v1/myapp/posts/',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData)
            })
            if (response.ok){
                alert("Post created");
                setPostData({ content : '', caption: ''});
            }
            else{
                const errorData = await response.json();
                setErrorMessage(errorData.detail || 'An error occured.');
            }}
            catch (error){
                alert('Error occured.');
                setErrorMessage('An error occured while creating a post.');
            }        };
    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white dark:bg-black rounded-md shadow-md">
            <textarea
                className="w-full p-2 mb-2 border rounded-md resize-none dark:bg-gray-800 dark:text-white"
                name="content"
                placeholder="What's on your mind?"
                value={postData.content}
                onChange={handleChange}
                />

            <input 
                type="text"
                className="w-full p-2 mb-2 border rounded-md dark:bg-gray-800 dark:text-white"
                name="caption"
                placeholder="Add a caption..."
                value={postData.caption}
                onChange={handleChange}
                />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Post</button>
            {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}

        </form>
    );


    };
export default CreatePostForm;