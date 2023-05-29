import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const Posts = () => {

    const postQuery = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            const data = await response.data;
            return data;
        },
        retry: 3,
    })

    if (postQuery.isLoading) return (<h1>Loading....</h1>)
    if (postQuery.isError) return (<h1>Error loading data!!!</h1>)

    return (
        <div className="overflow-x-auto my-20 w-4/5 mx-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th className="text-teal-700 font-bold mt-10 text-xl">#</th>
                        <th className="text-teal-700 font-bold mt-10 text-xl">Post Title</th>
                        <th className="text-teal-700 font-bold mt-10 text-xl">Post Body</th>
                    </tr>
                </thead>
                <tbody>
                    {postQuery?.data?.map((post) => <tr key={post.id}>
                        <th>{post.id}</th>
                        <td>{post.title}</td>
                        <th>{post.body}</th>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Posts;