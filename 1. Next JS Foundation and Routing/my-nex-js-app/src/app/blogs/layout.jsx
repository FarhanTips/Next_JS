

const BlogLayout = ({children}) => {
    return (
        <div>
            <h2>Fixed Portion of Blog Layout</h2>
            <div>{children}</div>
        </div>
    );
};

export default BlogLayout;