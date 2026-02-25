// import React from 'react'
// import EmailRow from './EmailRow';
// import { emails } from '../constants/emails';
// import EmailView from './EmailView';

// function EmailList(
//   {
//     activeSection,
//     selectedEmail,
//     setSelectedEmail,
//     sentEmails,
//     draftEmails,
//     setShowCompose,
//     setEditingDraft
//   }
// ) {

//   // const displayEmailornot = activeSection === "Sent" ? sentEmails : emails;

//   let displayEmailornot;

//   if (activeSection === "Sent") {
//     displayEmailornot = sentEmails;
//   }
//   else if (activeSection === "Drafts") {
//     displayEmailornot = draftEmails;
//   }
//   else {
//     displayEmailornot = emails;
//   }



//   if (selectedEmail) {
//     return (
//       <EmailView
//         selectedEmail={selectedEmail}
//         setSelectedEmail={setSelectedEmail}
//       />
//     )
//   }
//   return (


//     <div className="flex-1 w-full  bg-white overflow-y-auto px-2 md:px-4">
//       <h2
//         className="p-3 font-semibold border-b">
//         {activeSection}
//       </h2>


//       {displayEmailornot.length === 0 ? (
//         <p className="p-4 text-gray-500">No Emails</p>
//       ) : (
//         displayEmailornot.map((email, index) => (
//           <div
//             key={index}
//             className="cursor-pointer"
//             // onClick={() => setSelectedEmail(email)}
//             onClick={() => {
//               if (activeSection === "Drafts") {
//                 setEditingDraft(email)
//                 setShowCompose(true)
//               } else {
//                 setSelectedEmail(email)
//               }
//             }}
//           >
//             <EmailRow
//               sender={email.to || email.sender}
//               subject={email.subject}
//               message={email.message}
//               time={email.time}
//               isRead={email.isRead}
//               onClick={() => {
//                 setSelectedEmail(email);
//                 // Mark as read
//                 email.isRead = true;
//                 // Force re-render
//                 setSelectedEmail({ ...email });
//               }}
//             />
//           </div>
//         ))
//       )}

//     </div>
//   )
// }

// export default EmailList


import React from 'react'
import { useParams } from 'react-router-dom';
import EmailRow from './EmailRow';
import { emails } from '../constants/emails';
import EmailView from './EmailView';

function EmailList({
  selectedEmail,
  setSelectedEmail,
  sentEmails,
  draftEmails,
  setShowCompose,
  setEditingDraft
}) {

  const { section } = useParams();
  const activeSection = section.charAt(0).toUpperCase() + section.slice(1);

  let displayEmailornot;

  if (activeSection === "Sent") {
    displayEmailornot = sentEmails;
  } else if (activeSection === "Drafts") {
    displayEmailornot = draftEmails;
  } else {
    displayEmailornot = emails;
  }

  // If Email is opened
  if (selectedEmail) {
    return (
      <EmailView
        selectedEmail={selectedEmail}
        setSelectedEmail={setSelectedEmail}
      />
    )
  }

  return (
    <div className="flex-1 w-full bg-white overflow-y-auto px-2 md:px-4">
      <h2 className="p-3 font-semibold border-b">
        {activeSection}
      </h2>

      {displayEmailornot.length === 0 ? (
        <p className="p-4 text-gray-500">No Emails</p>
      ) : (
        displayEmailornot.map((email, index) => (
          <EmailRow
            key={index}
            sender={email.to || email.sender}
            subject={email.subject}
            message={email.message}
            time={email.time}
            isRead={email.isRead}
            onClick={() => {

              // ✅ If Draft section → open Compose
              if (activeSection === "Drafts") {
                setEditingDraft(email);
                setShowCompose(true);
                return;
              }

              // ✅ Inbox / Sent → open EmailView
              email.isRead = true;
              setSelectedEmail({ ...email });
            }}
          />
        ))
      )}
    </div>
  )
}

export default EmailList;
