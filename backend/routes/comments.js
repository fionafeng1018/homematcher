const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');


//Get post
router.get('/', async (req, res) => {
    try {
        const posts = await Comment.find();
        res.json(posts);
    } catch (err) {
        res.json({
            message: err
        });
    }
});


router.post('/', async (req, res) => {
    const post = new Comment({
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
router.delete('/:commentId', async (req, res) => {
    try {
        const removedPost = await Comment.deleteOne({
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
router.patch('/:commentId', async(req,res)=>{
    try{
        const updatedPost = await Comment.updateOne(
            {_id:req.params.commentId},
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