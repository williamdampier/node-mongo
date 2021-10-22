import Post from "./Post.js";

import FileService from "./FileService.js";

class PostService {
    
    async create(post, picture){
        try{
            const fileName = FileService.fileSave(picture);
            const createdPost = await Post.create({...post, picture: fileName});
            return createdPost;
        }
        catch (e){
            res.status(500).json(e);
        }
    }

    async getOne(id){
        try {
            const post = await Post.findById(id);
            if (!id) { 
                throw new Error("id not specified");
            }
            return post;
        }
        catch (e) {
            res.status(500).json(e);
        }
    }

    async getAll(){    
                const posts = await Post.find();
                return posts;       
    }

    async updatePost(post){
            if (!post._id) { 
                throw new Error("id not specified");
            }
            const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new:true});
            return updatedPost;
       
    }

    async deletePost(id) {
        if (!id) { 
            throw new Error("id not specified");
        }
            await Post.findByIdAndRemove(id);
           
            return "Post with id:" + id + "deleted";
     
    }
}

export default new PostService();