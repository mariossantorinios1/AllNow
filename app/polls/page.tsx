"use client";

import { useState } from "react";

interface Poll {
  id: number;
  question: string;
  options: {
    id: number;
    text: string;
    votes: number;
  }[];
}

export default function PollsPage() {
  const [polls, setPolls] = useState<Poll[]>([
    {
      id: 1,
      question: "Τι προτιμάς περισσότερο;",
      options: [
        { id: 1, text: "Pizza 🍕", votes: 12 },
        { id: 2, text: "Burger 🍔", votes: 9 },
        { id: 3, text: "Sushi 🍣", votes: 4 },
      ],
    },
    {
      id: 2,
      question: "Ποια πλατφόρμα χρησιμοποιείς πιο συχνά;",
      options: [
        { id: 1, text: "Instagram", votes: 22 },
        { id: 2, text: "TikTok", votes: 14 },
        { id: 3, text: "YouTube", votes: 30 },
      ],
    },
  ]);

  const vote = (pollId: number, optionId: number) => {
    setPolls((prev) =>
      prev.map((poll) =>
        poll.id === pollId
          ? {
              ...poll,
              options: poll.options.map((opt) =>
                opt.id === optionId
                  ? { ...opt, votes: opt.votes + 1 }
                  : opt
              ),
            }
          : poll
      )
    );
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📊 Polls</h1>

      {polls.map((poll) => {
        const totalVotes = poll.options.reduce(
          (sum, o) => sum + o.votes,
          0
        );

        return (
          <div
            key={poll.id}
            className="mb-8 p-4 bg-zinc-100 dark:bg-zinc-800 rounded-xl"
          >
            <p className="font-semibold text-lg mb-3">{poll.question}</p>

            {poll.options.map((opt) => {
              const percent =
                totalVotes === 0
                  ? 0
                  : Math.round((opt.votes / totalVotes) * 100);

              return (
                <div
                  key={opt.id}
                  className="mb-3"
                >
                  <button
                    onClick={() => vote(poll.id, opt.id)}
                    className="w-full text-left px-3 py-2 bg-white dark:bg-zinc-700 rounded-lg shadow-sm hover:bg-gray-200 dark:hover:bg-zinc-600 transition"
                  >
                    {opt.text}
                  </button>

                  <div className="mt-1 h-3 bg-gray-300 dark:bg-zinc-600 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500"
                      style={{ width: `${percent}%` }}
                    />
                  </div>

                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    {percent}% — {opt.votes} votes
                  </p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
