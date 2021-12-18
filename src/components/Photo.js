import React, {useState, useEffect} from 'react';

const Photo = () => {

    const [positionX, setpositionX] = useState(0);


    const toggleTranslation = () => {
        if( window.pageYOffset < 300 ) {
            setpositionX(window.innerWidth*(50-36*window.pageYOffset/300)/100);
        }
        else{
            setpositionX(window.innerWidth*14/100);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleTranslation);
        window.addEventListener('resize', toggleTranslation);
        window.addEventListener('load', toggleTranslation);
        return () => {
            window.removeEventListener('scroll', toggleTranslation);
            window.removeEventListener('resize', toggleTranslation);
            window.removeEventListener('load', toggleTranslation);
        }
    }, [])

    return (
        <div className="Photo" style={{left: positionX}}>
            <img src="./img/photo-de-profil.jpg" alt="" className="img-de-profil"  />
        </div>
    );
};

export default Photo;