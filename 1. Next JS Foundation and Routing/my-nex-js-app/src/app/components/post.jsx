import Link from 'next/link';
import React from 'react';

const Post = ({ post }) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.description}</p>
                <div className="card-actions justify-end">
                    <Link href={`/blogs/${post.id}`}>
                        <button className="btn btn-primary">Show Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Post;