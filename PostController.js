import Post from "./Post.js";
import PostService from "./PostService.js";

class PostController {
    async getAll(req,res){
            try {
                
                const posts = await PostService.getAll();
                return res.json(posts);
            }
            catch (e) {
                res.status(500).json(e);
            }
    }

    async getOne(req, res){
        try {
          
            const post = await PostService.getOne(req.params.id);
            return res.json(post);

        }
        catch (e) {
            res.status(500).json(e);
        }
    }

    async postOne(req,res){
        try{
           
            const post = await PostService.create(req.body, req.files.picture);
            res.json(post);
        }
        catch (e){
            res.status(500).json(e);
        }
    }

    async updatePost(req, res){
        try {
         
            const updatedPost = await PostService.updatePost(req.body);
            res.json(updatedPost);
        }
        catch (e) {
            res.status(500).json(e.message);
        }
    }

    async deletePost(req, res) {
        try {

            const deletedPost = await PostService.deletePost(req.params.id);     
            return deletedPost;
        }
        catch (e) {
            res.status(500).json(e.message);
        }
    }
}

export default new PostController();