import classes from './MyPosts.module.css'
import Post from './Post/Post';
import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';



const MyPosts = (props) => {


  let postsElements = 
    props.postsData.map ( posts => <Post message={posts.message} likesCount={posts.likesCount}/>);



  let newPostElement = React.createRef();


  let addPost = () => {
    props.dispatch(addPostActionCreator() );
  }
 
  let onPostChange = () => {
    let text = newPostElement.current.value; 
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return <div>
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        New post
      </div>
      <div>
        <textarea onChange={ onPostChange }
                  ref={newPostElement} 
                  value={props.newPostText}/>
      </div>
      <div>
        <button onClick={ addPost } >Add post</button>
      </div>
      <div className={classes.posts}>
      {postsElements}
      </div>
    </div>
  </div>
}



export default MyPosts; 