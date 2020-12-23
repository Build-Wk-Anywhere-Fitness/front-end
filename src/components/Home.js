import React from 'react';

export default function Home(props){
    return(
        <div>
            <section className="main-section">
                <div className="graphic-card">
                    <img src="https://i.imgur.com/9T6AP05.png" alt="Fitness Class In A Park" />
                    <div>
                        <h1>Fitness Anywhere</h1>
                        <p>Sint irure laboris nulla do voluptate sint et ipsum eiusmod minim id esse incididunt ut. Ipsum Lorem amet nostrud reprehenderit nostrud laborum in cupidatat reprehenderit voluptate.</p>
                    </div>
                </div>
                <div className="graphic-card">
                    <img src="https://i.imgur.com/5GqmV7Z.png" alt="Classes Available Any Time" />
                    <div>
                        <h1>Fitness Anytime</h1>
                        <p>Adipisicing enim id cillum irure ad incididunt nulla eu dolor amet ex culpa. Nostrud ad enim reprehenderit aliqua deserunt dolor.</p>
                    </div>
                </div>
                <div className="graphic-card">
                    <img src="https://i.imgur.com/rO1naIJ.png" alt="Sign Up For Classes" />
                    <div>
                        <h1>Signing up for Classes Made Easy</h1>
                        <p>Duis ut eiusmod aliqua laborum ullamco aliquip. Labore labore adipisicing ea deserunt veniam voluptate cillum Lorem proident elit.</p>
                    </div>
                </div>
                <div className="btn-container">
                    <button className="signup-btn">SIGN UP</button>
                </div>
            </section>
        </div>
    )
}