import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {

  let postsData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 13},
    {id: 2, message: "It's my first post", likesCount: 17},
    {id: 3, message: 'Lets go make money!!!!', likesCount: 21},
]


  let postsElements = postsData.map(posts=><Post message={posts.message} likesCount={posts.likesCount}/>)


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
      { postsElements }
      </div>
    </div>
  </div>
}



export default MyPosts; 