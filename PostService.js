import Post from "./Post.js";

class PostService {
    async createPost(post) {
        const createdPost = await Post.create(post);
        return createdPost;
  }

  async getAll() {
    const posts = await Post.find();
    return posts;
  }

  async getOnePost(id) {
    if (!id) {
      throw new Error("NO ID");
    }

    const post = await Post.findById(id);

    return post;
  }
  async updatePost(post) {
    if (!post._id) {
      throw new Error("NO ID");
    }

    const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
      new: true,
    });

    return updatedPost;
  }

  async deletePost(id) {
    if (!id) {
      throw new Error("WRONG ID");
    }

    const deletedPost = await Post.findByIdAndDelete(id);

    return deletedPost;
  }
}

export default new PostService();
