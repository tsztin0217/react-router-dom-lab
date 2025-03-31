import {Link} from 'react-router';


const MailboxList = (props) => {
    return (
        <>
            <h1>Mailbox List</h1>
            <ul>
                {props.mailboxes.map((selectedBox) => (
                    <li key={selectedBox.boxOwner}>
                        <Link to={`/mailboxes/${selectedBox._id}`}>
                        Mailbox {selectedBox._id}</Link>
                    </li>
                ))}
            </ul>
        </>
    )

}

export default MailboxList;