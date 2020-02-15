import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class About extends Component {
  render() {
    return (
      <div className="container">
        <article className="resume-wrapper">
          <div className="resume-body p-5">
            <div className="row homepage-row justify-content-center">
              <h1>About Me</h1>
            </div>
            <div className="row homepage-row justify-content-center">
              <div className="col">
                <p className="lead">Hello, I am a full-stack software engineer with 11 years of experience in analytics, data analysis, building scalable data-intensive web applications, and content transformation pipelines. </p>
                <p className="lead">I am interested in analytics, web performance, best practices, content-centered design, user experience, and usability; love spending time on fixing little details, optimizing web apps, and tackling problems across the full-stack. I am an avid reader, have a constant desire to learn, and follow new trends.</p>
                <p className="lead">Currently pursuing a Master of Science in Business Analytics from San Francisco State University and looking for challenging opportunities where I can create innovative products or solutions to solve complex business problems and increase profitability.</p>
                <p className="lead">In my free time, I work on personal projects, play tennis, and explore different cuisines.</p>
              </div>
            </div>
            <div className="row homepage-row justify-content-center">
              <h5>Recommendations</h5>
            </div>
            <div className="row homepage-row justify-content-center">
              <div className="col">
                <Carousel controls={true}>
                  <Carousel.Item>
                    <div className="card border-secondary mb-3">
                      <div className="card-body">
                        <p className="lead testimonial-lead">I have had the privilege to work with Shailesh for the LexisNexis NBT project. He is amongst very few who are constantly striving to learn more, improve and deliver. His persistence and vigor to resolve problems stands him out in the crowd.</p>
                        <p className="lead testimonial-lead">Shailesh has a good technical mind and he was tremendously efficient in knocking out hundreds of incidents in a week helping largely in keeping the mission critical systems up and running. He was pro-active and persistent in identifying the root causes and in implementing the automated fixes thereby improving the time to market. He consistently secured the top spot in resolving the maximum incidents in the team of 50+ members.</p>
                        <p className="lead testimonial-lead">Shailesh was instrumental in bringing the team together during the after office parties and I am sure he will be a manager’s delight wherever he works. As his manager, Shailesh earn’s my highest recommendation.</p>
                        <footer className="blockquote-footer">Abhishek Goel, Project Manager at Infosys Limited</footer>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="card border-secondary mb-3">
                      <div className="card-body">
                        <p className="lead testimonial-lead">I hold Shailesh in the highest esteem with regards his intellect, work ethic and steadfasteness. He is a strong self-starter and will guide a project from concept to delivery. His design practices are solid. Shailesh has a great curiosity about many things and will not tire of discovering the full extent of a project. He is not afraid to ask questions and never needs re-instruction.</p>
                        <p className="lead testimonial-lead">He is a calm, steady worker, unflappable under pressure and consistently delivering as promised. Shailesh consistently went beyond the call to cover a number of unpalatable but critical job assignments. He worked well with our team and in organizing colleagues overseas for our projects.</p>
                        <p className="lead testimonial-lead">He has a strong technical mind and our only regret is that we were not able to have him as our colleague for longer.</p>
                        <footer className="blockquote-footer">William Pollock, Technical Lead at LexisNexis StateNet</footer>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="card border-secondary mb-3">
                      <div className="card-body">
                        <p className="lead testimonial-lead">As the leading services support professional for LexisNexis GDF portfolio, Shailesh was the “north star” for the L2 and L3 tickets. His contribution can be summed up as the convergence of "value driven" automation ideas and "ticket reduction orientated " long term fixes across the entire technological landscape, thereby eliciting multiple individual customer appreciations and improved overall customer satisfaction ratings.As his reporting manager for the portfolio, I would highly recommend Shailesh for his tenacity, voracity and diversity of professional and technical traits.</p>
                        <footer className="blockquote-footer">Vivek Raaj, Enterprise Architect at Infosys Limited</footer>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="card border-secondary mb-3">
                      <div className="card-body">
                        <p className="lead testimonial-lead">Shailesh was a great contributor to the organization with exceptional skills in getting things done on time! I would highly recommend Shailesh if you are looking for a good listener, deadline focused, team player. Shailesh consistently met the needs for a product that required tight timelines and constant changes.</p>
                        <footer className="blockquote-footer">Laurie Stinson, CEO at LexisNexis StateNet</footer>
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }
}

export default About