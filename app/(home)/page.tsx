"use client";

import { useState } from "react";
import { Heart, Trash2 } from "lucide-react";

export default function HomePage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [text, setText] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const handleImage = (e: any) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setImage(reader.result as string);
    reader.readAsDataURL(file);
  };

  const createPost = () => {
    if (!text.trim() && !image) return;

    const newPost = {
      id: Date.now(),
      text,
      image,
      likes: 0,
      liked: false,
      time: "Just now",
    };

    setPosts([newPost, ...posts]);
    setText("");
    setImage(null);
  };

  const toggleLike = (id: number) => {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  const deletePost = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="max-w-lg mx-auto p-4 pb-20">
      <h1 className="text-2xl font-bold mb-4">Home</h1>

      {/* Create Post */}
      <div className="p-4 bg-zinc-100 dark:bg-zinc-900 rounded-xl mb-6">
        <textarea
          className="w-full p-3 rounded-lg bg-zinc-200 dark:bg-zinc-800 outline-none"
          placeholder="What's on your mind?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {image && (
          <img
            src={image}
            className="w-full rounded-xl mt-3"
          />
        )}

        <div className="flex items-center justify-between mt-3">
          <label className="px-3 py-2 bg-blue-500 text-white rounded-lg cursor-pointer">
            Add Photo
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImage}
            />
          </label>

          <button
            onClick={createPost}
            className="px-5 py-2 bg-green-600 text-white rounded-lg font-semibold"
          >
            Post
          </button>
        </div>
      </div>

      {/* Posts Feed */}
      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-4 bg-zinc-100 dark:bg-zinc-900 rounded-xl"
          >
            <p className="mb-3">{post.text}</p>

            {post.image && (
              <img
                src={post.image}
                className="w-full rounded-xl mb-3"
              />
            )}

            <div className="flex justify-between items-center">
              <button
                className="flex items-center gap-1"
                onClick={() => toggleLike(post.id)}
              >
                <Heart
                  size={20}
                  className={post.liked ? "fill-red-500 text-red-500" : ""}
                />
                <span>{post.likes}</span>
              </button>

              <button
                onClick={() => deletePost(post.id)}
                className="text-red-500"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
