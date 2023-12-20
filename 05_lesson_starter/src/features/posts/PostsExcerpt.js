import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux'
import { selectPostById } from "./postsSlice";

const PostsExcerpt = ({ postId }) => {
    const post = useSelector(state => selectPostById(state, postId))
    
    return (
        <article>
            <h2>{post.title}</h2>
            <p className="excerpt">{post.body.substring(0, 75)}...</p>
            <p className="postCredit">
                <Link to={`post/${post.id}`}>View Post</Link>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    )
}

// // THIS IS A PERFECTLY FINE WORKAROUND
// // necessary to use React.memo below
// import React from 'react'

// // use let rather than const
// let PostsExcerpt = ({ post }) => {
//     return (
//         <article>
//             <h2>{post.title}</h2>
//             <p className="excerpt">{post.body.substring(0, 75)}...</p>
//             <p className="postCredit">
//                 <Link to={`post/${post.id}`}>View Post</Link>
//                 <PostAuthor userId={post.userId} />
//                 <TimeAgo timestamp={post.date} />
//             </p>
//             <ReactionButtons post={post} />
//         </article>
//     )
// }

// // using let the declare the component above and importing React so we can use memo lets us keep the component from rerendering if it hasn't changed
// PostsExcerpt = React.memo(PostsExcerpt)

export default PostsExcerpt