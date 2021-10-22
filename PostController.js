import Post from "./Post.js";

class PostController {
    async getAll(req,res){
            try {
                const posts = await Post.find();
                return res.json(posts);
            }
            catch (e) {
                res.status(500).json(e);
            }
    }

    async getOne(req, res){
        try {
            const {id} = req.params;
            const post = await Post.findById(id);
            if (!id) { 
                res.status(400).json({message: "id not specified"});
            }
            return res.json(post);

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

    async updatePost(req, res){
        try {
            const post = req.body;
            if (!post._id) { 
                return res.status(400).json({message: "id not specified"});
            }
            const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new:true});
            res.json(updatedPost);
        }
        catch (e) {
            res.status(500).json(e);
        }
    }

    async deletePost(req, res) {
        try {
            const {id} = req.params;
            const deletedPost = await Post.findByIdAndRemove(id);
            if (!id) { 
                res.status(400).json({message: "id not specified"});
            }
            return res.status(200).json({message: `post with id: ${id} deleted`});
        }
        catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new PostController();