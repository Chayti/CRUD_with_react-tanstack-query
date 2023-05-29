import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const AddPost = () => {

    const addPost = async (data) => {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
        return response.data;
    };

    const queryClient = useQueryClient();
    const mutation = useMutation(addPost, {
        onSuccess: () => {
            console.log("added")
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
            <textarea className="textarea textarea-lg textarea-info mt-20 w-full max-w-xs" name="post" />
            <br />
            <button className="btn btn-success" type="submit">Add Post</button>
        </form>
    )

};

export default AddPost;