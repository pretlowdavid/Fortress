import  { useState, useEffect} from 'react';
import Author from './Author';
import WrapperDiv from './WrapperDiv';
import Link from './Link';
import axios from 'axios';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
           const response = await axios.get('https://www.reddit.com/r/ProgrammerHumor.json?&limit=20');
           const sortedPosts = response.data.data.children.sort(function(a, b) {
            return b.data.num_comments - a.data.num_comments;
        });
        setPosts(sortedPosts);
    
           setPosts(sortedPosts);
    }
    fetchPosts();
}, []);



return(posts.map((post, i) =>  (
<WrapperDiv {...post.data} key={i.toString()}>
    <Link target="_blank" href={post.data.thumbnail} rel="noreferrer" >{post.data.title} </Link>
    <Author>Author: {post.data.author}</Author>
    <div>Upvotes: {post.data.ups}</div>
    <div>Comment Count: {post.data.num_comments}</div>
</WrapperDiv>)))


}

export default Posts;
