"use client";

import { useState, useEffect } from "react";

interface TrendingPost {
  id: number;
  user: string;
  avatar: string;
  content: string;
  likes: number;
  comments: number;
}

export default function TrendingPage() {
  const [posts, setPosts] = useState<TrendingPost[]>([]);

  useEffect(() => {
    const trendingData: TrendingPost[] = [
      {
        id: 1,
        user: "John",
        avatar: "https://i.pravatar.cc/150?img=11",
        content: "This is trending right now! 🔥🔥",
        likes: 1200,
        comments: 340,
      },
      {
        id: 2,
        user: "Anna",
        avatar: "https://i.pravatar.cc/150?img=12",
        content: "I made something cool today!",
        likes: 980,
        comments: 112,
      },
      {
        id: 3,
        user: "Mike",
        avatar: "https://i.pravatar.cc/150?img=13",
        content: "This photo is going viral!",
        likes: 1500,
        comments: 280,
      },
    ];

    setPosts(trendingData);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">🔥 Trending Now</h1>

      {posts.map((p) => (
        <div
          key={p.id}
          className="p-5 bg-white dark:bg-zinc-800 rounded-2xl shadow mb-6"
        >
          <div className="flex items-center gap-3 mb-3">
            <img
              src={p.avatar}
              alt="avatar"
              className="w-12 h-12 rounded-full"
            />
            <p className="font-semibold text-lg">{p.user}</p>
          </div>

          <p className="my-2 text-[17px]">{p.content}</p>

          <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-300 mt-3">
            <span>👍 {p.likes}</span>
            <span>💬 {p.comments}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
