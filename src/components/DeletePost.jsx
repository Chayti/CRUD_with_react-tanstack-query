import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const PostData = ({ post }) => {
    // Delete the post
    const deletePost = async (id) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    };

    const queryClient = useQueryClient();
    const mutation = useMutation(() => deletePost(`${post.id}`), {
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
                <h2 className="text-center">Post ID: {post.id}</h2>
                <h2 className="card-title">{post.title}</h2>
                <p>{post.body}</p>
            </div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

const DeletePost = () => {

    // Fetch single post
    const { data: post, isLoading, isError } = useQuery({
        queryKey: ['post'],
        queryFn: async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
            const data = await response.data;
            return data;
        },
        retry: 3,
    });

    if (isLoading) return <h1>Loading....</h1>;
    if (isError) return <h1>Error loading data!!!</h1>;

    return <PostData post={post} />;
};

export default DeletePost;
