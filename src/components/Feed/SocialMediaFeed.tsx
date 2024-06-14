import React from "react";
import { useState, useEffect } from "react";

interface Post {
  caption: string;
  created_at: string;
  content: string;
}

const SocialFeed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:8000/api/v1/myapp/posts/');  
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data: Post[] = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('There was an error fetching the posts:', error);
                setError("Failed to load posts");
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
  return (
    <div className="bg-red dark:bg-red p-4 md:p-8">
      {posts.map((post, index) => (
        <div
          key={index}
          className="p-4 mb-4 border rounded-lg shadow-md dark:border-gray-700"
        >
          <div className="flex items-center mb-2">
            <h3 className="font-bold text-lg dark:text-white">{post.caption}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm ml-2">
              {post.created_at}
            </p>
          </div>
          <p className="text-gray-700 dark:text-gray-300">{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default SocialFeed;

