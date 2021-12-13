import React, {useState, useEffect} from 'react';


const Titre1 = () => {
    
    const [translation, setTranslation] = useState(true)

    const className = translation ? 'Titre1 opacity-100-Titre1' : 'Titre1 opacity-0-Titre1';

    const toggleTranslation = () => {
        if( window.pageYOffset < 10 ) {
            setTranslation(true);
        }
        else{
            setTranslation(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleTranslation);
        return () => {
            window.removeEventListener('scroll', toggleTranslation);
        }
    }, [])

    return (
        <div className={className} >
            Nicolas Noblet
        </div>
    );
};

export default Titre1;