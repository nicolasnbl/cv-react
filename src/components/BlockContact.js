import React from 'react';
import "./../styles/components/BlockContact.scss"

const BlockContact = () => {
    
    return (
        <div className="BlockContact">

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

        </div>
    );
};

export default BlockContact;