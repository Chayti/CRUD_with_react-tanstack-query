import { createBrowserRouter } from 'react-router-dom';
import AddPost from './components/AddPost';
import DeletePost from './components/DeletePost';
import Posts from './components/Posts';
import SinglePost from './components/SinglePost';
import UpdatePost from './components/UpdatePost';
import Layout from './Layout';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Posts />,
      },
      {
        path: "/singlePost",
        element: <SinglePost />,
      },
      {
        path: "/addPost",
        element: <AddPost />,
      },
      {
        path: "/updatePost/1",
        element: <UpdatePost />,
      },
      {
        path: "/deletePost/1",
        element: <DeletePost />,
      }
    ],

  }
]);

export default routes;