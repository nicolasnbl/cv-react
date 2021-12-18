import React, {useEffect, useState} from 'react';
import BlockCompetence from './BlockCompetence';
import BlockExperience from './BlockExperience';
import BlockInfos from './BlockInfos';
import BlockLangue from './BlockLangue';

const MainBlock = () => {

    const [opacityValue, setopacityValue] = useState(0);


    const toggleTranslation = () => {
        if( window.pageYOffset < 300 ) {
            setopacityValue(window.scrollY/300);
        }
        else{
            setopacityValue(1);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleTranslation);
        return () => {
            window.removeEventListener('scroll', toggleTranslation);
        }
    }, [])

    return (
        <div id="main-block" className="block-container" style={{opacity: opacityValue}}>
            <div className="block-infos-container sous-block">
                <BlockInfos />
            </div>
            <div className="block-experience-container sous-block">
                <BlockExperience />
            </div>
            <div className="block-langue-container sous-block">
                <BlockLangue />
            </div>
            <div className="block-competence-container sous-block">
                <BlockCompetence />
            </div>
        </div>
    );
};

export default MainBlock;