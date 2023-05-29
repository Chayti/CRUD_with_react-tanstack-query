import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const SinglePost = () => {

    const { data: post, isLoading, isError } = useQuery({
        queryKey: ['post'],
        queryFn: async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
            const data = await response.data;
            return data;
        },
        retry: 3,
    })

    if (isLoading) return (<h1>Loading....</h1>)
    if (isError) return (<h1>Error loading data!!!</h1>)

    return (
        <div className="card w-96 bg-[#63f7e8] my-20 mx-auto">
            <div className="card-body">
                <h2 className="text-center">Post ID: {post.id}</h2>
                <h2 className="card-title">{post.title}</h2>
                <p>{post.body}</p>
            </div>
        </div>
    );
};

export default SinglePost;