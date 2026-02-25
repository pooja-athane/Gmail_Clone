function EmailRow({ sender, subject, message, time, isRead, onClick }) {
  return (
    <div
      className={`flex items-center p-2 text-sm cursor-pointer border-b hover:shadow-md
        ${!isRead ? "font-bold bg-gray-50" : "font-normal bg-white"}`}
      onClick={onClick}
    >
      <input type="checkbox" onClick={(e) => e.stopPropagation()} />

      <p className="ml-3 w-40 truncate">{sender}</p>

      <p className="flex-1 text-gray-600 truncate">
        {subject} - {message}
      </p>

      <p className="text-sm text-gray-500">{time}</p>
    </div>
  );
}

export default EmailRow;
