"use client";

import React, { useState } from "react";

const quotesData: Record<string, string[]> = {
  life: [
    "Life is 10% what happens to us and 90% how we react to it.",
    "The purpose of life is not to be happy. It is to be useful.",
    "Get busy living or get busy dying.",
  ],
  success: [
    "Success usually comes to those who are too busy to be looking for it.",
    "Don’t be afraid to give up the good to go for the great.",
    "Success is not in what you have, but who you are.",
  ],
  study: [
    "Study now, be proud later.",
    "Push yourself because no one else is going to do it for you.",
    "Dream big. Work hard. Stay focused.",
  ],
};

export default function QuoteForm() {
  const [topic, setTopic] = useState("");
  const [quotes, setQuotes] = useState<string[] | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const foundQuotes = quotesData[topic.toLowerCase()];
    if (foundQuotes) {
      setQuotes(foundQuotes);
      setError("");
    } else {
      setQuotes(null);
      setError("No quotes found for that topic. Try: life, success, study.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 mt-10 text-center">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold mb-4">Motivational Quotes Generator</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Enter topic (e.g., life, success, study)"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="input input-bordered w-full"
            />
            <button type="submit" className="btn btn-primary w-full">
              Show Quotes
            </button>
          </form>
          {error && <p className="text-red-500 mt-4">{error}</p>}
          {quotes && (
            <div className="mt-6 space-y-3">
              {quotes.map((quote, index) => (
                <p key={index} className="text-lg text-gray-800 font-medium">
                  “{quote}”
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
