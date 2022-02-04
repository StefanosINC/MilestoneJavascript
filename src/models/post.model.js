const res = require('express/lib/response');
var databaseConnection = require('../../config/postdao');


  var Post = function(post){

    this.id = post.id;
  this.title = post.title;
   this.content = post.content;
   this.author = post.author;

  }

 // get all the posts

  Post.getAllPosts = (result) =>{

    databaseConnection.query('SELECT * FROM post', (err, res)=>{
     if(err){
         console.log("Error while grabbing posts", err);
          result(null, err);
      }else{
          console.log('Employees fetched sucessfully');
          result(null, res);
      }
    })
  }
  // create 

  Post.createNewPost = (postdata, result)=>{
    databaseConnection.query('INSERT INTO post SET ? ', postdata, (err, res)=>{
      if(err){
        console.log("error inserting data");
        result(null, err);

      }else{
        console.log('Post created successful');
        result(null, res)
      }
    })
  }

  
  Post.deletePost = (id, result) =>{
    databaseConnection.query('DELETE FROM post WHERE id=?', [id], (err,res)=>{
      if(err){
        console.log('Error deleting a post');
        result(null, err);

      }
      else{
        console.log(" Post deleted");
        result(null, res);

      }
    });
  }
  
  // Update a Post
    Post.updatePost = (id, postdata, result) => {
      databaseConnection.query("UPDATE post SET title=?, content=?, author=?, WHERE id=?", [postdata.title, postdata.content, postdata.author, id], (err, res)=>{
        if(err){
          console.log(" Error with updating a post");
          result(null, err);
        }else{
          console.log("update worked");
          result(null, res);
        }
      });
    }



  
 module.exports = Post;

 