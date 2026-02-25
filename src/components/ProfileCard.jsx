import React from "react";

function ProfileCard() {
  return (
    <div className="w-[340px] bg-white border border-gray-200 
                    rounded-2xl shadow-xl p-5 text-sm">

      {/* Main Profile Section */}
      <div className="flex flex-col items-center text-center">
        <div className="h-20 w-20 rounded-full bg-blue-500 text-white 
                        flex items-center justify-center text-2xl mb-3">
          P
        </div>

        <p className="font-medium">athanepooja@gmail.com</p>
        <p className="mt-2 text-lg font-semibold">Hi, Pooja!</p>

        <button className="mt-3 border border-gray-300 
                           rounded-full px-4 py-2 hover:bg-gray-100 transition">
          Manage your Google Account
        </button>
      </div>

      <hr className="my-4" />

      {/* Other Account */}
      <div className="flex justify-between items-center">
        <div>
          <p className="font-medium">Pooja Athane</p>
          <p className="text-gray-500 text-xs">
            poojaathane2025@gmail.com
          </p>
        </div>
        <span className="text-xs text-gray-400">
          (opens a new tab)
        </span>
      </div>

      <button className="mt-3 w-full text-left hover:bg-gray-100 px-2 py-2 rounded transition">
        Add another account
      </button>

      <button className="w-full text-left hover:bg-gray-100 px-2 py-2 rounded transition">
        Sign out of all accounts
      </button>

      <div className="mt-4 text-xs text-gray-500">
        7% of 15 GB used
      </div>

      <hr className="my-3" />

      <div className="flex justify-between text-xs text-gray-500">
        <span className="hover:underline cursor-pointer">
          Privacy Policy
        </span>
        <span className="hover:underline cursor-pointer">
          Terms of Service
        </span>
      </div>

    </div>
  );
}

export default ProfileCard;