import React from 'react';
import SkillsImg from "../../assets/excel.png";
import SkillsImg2 from "../../assets/python.png";
import SkillsImg3 from "../../assets/sql.png";
import SkillsImg4 from "../../assets/power_bi.png";
import SkillsImg5 from "../../assets/tableau.png";
import SkillsImg6 from "../../assets/machine_learning.png"

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Data Analysis</h3>

            <div className="skills__box">
            <div className="skills__group">
                        <div className="skills__data">
                            <img src={SkillsImg} alt="" className="skills__img" />
                            {/* <i class='bx bx-badge-check'></i> */}

                            <div>
                                <h3 className="skills__name">Excel</h3>
                                <span className="skills__level">Advanced</span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <img src={SkillsImg2} alt="" className="skills__img" />
                            {/* <i class='bx bx-badge-check'></i> */}

                            <div>
                                <h3 className="skills__name">Python</h3>
                                <span className="skills__level">Intermediate</span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <img src={SkillsImg3} alt="" className="skills__img" />
                            {/* <i class='bx bx-badge-check'></i> */}

                            <div>
                                <h3 className="skills__name">MySQL</h3>
                                <span className="skills__level">Advanced</span>
                            </div>
                        </div>
                    </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <img src={SkillsImg4} alt="" className="skills__img" />
                        {/* <i class='bx bx-badge-check'></i> */}

                        <div>
                            <h3 className="skills__name">Power BI</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <img src={SkillsImg5} alt="" className="skills__img" />
                        {/* <i class='bx bx-badge-check'></i> */}

                        <div>
                            <h3 className="skills__name">Tableau</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <img src={SkillsImg6} alt="" className="skills__img" />
                        {/* <i class='bx bx-badge-check'></i> */}

                        <div>
                            <h3 className="skills__name">Machine learning</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Frontend