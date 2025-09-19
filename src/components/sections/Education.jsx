import React from 'react';

const Education = () => {
    return (
        <section id="education" className="education-section">
            <div className="container">
                <div className="section-header">
                    <h2>Education & Learning</h2>
                </div>
                <div className="education-container">
                    <article className="education-card">
                        <div className="experience-header">
                            <div>
                                <h3 className="experience-title">Technion</h3>
                                <div className="experience-company">Computer science bachelor's degree</div>
                            </div>
                        </div>
                        <p className="education-paragraph">
                            My formal education at the Technion provided a strong theoretical foundation in computer science. However, I found that real growth came from hands-on experience and self-driven learning.
                        </p>
                        <p className="education-paragraph">
                            Passed with excelency all computer science courses (80+) algorithms, data structures, digital systems, computer organization and programming, numerical algorithms, automatas and group theory. More to follow in the future...
                        </p>
                        <p className="education-paragraph">
                            With the need to self improve, I taught myself alone fullstack engineering, cloud technologies and data engineering. I am currently deepening my knowledge in these fields as a software engineer at ODINI.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Education;