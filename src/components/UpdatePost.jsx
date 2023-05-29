import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const UpdatePost = () => {

    const updatePost = async (data) => {
        const response = await axios.patch(`https://jsonplaceholder.typicode.com/posts/1`, data);
        return response.data;
    };

    const queryClient = useQueryClient();
    const mutation = useMutation((data) => updatePost(data), {
        onSuccess: () => {
            console.log("updated")
            queryClient.invalidateQueries('posts');
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        mutation.mutate(Object.fromEntries(formData));
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea className="textarea textarea-lg textarea-info mt-20 w-full max-w-xs" placeholder="post" name="post" />
            <br />
            <button className="btn btn-success" type="submit">Update post</button>
        </form >
    );
};

export default UpdatePost;