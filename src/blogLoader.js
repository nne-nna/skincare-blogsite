export const blogLoader = async ({ params }) => {
    const { id } = params; // Get the ID from the URL
    const response = await fetch('/blogsData.json'); 
    const blogs = await response.json();

    // Convert the id to a number before matching
    const blog = blogs.find((b) => b.id === Number(id));

    if (!blog) {
        throw new Error('Blog not found');
    }

    return blog; // Return the single blog object
};
