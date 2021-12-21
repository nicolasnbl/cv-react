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

    const scrollToElement = () => {
        window.scrollTo({
            top: 700,
            left: 0,
            behavior: 'smooth'
        })
    }
    


    useEffect(() => {
        const mainDiv = document.getElementById("menu-nav");
        const menu = document.getElementById("main-container-nav");
        const icon = document.getElementById("icon-nav");
        const experience = document.getElementById("nav-experience");
        menu.addEventListener('mouseleave', toggleClose);
        mainDiv.addEventListener('mouseleave', toggleClose);
        icon.addEventListener('mouseenter', toggleOpen);
        experience.addEventListener('click', scrollToElement);
        return () => {
            menu.removeEventListener('mouseleave', toggleClose);
            mainDiv.removeEventListener('mouseleave', toggleClose);
            icon.removeEventListener('mouseenter', toggleOpen);
            experience.removeEventListener('click', scrollToElement);
        }
    }, [])


    return (
        <div className={className} id="menu-nav">

            <div className="main-container-nav" id="main-container-nav">
                <div className="nav-experience nav-block">
                    <div className="nav-experience-titre nav-titre" id='nav-experience'>
                        Expériences
                    </div>
                    <div className="nav-sous-block-container">
                        <div className="nav-stage nav-sous-block">
                            Stage
                        </div>
                        <div className="nav-formation nav-sous-block">
                            Formation
                        </div>
                        <div className="nav-divers nav-sous-block">
                            Divers Expériences
                        </div>
                    </div>
                </div>
                <div className="nav-langue nav-block">
                    <div className="nav-langue-titre nav-titre">
                        Maîtrise des langues
                    </div>
                </div>
                <div className="nav-competence nav-block">
                    <div className="nav-competence-titre nav-titre">
                        Compétence
                    </div>
                    <div className="nav-sous-block-container">
                        <div className="nav-stage nav-sous-block">
                            Conception assiter par ordinateur
                        </div>
                        <div className="nav-formation nav-sous-block">
                            Programmation
                        </div>
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