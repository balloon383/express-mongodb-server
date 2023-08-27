import PostService from "./PostService.js";

class PostController {
  async create(req, res) {
    try {
      const post = await PostService.createPost(req.body);
      res.json(post);
    } catch (e) {
      console.log(e);
      res.json(e);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      res.json(posts);
    } catch (e) {
      console.log(e);
      res.json(e);
    }
  }

  async getOne(req, res) {
    try {
      const post = await PostService.getOnePost(req.params.id);
      res.json(post);
    } catch (e) {
      console.log(e);
      res.json(e.message);
    }
  }

  async put(req, res) {
    try {
      const updatedPost = await PostService.updatePost(req.body);

      res.status(200).json(updatedPost);
    } catch (e) {
      console.log(e);
      res.json(e.message)
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const deletedPost = await PostService.deletePost(id);

      res.status(200).json(deletedPost);
    } catch (e) {
      console.log(e);
    }
  }
}
export default new PostController();
