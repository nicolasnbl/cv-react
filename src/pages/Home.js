import React, { useEffect } from 'react';
import BlockContact from '../components/BlockContact';
import BtnScroll from '../components/BtnScroll';
import BtnTelechargement from '../components/BtnTelechargement';
import MainBlock from '../components/MainBlock';
import Navigation from '../components/Navigation';
import Photo from '../components/Photo';
import Titre1 from '../components/Titre1';

const Home = () => {


    return (
        <div className="Home">

            <div className="image-background">
                <img src="./img/arrierePlan.png" alt="" className='img-bgd' />
            </div>

            <div className="nav-container">
                <Navigation />
            </div>

            <div className="btnTelechargement-container">
                <BtnTelechargement />
            </div>

            <div className="titre1-container">
                <Titre1 />
            </div>

            <div className="photo-container" id="photo-block">
                <Photo />
            </div>

            <div className="btnScroll-container" id="btnScroll-container">
                <BtnScroll />
            </div>

            <MainBlock />

            <div className="block-left-container" id="block-left-container">
                <div className="block-contact-container" id="block-contact-container">
                    <BlockContact />
                </div>
            </div>
            
            
        </div>
    );
};

export default Home;