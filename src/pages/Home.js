import React from 'react';
import BlockContact from '../components/BlockContact';
import BlockExperience from '../components/BlockExperience';
import BlockInfos from '../components/BlockInfos';
import BlockLangue from '../components/BlockLangue';
import BtnScroll from '../components/BtnScroll';
import BtnTelechargement from '../components/BtnTelechargement';
import Navigation from '../components/Navigation';
import Photo from '../components/Photo';

const Home = () => {


    window.addEventListener("scroll", () =>{
        const scroll = window.scrollY;

        const blockContainer = document.getElementById("main-block");
        const photoContainer = document.getElementById("photo-block");
        const leftBlock = document.getElementById("block-contact-container");
        
        if( scroll > 300 ) {
            blockContainer.style.opacity = "1" ;
            photoContainer.style.left = "5%";
            leftBlock.style.transform = "translateX(0%)";
            photoContainer.style.transform = "translateY(-50%) translateX(0) scale(2)";
        }
        else {
            blockContainer.style.opacity =""+(scroll/300)+"";
            leftBlock.style.transform = "translateX(-120%)";
        }

        if ( scroll < 250 ){
            photoContainer.style.transform = "translateY(-50%) translateX(-"+(90*(scroll/300))+"vh) scale(2)";
            
        }
    });


    return (
        <div className="Home">

            <div className="image-background">

            </div>

            <div className="nav-container">
                <Navigation />
            </div>

            <div className="btnTelechargement-container">
                <BtnTelechargement />
            </div>

            <div className="photo-container" id="photo-block">
                <Photo />
            </div>

            <div className="btnScroll-container">
                <BtnScroll />
            </div>

            <div id="main-block" className="block-container" >
                <div className="block-infos-container sous-block">
                    <BlockInfos />
                </div>
                <div className="block-experience-container sous-block">
                    <BlockExperience />
                </div>
                <div className="block-langue-container sous-block">
                    <BlockLangue />
                </div>
            </div>

            <div className="block-left-container" id="block-left-container">
                <div className="block-contact-container" id="block-contact-container">
                    <BlockContact />
                </div>
            </div>
            
            
        </div>
    );
};

export default Home;