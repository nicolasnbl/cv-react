import React from 'react';
import { useEffect } from 'react/cjs/react.development';

const BtnScroll = () => {

    const [isVisible, setisVisible] = useState(true);

    const toggleVisibility = () => {
        if( window.pageYOffset < 300 ) {
            setisVisible(true);
        }
        else{
            setisVisible(false);
        }
    }

    const scrollDown = () => {
        window.scrollTo({
            top: 300,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        }
    }, []) 


    return (
        <div className="BtnScroll">
            <div className="btnScroll">
                <div className="text-btnScroll">
                    Sroll pour découvrir
                </div>
            </div>
        </div>
    );
};

export default BtnScroll;