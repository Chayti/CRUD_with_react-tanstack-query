import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const PostData = ({ postQuery }) => {
    // Delete the post
    const deletePost = async (itemId) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${itemId}`);
    };

    const queryClient = useQueryClient();
    const mutation = useMutation(() => deletePost(`${postQuery.data.id}`), {
        onSuccess: () => {
            console.log('deleted');
            queryClient.invalidateQueries('posts');
        },
    });

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            mutation.mutate();
        }
    };

    return (
        <div className="card w-96 bg-[#63f7e8] my-20 mx-auto">
            <div className="card-body">
                <h2 className="text-center">Post ID: {postQuery.data.id}</h2>
                <h2 className="card-title">{postQuery.data.title}</h2>
                <p>{postQuery.data.body}</p>
            </div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

const DeletePost = () => {

    // Fetch single post
    const postQuery = useQuery({
        queryKey: ['post'],
        queryFn: async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
            const data = await response.data;
            return data;
        },
        retry: 3,
    });

    if (postQuery.isLoading) return <h1>Loading....</h1>;
    if (postQuery.isError) return <h1>Error loading data!!!</h1>;

    return <PostData postQuery={postQuery} />;
};

export default DeletePost;
