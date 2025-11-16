"use client";

import { useState } from "react";

export default function ProfilePage() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followers, setFollowers] = useState(1290);

  const user = {
    name: "John Pap",
    nickname: "@john",
    bio: "Digital creator • Coffee lover • Traveler ✈️☕",
    following: 340,
    posts: 54,
    profilePic:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=800",
    bannerPic:
      "https://images.unsplash.com/photo-1503264116251-35a269479413?w=1200",
  };

  const toggleFollow = () => {
    if (isFollowing) {
      setFollowers(followers - 1);
      setIsFollowing(false);
    } else {
      setFollowers(followers + 1);
      setIsFollowing(true);
    }
  };

  return (
    <div className="max-w-xl mx-auto pb-10">
      {/* Banner */}
      <div className="w-full h-40 overflow-hidden rounded-b-2xl">
        <img
          src={user.bannerPic}
          alt="banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Profile picture */}
      <div className="flex justify-center -mt-16">
        <img
          src={user.profilePic}
          alt="profile"
          className="w-32 h-32 rounded-full border-4 border-white dark:border-zinc-900 object-cover"
        />
      </div>

      {/* Info */}
      <div className="text-center mt-4 px-4">
        <h1 className="text-xl font-bold">{user.name}</h1>
        <p className="text-gray-500 dark:text-gray-400">{user.nickname}</p>

        <p className="mt-3 text-sm">{user.bio}</p>

        {/* Stats */}
        <div className="flex justify-center gap-6 mt-4 text-sm">
          <div className="text-center">
            <p className="font-bold">{user.posts}</p>
            <p className="text-gray-500 dark:text-gray-400 text-xs">Posts</p>
          </div>
          <div className="text-center">
            <p className="font-bold">{followers}</p>
            <p className="text-gray-500 dark:text-gray-400 text-xs">
              Followers
            </p>
          </div>
          <div className="text-center">
            <p className="font-bold">{user.following}</p>
            <p className="text-gray-500 dark:text-gray-400 text-xs">
              Following
            </p>
          </div>
        </div>

        {/* Follow / Message buttons */}
        <div className="flex justify-center gap-3 mt-5">
          <button
            onClick={toggleFollow}
            className={`px-5 py-2 rounded-xl font-semibold ${
              isFollowing
                ? "bg-zinc-200 dark:bg-zinc-800 text-black"
                : "bg-blue-600 text-white"
            }`}
          >
            {isFollowing ? "Following ✓" : "Follow"}
          </button>

          <button className="px-5 py-2 rounded-xl bg-zinc-200 dark:bg-zinc-800 font-semibold">
            Message
          </button>
        </div>

        {/* Tabs */}
        <div className="mt-8 flex justify-center gap-6 text-sm font-semibold">
          <button className="text-blue-500">Posts</button>
          <button className="text-gray-500 dark:text-gray-400">Photos</button>
          <button className="text-gray-500 dark:text-gray-400">About</button>
        </div>

        {/* Fake posts */}
        <div className="mt-6 space-y-4">
          <div className="p-4 rounded-xl bg-zinc-100 dark:bg-zinc-800">
            📸 New photo from my trip!
          </div>

          <div className="p-4 rounded-xl bg-zinc-100 dark:bg-zinc-800">
            ☕ Morning vibes with coffee.
          </div>
        </div>
      </div>
    </div>
  );
}
