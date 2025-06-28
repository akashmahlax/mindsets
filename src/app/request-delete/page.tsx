"use client"
import React, { useState } from "react";

export default function RequestDeletePage() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send the request to your backend or support email
    setSubmitted(true);
  };

  return (
    <main className="max-w-xl mx-auto px-4 py-12 font-sans text-gray-800 bg-white min-h-screen flex flex-col justify-center">
      <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl shadow-md p-8 text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          Request Account Deletion
        </h1>
        <p className="text-pink-100 text-base">
          We are sorry to see you go. Please fill out the form below to request
          deletion of your MindSets account and data.
        </p>
      </div>``
      {submitted ? (
        <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center shadow">
          <h2 className="text-xl font-semibold mb-2 text-green-700">
            Request Submitted
          </h2>
          <p className="mb-2">
            Thank you. Your request to delete your MindSets account has been
            received.
          </p>
          <p>
            Our team will process your request and contact you if further
            information is needed.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 rounded-xl shadow p-8 space-y-6 border border-gray-200"
        >
          <div>
            <label
              htmlFor="email"
              className="block font-medium mb-1 text-gray-800"
            >
              Email Address{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 bg-white"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label
              htmlFor="reason"
              className="block font-medium mb-1 text-gray-800"
            >
              Reason for Deletion{" "}
              <span className="text-gray-400">(optional)</span>
            </label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 bg-white"
              placeholder="Let us know why you are leaving (optional)"
              rows={3}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-full transition shadow"
          >
            Submit Request
          </button>
          <p className="text-xs text-gray-500 text-center mt-2">
            By submitting this form, you request permanent deletion of your account
            and all associated data. This action cannot be undone.
          </p>
        </form>
      )}
    </main>
  );
}
