// import React from 'react';


// Fetch data from API instead of using static data like down.
const blogsData = [
  {
    id: 1,
    title: "Getting Started with React",
    author: "John Doe",
    category: "Web Development",
    description: "Learn the basics of React and how to build your first component.",
    date: "2026-09-01"
  },
  {
    id: 2,
    title: "Understanding JavaScript Promises",
    author: "Sarah Khan",
    category: "JavaScript",
    description: "A beginner-friendly guide to understanding promises and asynchronous JavaScript.",
    date: "2026-09-03"
  },
  {
    id: 3,
    title: "Why TypeScript Is Useful",
    author: "Michael Smith",
    category: "TypeScript",
    description: "Explore how TypeScript makes JavaScript projects safer and easier to maintain.",
    date: "2026-09-05"
  },
  {
    id: 4,
    title: "Introduction to Tailwind CSS",
    author: "Emma Wilson",
    category: "CSS",
    description: "Learn how to create modern user interfaces quickly with Tailwind CSS.",
    date: "2026-09-07"
  },
  {
    id: 5,
    title: "How APIs Work",
    author: "David Rahman",
    category: "Backend",
    description: "Understand what APIs are and how frontend applications communicate with servers.",
    date: "2026-09-10"
  },
  {
    id: 6,
    title: "Beginner's Guide to Git and GitHub",
    author: "Ayesha Noor",
    category: "Programming",
    description: "Learn the essential Git commands and how to manage projects with GitHub.",
    date: "2026-09-12"
  },
  {
    id: 7,
    title: "Building Your First Full-Stack App",
    author: "Daniel Lee",
    category: "Full Stack",
    description: "A practical introduction to connecting a frontend application with a backend API.",
    date: "2026-09-15"
  }
];

const PostDetailPage = async ({params}) => {
    const {slug} = await params;
    const post = blogsData.find(post => post.id === parseInt(slug));
    // console.log(typeof slug, post)
    // const post = blogsData[`${parseInt(slug)-1}`]; This way can be done.

    return (
        <div>
            <h2>Post Detail Page: {slug}</h2>

            {
                post && <div>
                <p>Post Title: {post.title}</p>
                <p>Author: {post.author}</p>
                <p>Category: {post.category}</p>
                <p>Description: {post.description}</p>
                </div>
            }
        </div>
    );
};

export default PostDetailPage;