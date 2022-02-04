const express = require('express');
const router = express.Router();


const postController = require('../controller/post.controller');

// // Get all Posts
// router.get('/', postController.getPosts);
router.get('/', postController.getPostsList);


// Create a new Post
router.post('/', postController.createNewPost);

// delete by Id
router.delete('/:id' , postController.deletePost);


// router.update('')
router.put('/:id', postController.updatePost);


module.exports = router;

