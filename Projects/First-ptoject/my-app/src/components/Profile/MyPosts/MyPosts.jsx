import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {


  let postsElements = 
    props.postsData.map ( posts => <Post message={posts.message} likesCount={posts.likesCount}/>);


  return <div>
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        New post
      </div>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <div className={classes.posts}>
      {postsElements}
      </div>
    </div>
  </div>
}



export default MyPosts; 