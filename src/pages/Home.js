import React, { useEffect } from 'react';
import BlockCompetence from '../components/BlockCompetence';
import BlockContact from '../components/BlockContact';
import BlockExperience from '../components/BlockExperience';
import BlockInfos from '../components/BlockInfos';
import BlockLangue from '../components/BlockLangue';
import BtnScroll from '../components/BtnScroll';
import BtnTelechargement from '../components/BtnTelechargement';
import Navigation from '../components/Navigation';
import Photo from '../components/Photo';

const Home = () => {

    /*

    var blockContainer = null;
    var photoContainer = null;
    var leftBlock = null;
    var btnScrollContainer = null;


    window.addEventListener("load", () =>{
        blockContainer = document.getElementById("main-block");
        photoContainer = document.getElementById("photo-block");
        leftBlock = document.getElementById("block-contact-container");
        btnScrollContainer = document.getElementById("btnScroll-container"); 
    });

    window.addEventListener("scroll", () =>{
        const scroll = window.scrollY;

        if( scroll > 0 ) {
            scrollZeroCss();
        }
        else{
            scrollPlusDeZeroCss();
        }

        if( scroll > 300 ) {
            scrollplus300css(); //action css sans la var scroll
        }
        else {
            scrollmoins300css(scroll);
        }
    });

    const scrollZeroCss = () => {
        btnScrollContainer.style.display = "none";
    }

    const scrollPlusDeZeroCss = () => {

        btnScrollContainer.style.display = "block";
    }
    
    const scrollplus300css = () => {
        blockContainer.style.opacity = "1" ;
        leftBlock.style.transform = "translateX(0%)";
        btnScrollContainer.style.display = "none";
    }

    const scrollmoins300css = (scrl) => {
        btnScrollContainer.style.display = "flex";
        leftBlock.style.transform = "translateX(-120%)";
        blockContainer.style.opacity =""+(scrl/300)+"";
    }

    const clickBtn = () => {
        window.scroll(0, 300);
    }

    */

    return (
        <div className="Home">

            <div className="image-background">
                <img src="./img/arrierePlan.png" alt="" />
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

            <div className="btnScroll-container" id="btnScroll-container">
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
                <div className="block-competence-container sous-block">
                    <BlockCompetence />
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