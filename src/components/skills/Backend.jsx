import React from 'react';
import SkillsImg from "../../assets/github.png";
import SkillsImg2 from "../../assets/html.png";
import SkillsImg3 from "../../assets/react.png";
import SkillsImg4 from "../../assets/java.png";
import SkillsImg5 from "../../assets/cpp.png";
import SkillsImg6 from "../../assets/photoshop.png"

const Backend = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Other skills</h3>

    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
                <img src={SkillsImg} alt="" className="skills__img" />
                {/* <i class='bx bx-badge-check'></i> */}

                <div>
                    <h3 className="skills__name">Github</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
            </div>

            <div className="skills__data">
                <img src={SkillsImg2} alt="" className="skills__img" />
                {/* <i class='bx bx-badge-check'></i> */}

                <div>
                    <h3 className="skills__name">HTML</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
            </div>

            <div className="skills__data">
                <img src={SkillsImg3} alt="" className="skills__img" />
                {/* <i class='bx bx-badge-check'></i> */}

                <div>
                    <h3 className="skills__name">React</h3>
                    <span className="skills__level">Basic</span>
                </div>
            </div>

        </div>

        <div className="skills__group">
            <div className="skills__data">
                <img src={SkillsImg4} alt="" className="skills__img" />
                {/* <i class='bx bx-badge-check'></i> */}

                <div>
                    <h3 className="skills__name">Java</h3>
                    <span className="skills__level">Basic</span>
                </div>
            </div>

            <div className="skills__data">
                <img src={SkillsImg5} alt="" className="skills__img" />
                {/* <i class='bx bx-badge-check'></i> */}

                <div>
                    <h3 className="skills__name">C++</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
            </div>

            <div className="skills__data">
                <img src={SkillsImg6} alt="" className="skills__img" />
                {/* <i class='bx bx-badge-check'></i> */}

                <div>
                    <h3 className="skills__name">Photoshop</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
            </div>
            
        </div>

        
    </div>
</div>
  )
}

export default Backend