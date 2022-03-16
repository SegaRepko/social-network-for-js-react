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
                { id: 5, message: 'Goodbye' },
            ],
            dialogsData: [
                { id: 1, name: 'Serezha' },
                { id: 2, name: 'Kate' },
                { id: 3, name: 'Mama' },
                { id: 4, name: 'Papa' },
                { id: 5, name: 'Liza' },
            ]
        }
    },
    getState() {
        return this._state;
    },
    callSubscriber () {
        console.log('state changed');
    },
    addPost ()  {
        let newPost = {
            id: 6,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    }, 
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe (observer) {
        this._callSubscriber = observer; //наблюдатель //паттерн 
    }
}




export default store;
window.store = store;