import React from "react";

function EmailView({ selectedEmail, setSelectedEmail }) {
  return (
    <div className="flex-1 bg-gray-100 
                    flex justify-center items-center
                    min-h-[calc(100vh-80px)]
                    px-4">

      <div className="w-full max-w-[750px] 
                      bg-white rounded-xl shadow-lg 
                      p-8 relative">

        <button
          onClick={() => setSelectedEmail(null)}
          className="absolute top-4 left-4 bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
        >
          Back
        </button>

        <h2 className="text-2xl font-bold mt-10">
          {selectedEmail.subject}
        </h2>

        <p className="text-blue-500 mt-2">
          From: {selectedEmail.to || selectedEmail.sender}
        </p>

        <p className="mt-6 text-gray-700">
          {selectedEmail.message}
        </p>

      </div>
    </div>
  );
}

export default EmailView;
