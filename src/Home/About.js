import './About.css';

function About() {
    return (
        <div>
            <div className="about-me-header">
                Hi, I'M
            </div>
            <div className="about-me-name">
                Whitney Elliott
            </div>
            <div />
            <div className='body-container'>
            <div className="about-me-body-column1">
                <div className="about-body-title">
                    A Little about me
                </div>
                <p className='about-me-body-text'>
                    Hi there! I'm Whitney Elliott, a passionate Software Engineer hailing from the beautiful Pacific Northwest. With a strong focus on Typescript, React, ASP.NET Core, and ASP.NET MVC, I thrive in the ever-evolving world of software development.
                </p>
                <p className='about-me-body-text'>
                The bond I share with my Labrador Retrievers goes beyond companionship. We embark on countless adventures together, exploring the scenic trails of the Pacific Northwest, enjoying the outdoors, and making memories that will last a lifetime. Their zest for life and infectious enthusiasm remind me to live in the present and appreciate the simple pleasures that nature offers.
                </p>
                <p className='about-me-body-text'>
                As I continue to navigate my professional journey as a Software Engineer, my Labrador Retrievers serve as a constant reminder of the importance of balance and finding joy in the little things. They have taught me the value of patience, empathy, and the power of a wagging tail to brighten even the darkest of days.
                </p>
            </div>
            <div className="about-me-body-column2">
                <img className="image1" src={ require('./bandw.png') } />
                <img className="image2" src={ require('./canbyhouse.jpg')} />
            </div>
            </div>

        </div>
    );
}

export default About;