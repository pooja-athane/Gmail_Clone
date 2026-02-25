// import React, { useEffect, useState } from 'react';
// import { emails } from '../constants/emails';
// import SearchDropdown from './SearchDropdown';
// import ProfileCard from './ProfileCard';

// function Header({ toggleSidebar, setSelectedEmail }) {

//   const [searchText, setSearchText] = useState("");
//   const [filteredEmails, setFilteredEmails] = useState([]);
//   const [showProfile, setShowProfile] = useState(false);

//   useEffect(() => {
//     if (searchText.trim() === "") {
//       setFilteredEmails([]);
//       return;
//     }

//     const query = searchText.toLowerCase();

//     const result = emails.filter((email) =>
//       email.subject.toLowerCase().includes(query) ||
//       email.message.toLowerCase().includes(query)
//     );

//     setFilteredEmails(result);
//   }, [searchText]);

//   const handleSelectedEmail = (email) => {
//     setSelectedEmail(email);
//     setSearchText("");
//   };

//   return (
//     <header className="border-b border-gray-300 bg-white">

//       {/* TOP SECTION */}
//       <div className="flex items-center justify-between px-4 py-3 md:h-[80px]">

//         {/* LEFT */}
//         <div className="flex items-center gap-4 flex-shrink-0">
//           <img
//             src="src/assets/menu_logo.png"
//             alt="menu"
//             className="cursor-pointer"
//             onClick={toggleSidebar}
//           />
//           <img
//             src="src/assets/gmail_logo.png"
//             alt="gmail"
//             className="h-[30px] md:h-[35px]"
//           />
//         </div>

//         {/* SEARCH - Desktop */}
//         <div className="hidden md:flex relative items-center bg-[#EAF1FB] px-4 py-2 rounded-full 
//                 w-full max-w-[550px] mx-4">
//           <img src="src/assets/search.png" className="mr-3 cursor-pointer" />
//           <input
//             type="text"
//             placeholder="Search mail"
//             className="bg-transparent outline-none w-full text-base"
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//           />
//           <img
//             src="src/assets/show_options.png"
//             className="w-5 ml-3 cursor-pointer"
//           />
//           <SearchDropdown
//             filteredEmails={filteredEmails}
//             searchText={searchText}
//             handleSelectedEmail={handleSelectedEmail}
//           />
//         </div>

//         {/* RIGHT */}
//         <div className="flex items-center gap-3 flex-shrink-0">
//           <img src="src/assets/help.png" className="icon-style w-5 md:w-6 hidden sm:block" />
//           <img src="src/assets/setting.png" className="icon-style w-5 md:w-6 hidden sm:block" />
//           <img src="src/assets/gemini.png" className="icon-style w-5 hidden sm:block" />
//           <img src="src/assets/apps.png" className="icon-style w-5 md:w-6 hidden sm:block" />
//           {/* <div className="h-9 w-9 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm">
//             P
//           </div> */}
          

//           <div
//             className="relative"
//             onMouseEnter={() => setShowProfile(true)}
//             onMouseLeave={() => setShowProfile(false)}
//           >
//             {/* PROFILE CIRCLE */}
//             <div
//               onClick={() => setShowProfile(!showProfile)}
//               className="icon-style h-9 w-9 bg-blue-500 text-white flex items-center justify-center text-sm"
//             >
//               P
//             </div>

//             {/* PROFILE CARD */}
//             {showProfile && (
//               <div className="absolute right-0 mt-2">
//                 <ProfileCard />
//               </div>
//             )}
//           </div>
//         </div>

//       </div>

//       {/* SEARCH - Mobile */}
//       <div className="md:hidden px-4 pb-3">
//         <div className="relative flex items-center bg-[#EAF1FB] px-4 py-3 rounded-full w-full">
//           <img src="src/assets/search.png" className="mr-3 cursor-pointer" />
//           <input
//             type="text"
//             placeholder="Search mail"
//             className="bg-transparent outline-none w-full text-base"
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//           />
//           <SearchDropdown
//             filteredEmails={filteredEmails}
//             searchText={searchText}
//             handleSelectedEmail={handleSelectedEmail}
//           />
//         </div>
//       </div>

//     </header>
//   );
// }

// export default Header;

import React, { useEffect, useState } from 'react';
import { emails } from '../constants/emails';
import SearchDropdown from './SearchDropdown';
import ProfileCard from './ProfileCard';

function Header({ toggleSidebar, setSelectedEmail }) {

  const [searchText, setSearchText] = useState("");
  const [filteredEmails, setFilteredEmails] = useState([]);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    if (searchText.trim() === "") {
      setFilteredEmails([]);
      return;
    }

    const query = searchText.toLowerCase();

    const result = emails.filter((email) =>
      email.subject.toLowerCase().includes(query) ||
      email.message.toLowerCase().includes(query)
    );

    setFilteredEmails(result);
  }, [searchText]);

  const handleSelectedEmail = (email) => {
    setSelectedEmail(email);
    setSearchText("");
  };

  return (
    <header className="border-b border-gray-300 bg-white">

      <div className="flex items-center justify-between px-4 py-3 md:h-[80px]">

        {/* LEFT */}
        <div className="flex items-center gap-4">
          <img
            src="src/assets/menu_logo.png"
            alt="menu"
            className="cursor-pointer"
            onClick={toggleSidebar}
          />
          <img
            src="src/assets/gmail_logo.png"
            alt="gmail"
            className="h-[30px] md:h-[35px]"
          />
        </div>

        {/* SEARCH DESKTOP */}
        <div className="hidden md:flex relative items-center bg-[#EAF1FB] px-4 py-2 rounded-full 
                        w-full max-w-[550px] mx-4">
          <img src="src/assets/search.png" className="mr-3 cursor-pointer" />
          <input
            type="text"
            placeholder="Search mail"
            className="bg-transparent outline-none w-full text-base"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <SearchDropdown
            filteredEmails={filteredEmails}
            searchText={searchText}
            handleSelectedEmail={handleSelectedEmail}
          />
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2 relative">

          <div className="icon-wrapper hidden sm:flex">
            <img src="src/assets/help.png" className="w-5 md:w-6" />
          </div>

          <div className="icon-wrapper hidden sm:flex">
            <img src="src/assets/setting.png" className="w-5 md:w-6" />
          </div>

          <div className="icon-wrapper hidden sm:flex">
            <img src="src/assets/gemini.png" className="w-5" />
          </div>

          <div className="icon-wrapper hidden sm:flex">
            <img src="src/assets/apps.png" className="w-5 md:w-6" />
          </div>

          {/* PROFILE */}
          <div className="relative">
            <div
              onClick={() => setShowProfile(!showProfile)}
              className="h-10 w-10 bg-blue-500 text-white  font-semibold
                         flex items-center justify-center text-lg
                         rounded-full cursor-pointer 
                         hover:shadow-md transition"
            >
              P
            </div>

            {showProfile && (
              <div className="absolute right-0 mt-3 z-50">
                <ProfileCard />
              </div>
            )}
          </div>

        </div>
      </div>

    </header>
  );
}

export default Header;