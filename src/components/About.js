import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <>
            <section className="about">
                <div className="about__intro">
                    Hi, I’m Annie. <br />
                    I’m a <span className="highlight">full-stack developer</span> and <span className="highlight">photographer</span> <br />
                    based in Stockholm, Sweden. 
                </div>
                <div className="about__details">
                   <p>I am not a computer science major, but I work hard to be more than that. Although my previous career has not been programming related, I always strive to provide the <span className="highlight">best service</span> for my clients. I like to help them <span className="highlight">solve problems</span>. </p>

                   <p>I love coding. It enhances my creativity, so I can turn things on my mind into reality. Now equipped with photography, graphic design and coding skills, I am ready to <span className="highlight">make a difference</span>. </p>
                   
                   <p>Check my <Link to="/projects"><span className="highlight">PROJECTS</span></Link> and see tools I use below. You can also download my <span className="highlight"><a href="imgs/Annie-Taylor-CHEN-resume.pdf" target="_blank" rel="noopener noreferrer">RESUME</a></span> or check me on <span className="highlight"><a href="https://www.linkedin.com/in/annietaylorchen/" target="_blank" rel="noopener noreferrer" >LinkedIn.</a></span></p> 

                   <p>Besides those, I am also a <span className="highlight">vegan cook</span> and run a lifestyle blog <span className="highlight"><a href="https://petiteandminimal.com" target="_blank" rel="noopener noreferrer">Petite &amp; Minimal</a></span>. </p>
                
                   <p>Principles I believe in:</p>
                </div>
                <div className="about__principle principle1">
                    <h3 className="highlight">Clean Code</h3>
                    <p>Clean code requires thinking and planning, and it makes your future work less stressful</p>
                </div>
                <div className="about__principle principle2">
                    <h3 className="highlight">Good UI/UX</h3>
                    <p>In a fast-pacing world, we don't just need software, but good-looking and easy-to-use software </p>
                </div>
                <div className="about__principle principle3">
                    <h3 className="highlight">Excellent Performance</h3>
                    <p>You lose when you’re slow, optimization is a must-have </p>
                </div>
                <div className="about__principle principle4">
                    <h3 className="highlight">Responsive</h3>
                    <p>Works and looks great anywhere from phone to laptop</p>
                </div>
            </section>

            <section className="skills">
                <h3>Programming</h3>
                <div className="skills__option">
                    <div className="skills__item">
                        <img className="skills__item__img" src="imgs/html5.svg" alt="html5 logo"/>
                        <p>Html 5</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__item__img" src="imgs/css3.svg" alt="css3 logo"/>
                        <p>Css 3</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__item__img" src="imgs/javascript.svg" alt="javacript logo" />
                        <p>Javascript</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__item__img" src="imgs/sass.svg" alt="sass logo" />
                        <p>Sass</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__item__img" src="imgs/react.svg" alt="react logo" />
                        <p>React</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__item__img" src="imgs/redux.svg" alt="redux logo" />
                        <p>Redux</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__item__img" src="imgs/jest.svg" alt="jest logo" />
                        <p>Jest</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__item__img" src="imgs/webpack.svg" alt="webpack logo" />
                        <p>Webpack</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__item__img" src="imgs/wordpress.svg" alt="wordpress logo" />
                        <p>Wordpress</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__item__img" src="imgs/woocommerce.svg" alt="woocommerce logo" />
                        <p>WooCommerce</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__item__img" src="imgs/nodejs.svg" alt="nodejs logo" />
                        <p>Node.js</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__item__img" src="imgs/mongodb.svg" alt="mongodb logo" />
                        <p>MongoDB</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__item__img" src="imgs/postgresql.svg" alt="postgresql logo" />
                        <p>PostgreSQL</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__item__img" src="imgs/firebase.svg" alt="firebase logo" />
                        <p>Firebase</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__item__img" src="imgs/graphql.svg" alt="graphql logo" />
                        <p>GraphQL</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__item__img" src="imgs/prisma.svg" alt="prisma logo" />
                        <p>Prisma</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__item__img" src="imgs/apollo.svg" alt="apollo logo" />
                        <p>Apollo</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__item__img" src="imgs/git.svg" alt="git logo" />
                        <p>Git</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__item__img" src="imgs/heroku.svg" alt="heroku logo" />
                        <p>Heroku</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__item__img" src="imgs/netlify.svg" alt="netlify logo" />
                        <p>Netlify</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__item__img" src="imgs/linux-mint.svg" alt="linux-mint logo" />
                        <p>Linux-Mint</p>
                    </div>
                </div>

                <h3>UI, UX, Prototype</h3>
                <div className="skills__option">
                    <div className="skills__item">
                        <img className="skills__item__img" src="imgs/gimp.svg" alt="gimp logo" />
                        <p>Gimp - open-source alternative to Photoshop</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__item__img" src="imgs/inkscape.svg" alt="inkscape logo" />
                        <p>Inkscape - open-source alternative to Illustrator </p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__item__img" src="imgs/figma.svg" alt="figma logo" />
                        <p>Figma</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__item__img" src="imgs/canva.svg" alt="canva logo" />
                        <p>Canva</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__item__img" src="imgs/pixlr.svg" alt="pixlr logo" />
                        <p>Pixlr</p>
                    </div>
                </div>

                <h3>Project Management + Digital Marketing</h3>
                <div className="skills__option">
                    <div className="skills__item">
                        <img className="skills__item__img" src="imgs/jira.svg" alt="jira logo" />
                        <p>JIRA</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__item__img" src="imgs/trello.svg" alt="trello logo" />
                        <p>Trello</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__item__img" src="imgs/zenkit.png" alt="zenkit logo" />
                        <p>Zenkit</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__item__img" src="imgs/slack.svg" alt="slack logo" />
                        <p>Slack</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__item__img" src="imgs/seo.png" alt="seo logo" />
                        <p>SEO</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__item__img" src="imgs/social.png" alt="social logo" />
                        <p>Marketing strategy </p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__item__img" src="imgs/google-analytics.svg" alt="google-analytics logo" />
                        <p>Google Analytics</p>
                    </div>
                </div>

                <h3>Interested in learning more</h3>
                <div className="skills__option">
                    <div className="skills__item">
                        <img className="skills__item__img" src="imgs/python.svg" alt="python logo" />
                        <p>Python</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__item__img" src="imgs/flutter.svg" alt="flutter logo" />
                        <p>Flutter</p>
                    </div>
                    <div className="skills__item">
                        <img className="skills__item__img" src="imgs/AI.png" alt="AI logo" />
                        <p>AI</p>
                    </div>
                </div>
            </section>
                
        </>
    )
}
