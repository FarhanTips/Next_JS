import React from 'react';

const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();

}

const PostsPage = async () => {
    const posts = await getPosts();
    return (
        <div>
            <h2>Hello Posts: {posts.length}</h2>
        </div>
    );
};

export default PostsPage;