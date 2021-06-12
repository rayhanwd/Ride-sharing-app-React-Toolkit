import React, { Fragment } from 'react';
import ServiceTime from '../ServiceTime/ServiceTime';
import TalkAbout from '../TalkAbout/TalkAbout';
import Services from '../Service/Service';
import Header from './../Header/Header';
import LetsTalkUs from '../LetsTalkUs/LetsTalkUs';
import Footer from '../Footer/Footer';
import Blog from '../Blog/Blog';
import GreatSolution from '../GreatSolution/GreatSolution';
import ContactForm from '../ContactForm/ContactForm';

const Home = () => {
    document.title = 'Ride Finder online service';
    return (
        <Fragment>
            <Header />
            <ServiceTime />
            <TalkAbout />
            <Services></Services>
            <Blog />
            <LetsTalkUs />
            <GreatSolution />
            <ContactForm />
            <Footer />
        </Fragment>
    );
};

export default Home;