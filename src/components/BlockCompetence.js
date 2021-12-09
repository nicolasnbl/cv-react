import React from 'react';

const BlockCompetence = () => {
    return (
        <div className="BlockCompetence">
            <h1>Compétence</h1>

            <div className="cao-container">
                <h2 className="h2-competence">Conception assiter par ordinateur</h2>
                
                <div className="block-cao">
                    <div className="block-catia block-info-container">
                        <div className="img-container">
                            <img src="./img/cao-catia.jpg" alt="" className="img-icone" />
                        </div>

                        <div className="block-cao-info block-info">
                            <h3>Catia V5</h3>
                            <div className="date-apprentissage sous-info"> Début de l'apprentissage : 2017 </div>
                            <div className="info-apprentissage sous-info">En autodidacte puis formation complète suivie à L'EIGSI</div>
                        </div>
                    </div>
                    <div className="fleche-cao">

                    </div>
                    <div className="block-catia block-info-container">
                        <div className="img-container">
                            <img src="./img/cao-3DE.jpg" alt="" className="img-icone" />
                        </div>

                        <div className="block-cao-info block-info">
                            <h3>3DExpérience</h3>
                            <div className="date-apprentissage sous-info"> Début de l'apprentissage : 2021 </div>
                            <div className="info-apprentissage sous-info">Formation suivie à L'EIGSI</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="separation"></div>

            <div className="prog-container">
                <h2 className="h2-competence">Programmation</h2>
                
                <div className="btn-gitHub">

                </div>

                <div className="block-group-img">
                    <div className="img-container">
                        <img src="./img/prog-html.png" alt="" className="img-icone img-recadrage" />
                    </div>
                    <div className="img-container">
                        <img src="./img/prog-css.png" alt="" className="img-icone" />
                    </div>
                    <div className="img-container">
                        <img src="./img/prog-js.png" alt="" className="img-icone img-recadrage" />
                    </div>
                </div>

               <div className="prog-description">
                    Description Programmation évoquer react js
                    <div className="date-java sous-info"> Début de l'apprentissage : 2016 (HTML/CSS) 2021 (JS/React.js) </div>
                    <div className="info-java sous-info"> Formation avec L'EIGSI + plus avancé en autodidacte </div>
               </div>

               <div className="block-group-img">

                   <div className="php-container">
                        <div className="img-container img-large">
                            <img src="./img/prog-php.png" alt="" className="img-icone img-recadrage" />
                        </div>
                        <div className="php-description">
                            <div className="date-java sous-info"> Début de l'apprentissage : 2019 </div>
                            <div className="info-java sous-info"> En autodidacte avec Openclassroom</div>
                            <div className="php-description-text">Notion permettant de crée un back-end en php (site avec des utilisateurs, gestion d'une base de donné SQL, ...)</div>
                        </div>
                    </div>

                    <div className="php-container">
                        <div className="img-container ">
                            <img src="./img/prog-java.png" alt="" className="img-icone" />
                        </div>
                        <div className="java-description">
                            <div className="date-java sous-info"> Début de l'apprentissage : 2019-2020 </div>
                            <div className="info-java sous-info"> Formation suivie à L'EIGSI </div>
                            <div className="java-description-text">Notions de base sur le programmation objet en Java, un projet réalisé avec l'école</div>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    );
};

export default BlockCompetence;



