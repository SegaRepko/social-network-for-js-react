import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'





const Dialogs = (props) => {



    let dialogsElements =
     props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} /> ); 
    let messegesElements =
     props.messagesData.map(message => <Message message={message.message} /> ); 


        
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