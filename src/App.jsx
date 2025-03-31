import { useState } from 'react'
import NavBar from './components/NavBar/NavBar';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxForm from './components/MailboxForm/MailboxForm';
import { Routes, Route } from 'react-router';
import './index.css';




const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newFormData) => {
    newFormData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newFormData]);
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={<main><h1>Post Office</h1></main>}
        />
        <Route
          path='/mailboxes'
          element={<MailboxList mailboxes={mailboxes}/>}
        />
        <Route
          path='/new-mailbox'
          element={<MailboxForm addBox={addBox}/>}
        />
        <Route
          path='/mailboxes/:mailboxId'
          element={<MailboxDetails mailboxes={mailboxes}/>}
        />
        <Route
          path='*'
          element={<h2>Nothing here!</h2>}
        />
      </Routes>
    </>
  )
};

export default App;


