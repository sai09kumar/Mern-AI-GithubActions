import React, { useState } from "react";
import axios from "axios";

const Summary = () => {
  const [input, setInput] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/summary", { text: input });
      setSummary(res.data.result);
    } catch (err) {
      console.error("❌ Frontend Error:", err.message);
      setSummary("Error summarizing. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <textarea
        className="w-full p-2 border border-gray-300 rounded"
        rows="5"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste your text here..."
      />
      <button
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={handleSummarize}
        disabled={loading}
      >
        {loading ? "Summarizing..." : "Summarize"}
      </button>

      {summary && (
        <div className="mt-4 p-2 border border-gray-300 bg-gray-50 rounded">
          <strong>Summary:</strong>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
};

export default Summary;
