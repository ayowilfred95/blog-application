/**
 * @openapi
 * /api/posts:
 *   post:
 *     summary: Create a new blog post
 *     tags: 
 *       - Blog
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BlogPost'
 *           examples:
 *             example:
 *               $ref: '#/components/examples/BlogPostExample'
 *     responses:
 *       '201':
 *         description: Blog Created Successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BlogPostResponse'
 *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *   get:
 *     summary: Get a list of all blog posts
 *     tags: 
 *       - Blog
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/BlogPostData'
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 * /api/posts/{postId}:
 *   put:
 *     summary: Update an existing blog post by ID
 *     tags:
 *       - Blog
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the blog post to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               author:
 *                 type: string
 *             example:
 *               title: "Updated Blog Post Title"
 *               content: "This is the updated content of the blog post."
 *              
 *     responses:
 *       '200':
 *         description: Blog post updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Success
 *                 data:
 *                   $ref: '#/components/schemas/BlogPostData'
 *       '404':
 *         description: Blog post not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *   get:
 *     summary: Get a single blog post by ID
 *     tags:
 *       - Blog
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the blog post to retrieve
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BlogPostData'
 *       '404':
 *         description: Blog post not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *   delete:
 *     summary: Delete a single blog post by ID
 *     tags:
 *       - Blog
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the blog post to delete
 *     responses:
 *       '204':
 *         description: Blog post deleted successfully
 *       '404':
 *         description: Blog post not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 * components:
 *   schemas:
 *     BlogPost:
 *       type: object
 *       required:
 *         - title
 *         - content
 *         - author
 *       properties:
 *         title:
 *           type: string
 *         content:
 *           type: string
 *         author:
 *           type: string
 *     BlogPostResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *         blog:
 *           $ref: '#/components/schemas/BlogPostData'
 *     BlogPostData:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         title:
 *           type: string
 *         content:
 *           type: string
 *         author:
 *           type: string
 *         creationDate:
 *           type: string
 *           format: date-time
 *           example: "2024-06-07 12:07 PM"
 *     Error:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *   examples:
 *     BlogPostExample:
 *       value:
 *         title: "Sample Blog Post"
 *         content: "This is the content of the blog post."
 *         author: "John Doe"
 */
