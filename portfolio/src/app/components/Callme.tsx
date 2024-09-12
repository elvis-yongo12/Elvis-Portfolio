import React from 'react'

const ContactForm = () => {
  return (
    <div className="max-w-md mx-auto bg-slate-400 p-8 rounded-md shadow-md mt-4">
      <h2 className="text-2xl font-semibold mb-6 text-center">Contact Me</h2>
      <form action="#" method="post" className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            className="mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-sm font-medium text-gray-700">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Enter your message"
            required
            className="mt-1 p-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

