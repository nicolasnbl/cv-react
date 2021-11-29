import React from 'react';
import BlockContact from '../components/BlockContact';
import BlockExperience from '../components/BlockExperience';
import BlockInfos from '../components/BlockInfos';
import BlockLangue from '../components/BlockLangue';
import Photo from '../components/Photo';
import "./../styles/pages/Home.scss"

const Home = () => {


    window.addEventListener("scroll", () =>{
        const scroll = window.scrollY;

        const blockContainer = document.getElementById("main-block");
        const photoContainer = document.getElementById("photo-block");
        
        if( scroll > 300 ) {
            blockContainer.style.opacity = "1" ;
            photoContainer.classList.add("left-position"); 
        }
        else {
            blockContainer.style.opacity =""+(scroll/300)+"";
            photoContainer.style.transform = "translateY(-50%) translateX("+(100-90*(scroll/300))+"vh) scale(1.5)"
            photoContainer.classList.remove("left-position");
                
        }
    });


    return (
        <div className="Home">

            <div className="image-background">

            </div>

            <div className="photo-container" id="photo-block">
                <Photo />
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

            <div className="block-left-container">
                <div className="block-contact-container">
                    <BlockContact />
                </div>
            </div>
            
            
        </div>
    );
};

export default Home;