import React from 'react';
import "./qualification.css";

const Qualification = () => {
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Academic level</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button button--flex">
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className="qualification__content">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Kendriya Vidyalaya,</h3>
                                <span className="qualification__subtitle">ONGC Nazira</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> 2007 - 2019
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Guwahati University,</h3>
                                <span className="qualification__subtitle">Bachelor of Computer Application</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> 2020 - 2023
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        
        </section >

    )
}

export default Qualification