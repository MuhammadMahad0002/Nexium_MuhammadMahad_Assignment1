"use client";

import { useState } from "react";

const quotes = {
  success: [
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Success usually comes to those who are too busy to be looking for it.",
  ],
  motivation: [
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
  ],
};

export default function QuoteForm() {
  const [topic, setTopic] = useState("");
  const [displayQuotes, setDisplayQuotes] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const key = topic.toLowerCase();
    if (key in quotes) {
      setDisplayQuotes(quotes[key as keyof typeof quotes]);
    } else {
      setDisplayQuotes(["No quotes found for this topic. Try 'success' or 'motivation'."]);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter a topic like success or motivation"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Get Quotes
        </button>
      </form>

      <ul className="space-y-2">
        {displayQuotes.map((quote, index) => (
          <li key={index} className="text-gray-700">❝ {quote} ❞</li>
        ))}
      </ul>
    </div>
  );
}
