import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import EmailList from './components/EmailList'
import Compose from './components/Compose'

function App() {

  const [isOpen, setIsOpen] = useState(true)
  const [selectedEmail, setSelectedEmail] = useState(null)
  const [showCompose, setShowCompose] = useState(false)
  const [sentEmails, setSentEmails] = useState([])
  const [draftEmails, setDraftEmails] = useState([])
  const [editingDraft, setEditingDraft] = useState(null)


  function toggleSidebar() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="app  h-screen flex flex-col">
        <Header toggleSidebar={toggleSidebar}
          setSelectedEmail={setSelectedEmail} />

        <div className="flex flex-1 overflow-hidden ">

          <Sidebar
            isOpen={isOpen}
            toggleSidebar={() => setIsOpen(!isOpen)}
            setSelectedEmail={setSelectedEmail}
            setShowCompose={setShowCompose}
          />


          <div
            className={`flex-1 w-full bg-gray-50 overflow-y-auto transition-all duration-300 md:px-4"
              }`}
          >
            <Routes>
              <Route path="/" element={<Navigate to="/inbox" />} />
              <Route path="/:section" element={
                <EmailList
                  selectedEmail={selectedEmail}
                  setSelectedEmail={setSelectedEmail}
                  sentEmails={sentEmails}
                  draftEmails={draftEmails}
                  setShowCompose={setShowCompose}
                  setEditingDraft={setEditingDraft}
                />
              } />
            </Routes>
          </div>

          {showCompose && (
            <Compose
              setShowCompose={setShowCompose}
              setSentEmails={setSentEmails}
              setDraftEmails={setDraftEmails}
              editingDraft={editingDraft}
              setEditingDraft={setEditingDraft}
            />
          )}
        </div>

      </div>
    </>
  )
}

export default App
