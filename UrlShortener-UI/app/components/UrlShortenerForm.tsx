"use client";

import { useState } from "react";

export default function UrlShortenerForm() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!longUrl.trim()) {
      setError("Please enter a URL");
      return;
    }

    setLoading(true);
    setError("");
    setShortUrl("");

    try {
      const response = await fetch("http://localhost:5001/api/url/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ longUrl }),
      });

      const data = await response.json();

      if (response.ok) {
        setShortUrl(data.shortUrl);
      } else {
        setError(data || "Failed to shorten URL");
      }
    } catch (err) {
      setError("Error connecting to server. Make sure the backend is running.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    alert("Copied to clipboard!");
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="longUrl"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Enter your long URL
          </label>
          <input
            type="url"
            id="longUrl"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            placeholder="https://example.com/very/long/url..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
        >
          {loading ? "Shortening..." : "Shorten URL"}
        </button>
      </form>

      {error && (
        <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      {shortUrl && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h3 className="text-sm font-medium text-green-800 mb-2">
            Your shortened URL:
          </h3>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={shortUrl}
              readOnly
              className="flex-1 px-3 py-2 bg-white border border-green-300 rounded text-sm text-gray-900 focus:outline-none"
            />
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded transition"
            >
              Copy
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
