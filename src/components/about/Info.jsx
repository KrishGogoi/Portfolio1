import React from 'react';

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bx bx-briefcase-alt about__icon' ></i>
            <h3 className="about__title">Projects</h3>
            <span className="about__subtitle">10+ projects</span>
        </div>

        <div className="about__box">
            <i class='bx bx-support about__icon'></i>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>

        <div className="about__box">
            <i class='bx bx-coffee about__icon'></i>
            <h3 className="about__title">Coffee</h3>
            <span className="about__subtitle">500+ cups</span>
        </div>
    </div>
  )
}

export default Info