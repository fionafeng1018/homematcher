const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


//Get post
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({
            message: err
        });
    }
});


router.post('/', async (req, res) => {
    const post = new Post({
        author: req.body.author,
        content: req.body.content
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({
            message: err
        });
    }

});

//Delete Post
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.deleteOne({
            _id: req.params.postId
        });
        res.json(removedPost);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

//Update a post
router.patch('/:postId', async(req,res)=>{
    try{
        const updatedPost = await Post.updateOne(
            {_id:req.params.postId},
            {$set:{author:req.body.author}}
        );
        res.json(updatedPost);
    }catch(err){
        res.json({
            message: err
        });
    }
})

module.exports = router;