

const PostModel = require('../models/post.model');



// get all posts
exports.getPostsList = (req, res) => {
    console.log('here are all employees list');

    PostModel.getAllPosts((err, posts) =>{
        console.log('We are here')
        if(err)
        res.send(err);
        console.log('Postsssss', posts);
        res.send(posts);
    })
}

// create new post
exports.createNewPost = (req, res) => {
    console.log('Create new Post plzzz');

    const postdata = new PostModel(req.body);
    console.log('PostData', postdata);

    // check if null
    if(req.body.constructor == Object && Object.keys(req.body).length ===0){
        res.send(400).send({sucess: false, message: 'Fill in in the forms'});
        
    }
    else{
        PostModel.createNewPost(postdata, (err, post) => {
            if(err)
            res.send(err);
            res.json({status: true, message: 'Post created sucessful'})

        })
    }
    }

    // delete a post
    exports.deletePost = (req, res) =>{
        PostModel.deletePost(req.params.id, (err, post)=>{
            if(err)
            res.send(err);
            res.json({sucess:true, message: 'Post is deleted!'});
        })
    }


    // Update 
    exports.updatePost = (req, res)=>{
        const postdata = new PostModel(req.body);
        console.log('post data update (from the export', postdata);

        PostModel.updatePost(req.params.id, postdata, (err, post)=>{
            if(err)
            res.send(err);
            res.json({sucess:true, message: 'Post is Updated!'});
        })
    }

