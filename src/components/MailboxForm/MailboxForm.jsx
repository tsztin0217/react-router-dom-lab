import {useState} from 'react';
import {useNavigate} from 'react-router';

const initialState = {
    'boxSize': '',
    'boxOwner': '',
};

const MailboxForm = (props) => {
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();
}