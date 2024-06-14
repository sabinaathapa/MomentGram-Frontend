import React from "react";
import { useState, useEffect } from "react";

interface Post {
  name: string;
  date: string;
  content: string;
}

const SocialFeed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Simulate fetching data (replace with actual API call later)
    const fetchedPosts: Post[] = [
      {
        name: "John Martinez",
        date: "21/08/2023",
        content:
          "I've been shopping at this brand for years, and I've never been disappointed. The clothes are...",
      },
      {
        name: "Jane Smith",
        date: "08/08/2023",
        content:
          "I absolutely love this brand! The clothes are not only stylish but also very comfortable. The quality is top-notch, and the prices are reasonable.",
      },
      // ... more posts
    ];
    setPosts(fetchedPosts);
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="bg-red dark:bg-red p-4 md:p-8">
      {posts.map((post, index) => (
        <div
          key={index}
          className="p-4 mb-4 border rounded-lg shadow-md dark:border-gray-700"
        >
          <div className="flex items-center mb-2">
            <h3 className="font-bold text-lg dark:text-white">{post.name}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm ml-2">
              {post.date}
            </p>
          </div>
          <p className="text-gray-700 dark:text-gray-300">{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default SocialFeed;

