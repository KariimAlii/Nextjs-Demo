import PostForm from "@/app/components/post-form";
import {createPost} from "@/actions/posts";


export default function NewPostPage() {
  return <PostForm action={createPost}/>
}
