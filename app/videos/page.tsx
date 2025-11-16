"use client";

import { useState } from "react";

interface VideoItem {
  id: number;
  user: string;
  title: string;
  url: string;
  likes: number;
}

export default function VideosPage() {
  const [videos] = useState<VideoItem[]>([
    {
      id: 1,
      user: "John",
      title: "My first vlog! 🎥",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
      likes: 540,
    },
    {
      id: 2,
      user: "Anna",
      title: "Epic sunset 🌅",
      url: "https://www.w3schools.com/html/movie.mp4",
      likes: 880,
    },
    {
      id: 3,
      user: "Mike",
      title: "Funny dog 😂🐶",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
      likes: 1200,
    },
  ]);

  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">🎬 Videos</h1>

      {/* If a video is selected, show full video viewer */}
      {activeVideo && (
        <div className="mb-6 p-4 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
          <h2 className="text-lg font-semibold mb-3">
            {activeVideo.title}
          </h2>

          <video
            src={activeVideo.url}
            controls
            className="w-full rounded-lg"
          />

          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Posted by {activeVideo.user}
          </p>

          <p className="text-gray-600 dark:text-gray-400">
            👍 {activeVideo.likes} likes
          </p>

          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={() => setActiveVideo(null)}
          >
            ← Back to feed
          </button>
        </div>
      )}

      {/* Video feed */}
      {!activeVideo && (
        <div className="space-y-5">
          {videos.map((v) => (
            <div
              key={v.id}
              className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-xl hover:bg-zinc-200 dark:hover:bg-zinc-700 cursor-pointer"
              onClick={() => setActiveVideo(v)}
            >
              <h3 className="text-lg font-semibold">{v.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                By {v.user} • 👍 {v.likes}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
