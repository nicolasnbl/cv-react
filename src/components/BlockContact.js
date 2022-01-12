import React, {useState, useEffect} from 'react';
import { MdLocationPin } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { BsLinkedin, BsGithub } from 'react-icons/bs';




const BlockContact = () => {

    const [translation, setTranslation] = useState(false)

    const className = translation ? 'transaltion-right BlockContact sous-block' : 'translation-left BlockContact sous-block';

    const toggleTranslation = () => {
        if( window.pageYOffset < 300 ) {
            setTranslation(false);
        }
        else{
            setTranslation(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleTranslation);
        return () => {
            window.removeEventListener('scroll', toggleTranslation);
        }
    }, [])
    
    return (
        <div className={className}>

            <div className="contact-container">
                <div className="icone-container">
                    <MdLocationPin size='100vh' style={{height : '5vh'}}/>
                </div>
                <div className="text-contact-info">
                    15 bis avenue de l'abreuvoir<br/>
                    Marly-le-Roi
                </div>
            </div>

            <div className="contact-container">
                <div className="icone-container">
                    <FaPhoneAlt size='100vh' style={{height : '5vh'}}/>
                </div>
                <div className="text-contact-info">
                    +33 6 60 50 90 32
                </div>
            </div>

            <div className="contact-container">
                <div className="icone-container">
                    <GrMail size='100vh' style={{height : '5vh'}}/>
                </div>
                <div className="text-contact-info">
                    nicolas.noblet.24@eigsi.fr
                </div>
            </div>

            <div className="reseaux">

                
                    <div className="icone-reseau-container">
                        <a href="https://www.linkedin.com/in/nicolas-noblet-4089ba1a0/">
                            <BsLinkedin size='4vh' className="icone-reseau"/>
                        </a>
                    </div>

                    <div className="icone-reseau-container">
                        <a href="https://github.com/nicolasnbl">
                            <BsGithub size='5vh' className="icone-reseau"/>
                        </a>
                    </div>
                    
                
            </div>

        </div>
    );
};

export default BlockContact;