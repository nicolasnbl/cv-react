import React, {useEffect, useState} from 'react';

const BtnScroll = () => {

    const [isVisible, setisVisible] = useState(true);

    const className = isVisible ? 'opacity-100 '+'btnScroll' : 'opacity-0 '+'btnScroll';

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
            <div type='button' onClick={scrollDown} className={className}>
                <div className="text-btnScroll">
                    Scroll pour découvrir
                </div>
            </div>
    );
};

export default BtnScroll;