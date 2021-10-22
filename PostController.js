import Post from "./Post.js";

class PostController {
    async getAll(req,res){
            try {

            }
            catch (e) {
                res.status(500).json(e);
            }
    }

    async getOne(){
        try {

        }
        catch (e) {
            res.status(500).json(e);
        }
    }

    async postOne(req,res){
        try{
            const {author, title, content, picture} = req.body;
            const post = await Post.create({author, title, content, picture});
            res.json(post);
        }
        catch (e){
            res.status(500).json(e);
        }
    }

    async updatePost(){
        try {

        }
        catch (e) {
            res.status(500).json(e);
        }
    }

    async deletePost() {
        try {

        }
        catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new PostController();