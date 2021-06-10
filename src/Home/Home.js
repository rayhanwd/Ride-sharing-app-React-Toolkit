import React from 'react';
import ServiceTime from '../ServiceTime/ServiceTime';
import TalkAbout from '../TalkAbout/TalkAbout';
import Services from '../Service/Service';
import Header from './../Header/Header';
import LetsTalkUs from '../LetsTalkUs/LetsTalkUs';

const Home = () => {
    document.title = 'Ride Finder online service';
    return (
        <>
            <Header />
            <ServiceTime />
            <TalkAbout/>
            <Services></Services>
            <LetsTalkUs/>
        </>
    );
};

export default Home;