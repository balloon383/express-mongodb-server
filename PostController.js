import Post from "./Post.js";

class PostController {
  async create(req, res) {
    try {
      const { author, title, content, picture } = req.body;
      const post = await Post.create({ author, title, content, picture });
      res.json(post);
    } catch (e) {
      console.log(e);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await Post.find();
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
        
          const post = await Post.findById(id)

          console.log(post)

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
      
      const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true })
      
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

      const deletedPost = await Post.findByIdAndDelete(id)

      res.status(200).json(deletedPost + 'DELETED')
    } catch (e) {
      console.log(e);
    }
  }
}
export default new PostController