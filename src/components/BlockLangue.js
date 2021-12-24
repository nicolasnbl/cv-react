import React, { useEffect, useState } from 'react';
import { IoSchool } from 'react-icons/io5';



const BlockLangue = () => {

    const [isSlide,setisSlide] = useState(false);

    const classNameAnglais = isSlide ? 'barre-visible-anglais sous-barre' : 'barre-notVisible sous-barre' 
    const classNameEspagnol = isSlide ? 'barre-visible-espagnol sous-barre' : 'barre-notVisible sous-barre'

    const toggleSlide = () => {
        if(window.pageYOffset > 1100 ){
            setisSlide(true);            
        }
        else{
            setisSlide(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleSlide);
        return () => {
            window.removeEventListener('scroll', toggleSlide);
        }
    }, []) 


    return (
        <div className="BlockLangue">
            <div className="titre titre-langue">Maîtrise des langues</div>

            <div className="block-langue">
                <div className="langue-1 langue">
                    <div className="langue-info-container">
                        <div className="langue-titre">
                            Anglais
                        </div>
                        <div className="langue-niveau">
                            Niveau B2
                        </div>
                    </div>
                    <div className="langue-barre-container">
                        <div className="barre">
                            <div className={classNameAnglais}>
                            </div>
                        </div>
                    </div>
                    <div className="btn-link-langue-container">
                        <IoSchool size='30px' />
                    </div>
                </div>

                <div className="langue-2 langue">
                    <div className="langue-info-container">
                        <div className="langue-titre">
                            Espagnol
                        </div>
                        <div className="langue-niveau">
                            Niveau scolaire
                        </div>
                    </div>
                    <div className="langue-barre-container">
                        <div className="barre">
                            <div className={classNameEspagnol}>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default BlockLangue;