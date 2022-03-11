import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'





const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Serezha'},
        {id: 2, name: 'Kate'},
        {id: 3, name: 'Mama'},
        {id: 4, name: 'Papa'},
        {id: 5, name: 'Liza'},
    ]



    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: "It's my"},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'Fine'},
        {id: 5, message: 'Goodbye'},
    ]




    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} /> ); 
    let messegesElements = messagesData.map(message => <Message message={message.message} /> ); 


        
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messegesElements}
            </div>
        </div>
    )
}


export default Dialogs;