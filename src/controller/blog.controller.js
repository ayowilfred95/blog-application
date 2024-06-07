// let declare a variable that will hold an empty array for our blog post
/**
 * @dev:
 * blogs array is empty to store blog post
 * Also we use let to decalre variable that will change later
 *
 * @params:
 *  because we aren't using database like mongodb , or postgres which can help us save blog data and even auto increment blog id,
 *  a variable to hold the id locally is declared to be equal to 1. And with this, our blog can be auto-increment by iteration
 */

// blogs array declared
let blogs = [];

// variable to hold blog id
let Id = 1;

// logic to create blog posts

exports.createBlog = (req, res) => {
  try {
    const { title, content, author } = req.body;
    // let validate the input parameters
    if (!title || !content || !author) {
      return res.status(400).json({
        message: "Please provide title,content and author in your request body",
      });
    }

    /**
     * @dev:
     * for the creation date, I have to format the date so that the response will come like this "2024-06-07 12:07 PM"
     *  initially, the response was "2024-06-07T12:07:33.219Z  when i use toISOString
     */

    // formatted date
    const creationDate = new Date();
    const formattedDate = creationDate.toLocaleString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    // create a new blog and push it to the blogs array
    const newBlog = {
      id: Id++,
      title,
      content,
      author,
      creationDate: formattedDate,
    };
    blogs.push(newBlog);

    // if the blog is pushed into the blog array successfully, then return:
    res
      .status(201)
      .json({ message: "Blog Created Successfully", blog: newBlog });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// get all blog posts
exports.getAllBlogs = (req, res) => {
  try {
    // declare variables to store blogs in the array
    const blog = blogs;
    res
      .status(200)
      .json({ message: "All blogs return successfully", data: blog });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// get a single blog posts
exports.getBlogPostById = (req, res) => {
  try {
    // pass the id of the post in the request parames
    const { postId } = req.params;

    // find the blog post by id. Since the id is in number
    // The parseInt() converts the id parameter from a string to an integer.
    // The 10 specifies that the number is in base 10

    const blog = blogs.find((blog) => blog.id === parseInt(postId, 10));

    if (!blog) {
      return res
        .status(404)
        .json({ error: `post with ${postId} does not exist` });
    }
    res
      .status(200)
      .json({ message: "Blog retrieved Successfully", data: blog });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Logic to update an existing blog post
exports.updateBlogPostById = (req, res) => {
  try {
    const { postId } = req.params;
    const { title, content } = req.body;

    // let find the index of the blog post, since array uses indexes to find data
    /**
     * @params
     * The parseInt() converts the id parameter from a string to an integer.
     * The 10 specifies that the number is in base 10
     */
    const blog = blogs.findIndex((blog) => blog.id === parseInt(postId, 10));

    // If the blog post with this  ID does not exist, return 404 error
    if (blog === -1) {
      return res
        .status(404)
        .json({ error: `Post with ID ${postId} does not exist` });
    }

    // Update the blog post if title or content is provided
    if (title !== undefined) {
      blogs[blog].title = title;
    }
    if (content !== undefined) {
      blogs[blog].content = content;
    }

    // Return the updated blog post with a 200 status
    res
      .status(200)
      .json({ message: "Blog updated successfully", data: blogs[blog] });
  } catch (error) {
    // Return 500 error for any unexpected errors
    res.status(500).json({ error: "Internal server error" });
  }
};

// logic to delete blog post
exports.deleteBlogPostById = (req, res) => {
  try {
    const { postId } = req.params;

    // let find the index of the blog post, since array uses indexes to find data
    /**
     * @params
     * The parseInt() converts the id parameter from a string to an integer.
     * The 10 specifies that the number is in base 10
     */
    const blog = blogs.findIndex((blog) => blog.id === parseInt(postId, 10));

    // If the blog post does not exist, return 404
    if (blog === -1) {
      return res
        .status(404)
        .json({ error: `Post with ID ${postId} does not exist` });
    }

    // Remove the blog post from the blogs array
    /**
     * @params
     * you would typically use the splice() in the context of removing an element from an array
     * The number 1 means that only one thing will be removed from the blogs list.
     */
    blogs.splice(blog, 1);

    // Return a 204 (No Content) response
    res.status(204).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
