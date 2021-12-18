import React, {useState, useEffect} from 'react';


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
                    <img src="./img/icone-localisation.png" alt="" className="icone" />
                </div>
                <div className="text-contact-info">
                    15 bis avenue de l'abrevoir<br/>
                    Marly-le-Roi
                </div>
            </div>

            <div className="contact-container">
                <div className="icone-container">
                    <img src="./img/icone-telephone.png" alt="" className="icone"/>
                </div>
                <div className="text-contact-info">
                    +33 6 60 50 90 32
                </div>
            </div>

            <div className="contact-container">
                <div className="icone-container">
                    <img src="./img/icone-mail.png" alt="" className="icone"/>
                </div>
                <div className="text-contact-info">
                    nicolas.noblet.24@eigsi.fr
                </div>
            </div>

            <div className="reseaux">
                <div className="reseau">
                    
                        <div className="icone-reseau-container">
                            <a href="https://www.linkedin.com/in/nicolas-noblet-4089ba1a0/">
                                <img src="./img/reseau-linkedin.png" alt="" className="icone"/>
                            </a>
                        </div>
                    
                </div>
            </div>

        </div>
    );
};

export default BlockContact;