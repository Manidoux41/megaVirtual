import React from 'react';
import Navbar from '../components/Navbar';
import Post from '../components/Post';

const Home = () => {
    return (
        <div className="homepage">
            <Navbar />
            <Post />
        </div>
    );
};

export default Home;