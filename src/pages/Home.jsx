import React from 'react';
import Banner from './Home/Banner';
import Category from './Home/Category';
import PopularMenu from './Home/PopularMenu';
import Featured from './Home/Featured';
import Testimonials from './Home/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;