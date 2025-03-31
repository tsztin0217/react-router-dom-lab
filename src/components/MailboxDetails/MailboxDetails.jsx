import { useParams } from 'react-router';


const MailboxDetails = { props } => {
    const { mailboxId } = useParams();

    const selectedBox = props.mailboxes.find(
        (mailbox) => mailbox._id === Number(mailboxId)
    );

}


export default MailboxDetails;