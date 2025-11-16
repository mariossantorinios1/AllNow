"use client";

import { useState, useEffect } from "react";

interface Post {
  id: number;
  user: string;
  avatar: string;
  content: string;
  likes: number;
  comments: number;
}

export default function NewsfeedPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const initialPosts: Post[] = [
      {
        id: 1,
        user: "John Doe",
        avatar: "https://i.pravatar.cc/150?img=1",
        content: "Just had an amazing day! ☀️🔥",
        likes: 125,
        comments: 14,
      },
      {
        id: 2,
        user: "Emily Rose",
        avatar: "https://i.pravatar.cc/150?img=2",
        content: "Coffee + Music = Perfect morning ☕🎶",
        likes: 78,
        comments: 8,
      },
      {
        id: 3,
        user: "Michael King",
        avatar: "https://i.pravatar.cc/150?img=3",
        content: "This platform is looking AWESOME 😍",
        likes: 201,
        comments: 32,
      },
    ];

    setPosts(initialPosts);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">📰 Newsfeed</h1>

      {posts.map((p) => (
        <div
          key={p.id}
          className="bg-white dark:bg-zinc-800 p-4 rounded-2xl shadow mb-5"
        >
          <div className="flex items-center gap-3">
            <img
              src={p.avatar}
              alt="avatar"
              className="w-12 h-12 rounded-full"
            />
            <p className="font-semibold text-lg">{p.user}</p>
          </div>

          <p className="mt-3 mb-4 text-[17px]">{p.content}</p>

          <div className="flex gap-6 text-gray-600 dark:text-gray-300 text-sm">
            <span>👍 {p.likes}</span>
            <span>💬 {p.comments}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
