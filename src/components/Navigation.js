import React, {useState, useEffect, Component} from 'react';
import { MdMenu } from 'react-icons/md';

const Navigation = () => {

    const [isOpen, setisOpen] = useState(false);

    const className = isOpen ? 'navOpen '+"Navigation" : 'navClose '+"Navigation";

    const clickBtn = () => {
        setisOpen(!isOpen);
    }

    const toggleClose = () => {
        setisOpen(false);
    }

    const toggleOpen = () => {
        setisOpen(true);
    }
    


    useEffect(() => {
        const mainDiv = document.getElementById("menu-nav");
        const menu = document.getElementById("main-container-nav");
        const icon = document.getElementById("icon-nav");
        const experience = document.getElementById("nav-experience");
        menu.addEventListener('mouseleave', toggleClose);
        mainDiv.addEventListener('mouseleave', toggleClose);
        icon.addEventListener('mouseenter', toggleOpen);
        return () => {
            menu.removeEventListener('mouseleave', toggleClose);
            mainDiv.removeEventListener('mouseleave', toggleClose);
            icon.removeEventListener('mouseenter', toggleOpen);
        }
    }, [])


    return (
        <div className={className} id="menu-nav">

            <div className="main-container-nav" id="main-container-nav">
                <div className="nav-experience nav-block">
                    <a href="#BlockInfos">
                        <div className="nav-info-titre nav-titre" id='nav-info'>
                            Information générale
                        </div>
                    </a>
                    <a href="#BlockExperience">
                        <div className="nav-experience-titre nav-titre" id='nav-experience'>
                            Expériences
                        </div>
                    </a>
                    <div className="nav-sous-block-container">
                        <a href="#BlockStage">
                            <div className="nav-stage nav-sous-block">
                                Stage
                            </div>
                        </a>
                        <a href="#BlockFormation">
                            <div className="nav-formation nav-sous-block">
                                Formation
                            </div>
                        </a>
                        <a href="#BlockDiver">
                            <div className="nav-divers nav-sous-block">
                                Divers Expériences
                            </div>
                        </a>
                    </div>
                </div>
                <div className="nav-langue nav-block">
                    <a href="#BlockLangue">
                        <div className="nav-langue-titre nav-titre">
                            Maîtrise des langues 
                        </div> 
                    </a>
                </div>
                <div className="nav-competence nav-block">
                    <a href="#BlockCompetence">
                        <div className="nav-competence-titre nav-titre">
                            Compétence
                        </div>
                    </a>
                    <div className="nav-sous-block-container">
                        <a href="#BlockCao">
                            <div className="nav-stage nav-sous-block">
                                Conception assiter par ordinateur
                            </div>
                        </a>
                        <a href="#BlockProgrammation">
                            <div className="nav-formation nav-sous-block">
                                Programmation
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div type='button' id="icon-nav" onClick={clickBtn} className="icon-nav-container">
                <MdMenu size='75px' />
            </div>

        </div>
    );
};

export default Navigation;