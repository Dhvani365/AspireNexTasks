import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import './Tech.css';

const Tech = () => {
  return (
    <section className="section skill-section">
            <div className="tech-container grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1">
                    <div className="my-3">
                        <div className="sm-title" style={{height: "100px"}}>
                            <h4 className="font-alt">Education</h4>
                        </div>
                        <ul className="education-box theme-bg" style={{minHeight: "300px"}}>
                            <li>
                                <span className="dark-bg">2023-2026</span>
                                <h6>Computer Engineering</h6>
                                <p>Sarvajanik College of Engineering & Technology</p>
                            </li>
                            <li>
                                <span className="dark-bg">2020-2023</span>
                                <h6>Computer Engineering</h6>
                                <p>Govt. Polytechnic For Girls, Surat</p>
                            </li>
                        </ul>
                    </div>
                    <div className="skills">
                        <div className="sm-title">
                            <h4 className="font-alt">My Skills</h4>
                        </div>
                        <div className="gray-bg skill-box">
                            <div className="skill-lt">
                                <h6>React js</h6>
                                <div className="skill-bar">
                                    <div className="skill-bar-in theme-bg" style={{width:"95%"}}>
                                        <span>95%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill-lt">
                                <h6>WordPress</h6>
                                <div className="skill-bar">
                                    <div className="skill-bar-in theme-bg" style={{width:"75%"}}>
                                        <span>75%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill-lt">
                                <h6>HTML5 | CSS3</h6>
                                <div className="skill-bar">
                                    <div className="skill-bar-in theme-bg" style={{width:"95%"}}>
                                        <span>95%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill-lt">
                                <h6>NodeJS | Express</h6>
                                <div className="skill-bar">
                                    <div className="skill-bar-in theme-bg" style={{width:"88%"}}>
                                        <span>88%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill-lt">
                                <h6>MongoDB | MySQL</h6>
                                <div className="skill-bar">
                                    <div className="skill-bar-in theme-bg" style={{width:"92%"}}>
                                        <span>92%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
  );
};

export default SectionWrapper(Tech, "");
