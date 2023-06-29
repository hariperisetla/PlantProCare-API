import React from "react";

const ContactUsPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Contact Us</h1>
      <p className="text-lg text-gray-600 mb-6">
        If you have any questions, feedback, or inquiries, please feel free to
        reach out to us. We&apos;d love to hear from you!
      </p>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="text-lg font-semibold text-gray-800">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-200 rounded-md py-2 px-4 mt-1 w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="text-lg font-semibold text-gray-800"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-200 rounded-md py-2 px-4 mt-1 w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="text-lg font-semibold text-gray-800"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            className="bg-gray-200 rounded-md py-2 px-4 mt-1 w-full"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg shadow-lg transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUsPage;
