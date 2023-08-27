import Post from "./Post.js";

class PostService {
  async createPost(post) {
    const createdPost = await Post.create(post);
    return createdPost;
  }

  async getAll() {
      const posts = await Post.find();
      return posts
    }

    async getOnePost(id) {
      
        const post = await Post.findById(id);
      
        return post
    }
    async updatePost(post) {
      const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
        new: true,
      });
        return updatedPost;
    }
     
    async deletePost(id) {

        const deletedPost = await Post.findByIdAndDelete(id);

        return deletedPost
        
    }
}

export default new PostService()