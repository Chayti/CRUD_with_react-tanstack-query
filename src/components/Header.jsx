import './Header.css'
import { NavLink } from "react-router-dom";

const Header = () => {

    return (
        <div className="header py-10">
            <div className="btn btn-ghost uppercase text-2xl font-serif ">
                <div>
                    CRUD with
                    <small className='block text-xs font-thin ml-2' style={{ letterSpacing: '8px' }}>React Query</small>
                </div>
            </div>
            <div className="navbar flex justify-center">
                <div className="flex px-25">
                    <ul className="menu menu-horizontal px-1 active-style">
                        <li><NavLink to="/">Posts</NavLink></li>
                        <li><NavLink to="/singlePost">Single Post</NavLink></li>
                        <li><NavLink to="/addPost">Add Post</NavLink></li>
                        <li><NavLink to="/updatePost/1">Update Post</NavLink></li>
                        <li><NavLink to="/deletePost/1">Delete Post</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;