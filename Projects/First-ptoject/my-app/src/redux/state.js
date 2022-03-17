const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: 'Hi, how are you?', likesCount: 13 },
                { id: 2, message: "It's my first post", likesCount: 17 },
                { id: 3, message: 'Lets go make money!!!!', likesCount: 21 },
            ],
            newPostText: ''
        },
        messagesPage: {
            messagesData: [
                { id: 1, message: 'Hi' },
                { id: 2, message: "It's my" },
                { id: 3, message: 'How are you?' },
                { id: 4, message: 'Fine' },
                { id: 5, message: 'Goodbye' }
            ],
            dialogsData: [
                { id: 1, name: 'Serezha' },
                { id: 2, name: 'Kate' },
                { id: 3, name: 'Mama' },
                { id: 4, name: 'Papa' },
                { id: 5, name: 'Liza' },
                { id: 6, name: 'Anton' }
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed');
    },



    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //наблюдатель //паттерн 
    },



    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 6,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagesPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.messagesPage.newMessageBody;
            this._state.messagesPage.newMessageBody = '';
            this._state.messagesPage.messagesData.push({id: 6, message: body});
            this._callSubscriber(this._state);
        }
    }

}



export const addPostActionCreator = () => ({type: 'ADD-POST'})
  
export const updateNewPostTextActionCreator = (text) => 
        ({type: 'UPDATE-NEW-POST-TEXT', newText: text})


export const sendMessageCreator = () => ({type: 'SEND-MESSAGE'})
  
export const updateNewMessageBodyCreator = (body) => 
        ({type: 'UPDATE-NEW-MESSAGE-BODY', body: body})


export default store;
window.store = store;