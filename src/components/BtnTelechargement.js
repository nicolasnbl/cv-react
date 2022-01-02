import React, { useState, useEffect } from 'react';
import { FiDownload } from 'react-icons/fi';
import { FaCheck } from 'react-icons/fa';

const BtnTelechargement = () => {

    const [isDownLoad, setisDownLoad] = useState(false);

    const className1 = isDownLoad ? 'isDownLoad btnTele-text' : 'isNotDownLoad btnTele-text' 
    const className2 = isDownLoad ? 'isDownLoad2 validateIcon' : 'isNotDownLoad2 validateIcon'

    const fctDownload = () => {
        setisDownLoad(true);
    }

    useEffect(() => {
        const btn = document.getElementById('btn-download'); 
        btn.addEventListener('click', fctDownload);
        return () => {
            btn.removeEventListener('click', fctDownload);
        }
    }, [])

    return (

        <a className='btn-telechargement' id='btn-download' href='./media/CV Nicolas Noblet.pdf' target='_blank'>
            
            <div className={className1}>
                <FiDownload size='22px'/> Télécharger mon CV
            </div>

            <div className={className2}>
                <FaCheck />
            </div>
        </a>

    );
};

export default BtnTelechargement;