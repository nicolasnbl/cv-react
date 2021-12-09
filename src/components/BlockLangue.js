import React from 'react';


const BlockLangue = () => {

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
                            <div className="sous-barre anglais">
                            </div>
                        </div>
                    </div>
                    <div className="btn-link-langue-container">
                        <img src="./img/icone-langue-diplome.png" alt="" className="icone-diplome"/>
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
                            <div className="sous-barre espagnol">
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default BlockLangue;