import React from 'react';

const BlockExperience = () => {




    
    return (
        <div className="BlockExperience" id="BlockExperience">

            <h1>Expériences</h1>

            <h2 id="BlockStage">Stages</h2>

            <div className="block-stage" >

                <div className="stage-1 stage-container">

                    <div className="block-stage-image-info block-info-container">
                        <div className="img-stage-container img-container">
                            <img src="./img/stage-bosch.jpg" alt="image-bosch" className="img-stage img-icone"/>
                        </div>

                        <div className="block-stage-info block-info">
                            <h3>Stagiaire Mécanicien</h3>
                            <div className="entreprise sous-info">Bosh</div>
                            <div className="date sous-info">2 mois | Juin 2020 - Juillet 2020</div>
                            <div className="lieu sous-info">Yvelines, île-de-France, France</div>
                        </div>
                    </div>

                    <div className="description-stage description">
                        Stage Ouvrier d’une durée de 6 semaines. Participation à l’entretien et la maintenance des voiture de particulier dans un garage Bosch dans les Yvelines (78).
                    </div>
                </div>

                <div className="stage-2 stage-container">

                    <div className="block-stage-image-info block-info-container">
                        <div className="img-stage-container img-container">
                            <img src="./img/stage-arianegroup.jpg" alt="image-arianeGroup" className="img-stage img-icone"/>
                        </div>

                        <div className="block-stage-info block-info">
                            <h3>Stage de découverte de l'entreprise</h3>
                            <div className="entreprise sous-info">ArianeGroup</div>
                            <div className="date sous-info">1 mois | Février 2016 </div>
                            <div className="lieu sous-info">Yvelines, île-de-France, France</div>
                        </div>
                    </div>

                    <div className="description-stage description">
                        Découverte du fonctionnement et des différents métiers de l'entreprise, sur une durée de une semaine.
                    </div>
                    

                </div>

            </div>

            <div className="separation"></div>

            <h2 id='BlockFormation'>Formations</h2>

            <div className="block-formation">
                <div className="formation-1 formation">
                    <div className="img-formation-container img-container">
                        <img src="./img/formation-eigsi.jpg" alt="image Eigsi" className="img-formation img-icone" />
                    </div>

                    <div className="block-formation-info block-info">
                        <h3>EIGSI La Rochelle, école d'ingénieurs générralistes</h3>
                        <div className="date sous-info">5 ans | 2019 - 2024</div>
                        <div className="lieu sous-info">La Rochelle, Charente-Maritime, France</div>
                    </div>
                </div>

                <div className="formation-2 formation">
                    <div className="img-formation-container img-container">
                        <img src="./img/formation-lycee.jpg" alt="image lycee" className="img-formation img-icone" />
                    </div>

                    <div className="block-formation-info block-info">
                        <h3>Baccalauréat Scientifique (Lycée Louis de Broglie)</h3>
                        <div className="date sous-info">2019</div>
                        <div className="lieu sous-info">Marly-Le-Roi, île-de-France, France</div>
                    </div>
                </div>
            </div>

            <div className="separation"></div>

            <h2 id='BlockDiver'>Divers Expériences</h2>

            <div className="block-divers">

                <div className="divers-1 divers-container">

                    <div className="block-divers-image-info block-info-container">
                        <div className="img-divers-container img-container">
                            <img src="./img/divers-ef.jpg" alt="image-ef" className="img-divers img-icone"/>
                        </div>

                        <div className="block-divers-info block-info">
                            <h3>Expérience à l’internationale</h3>
                            <div className="entreprise sous-info">Education First</div>
                            <div className="date sous-info"> 6 semaines | Juillet 2021 - Août 2021</div>
                            <div className="lieu sous-info">Malte, Europe</div>
                        </div>
                    </div>

                    <div className="description-divers description">
                        Description EF
                    </div>
                </div>

                <div className="divers-2 divers-container">

                    <div className="block-divers-image-info block-info-container">
                        <div className="img-divers-container img-container">
                            <img src="./img/divers-cnes.jpg" alt="image-ef" className="img-divers img-icone"/>
                        </div>

                        <div className="block-divers-info block-info">
                            <h3>Tirs de mini-fusées avec le CNES</h3>
                            <div className="entreprise sous-info">Centre national d'études spatiales (CNES)</div>
                            <div className="date sous-info">2016 - 2019</div>
                            <div className="lieu sous-info">Tarbe, France</div>
                        </div>
                    </div>

                    <div className="description-divers description">
                        Description CNES
                    </div>
                </div>

            </div>

        </div>
    );
};

export default BlockExperience;