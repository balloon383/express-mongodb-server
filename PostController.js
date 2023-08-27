import Post from "./Post.js";
import PostService from "./PostService.js";

class PostController {
  async create(req, res) {
    try {
      const post = await PostService.createPost(req.body);
      res.json(post);
    } catch (e) {
      console.log(e);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      res.json(posts);        
    } catch (e) {
      console.log(e);
    }
  }

    async getOne(req, res) {
      try {
          const {id} = req.params
        
          if (!id) {
              res.status(400).json("WRONG ID")
          }
        
          const post = await PostService.getOnePost(id);

          res.json(post)
    } catch (e) {
      console.log(e);
    }
  }

  async put(req, res) {
    try {
      const post = req.body
      
      if (!post._id) {
        res.status(400).json("WRONG ID")
      }
      
      const updatedPost = await PostService.updatePost(post);
      
      res.status(200).json(updatedPost)
      
    } catch (e) {
      console.log(e);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params 
      
      if (!id) {
        res.status(400).json("WRONG ID");
      }

      const deletedPost = await PostService.deletePost(id);

      res.status(200).json(deletedPost)

    } catch (e) {
      console.log(e);
    }
  }
}
export default new PostController