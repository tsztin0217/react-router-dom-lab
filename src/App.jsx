import { useState } from 'react'
import NavBar from './components/NavBar/NavBar';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import './App.css'
import {Route, Routes} from 'react-router';



const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newFormData) => {
    newFormData._id = mailboxes.length + 1;
    setMailboxes(mailboxes, newFormData);
  }
};

export default App;


