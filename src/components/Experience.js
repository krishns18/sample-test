import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faAward } from '@fortawesome/free-solid-svg-icons';

class Experience extends Component {
  render() {
    return (
      <div className="container">
        <article className="resume-wrapper">
          <div className="resume-body p-5">
            <div className="row homepage-row justify-content-center">
              <h1>Work Experience</h1>
            </div>
            <div className="d-flex flex-column flex-md-row homepage-row2">
              <h3 className=" font-weight-bold mb-1">Infosys Limited</h3>
              <div className="resume-company-name font-weight-bold ml-auto"><h5>June 2008 - July 2019</h5></div>
            </div>
            <div className="row homepage-row2">
              <div className="col">
                <section className="resume-section experience-section mb-5">
                  <div className="resume-section-content">
                    <div className="resume-timeline position-relative">
                      <article className="resume-timeline-item position-relative pb-5">
                        <div className="resume-timeline-item-header mb-2">
                          <div className="d-flex flex-column flex-md-row">
                            <h3 className="resume-position-title font-weight-bold mb-1">Technology Lead</h3>
                            <div className="resume-company-name ml-auto">Miamisburg, Ohio/Toronto, Ontario</div>
                          </div>
                          <div className="resume-position-time">LexisNexis France/Austria (September 2016 - Jul 2019)</div>
                        </div>
                        <div className="resume-timeline-item-desc">
                          <p className="resume-timeline-item-desc-heading font-weight-bold">Achievements:</p>
                          <ul>
                            <li>Built tools and scripts to perform analytics and re-engineered backend/JS code to improve website performance by 20 percent.</li>
                            <li>Redesigned and optimized Antidot Finder Suite data pipeline to reduce content load time by 40 percent.</li>
                            <li>Designed and implemented the admin dashboard to track 90 percent of data transformation activities.</li>
                          </ul>
                          <p className="resume-timeline-item-desc-heading font-weight-bold">Technologies Used:</p>
                          <ul className="list-inline">
                            <li className="list-inline-item"><span className="badge badge-secondary badge-pill">Python</span></li>
                            <li className="list-inline-item"><span className="badge badge-secondary badge-pill">Antidot</span></li>
                            <li className="list-inline-item"><span className="badge badge-secondary badge-pill">HTML</span></li>
                            <li className="list-inline-item"><span className="badge badge-secondary badge-pill">CSS</span></li>
                            <li className="list-inline-item"><span className="badge badge-secondary badge-pill">JavaScript</span></li>
                            <li className="list-inline-item"><span className="badge badge-secondary badge-pill">React</span></li>
                            <li className="list-inline-item"><span className="badge badge-secondary badge-pill">Node.js</span></li>
                            <li className="list-inline-item"><span className="badge badge-secondary badge-pill">MySQL</span></li>
                            <li className="list-inline-item"><span className="badge badge-secondary badge-pill">SQLite</span></li>
                            <li className="list-inline-item"><span className="badge badge-secondary badge-pill">MongoDB</span></li>
                            <li className="list-inline-item"><span className="badge badge-secondary badge-pill">Shell Scripting</span></li>
                          </ul>
                        </div>

                      </article>

                      <article className="resume-timeline-item position-relative pb-5">

                        <div className="resume-timeline-item-header mb-2">
                          <div className="d-flex flex-column flex-md-row">
                            <h3 className="resume-position-title font-weight-bold mb-1">Technology Lead</h3>
                            <div className="resume-company-name ml-auto">Sacramento, California</div>
                          </div>
                          <div className="resume-position-time">LexisNexis StateNet (January 2013 - September 2016)</div>
                        </div>
                        <div className="resume-timeline-item-desc">
                          <p className="resume-timeline-item-desc-heading font-weight-bold">Achievements:</p>
                          <ul>
                            <li>Saved US$ 20000 on Tableau licenses by designing a scalable and extensible <a href="https://www.youtube.com/watch?v=Vm4772obUsk" target="_blank" rel="noopener noreferrer">Legislative Dashboard</a>, using D3.js, for customers to access visual snapshot to track measures</li>
                            <li>Automated batch monitoring and reduced manual monitoring effort by 95 percent.</li>
                            <li>Migrated data for 5000+ customers, successfully, from legacy to new platform.</li>
                            <li><FontAwesomeIcon icon={faTrophy} /> Received the Infosys: Bravo Award for Q3 (2013).</li>
                          </ul>
                          <p className="resume-timeline-item-desc-heading font-weight-bold">Technologies Used:</p>
                          <ul className="list-inline">
                            <li className="list-inline-item"><span className="badge badge-secondary badge-pill">Perl</span></li>
                            <li className="list-inline-item"><span className="badge badge-secondary badge-pill">Python</span></li>
                            <li className="list-inline-item"><span className="badge badge-secondary badge-pill">HTML</span></li>
                            <li className="list-inline-item"><span className="badge badge-secondary badge-pill">CSS</span></li>
                            <li className="list-inline-item"><span className="badge badge-secondary badge-pill">JavaScript</span></li>
                            <li className="list-inline-item"><span className="badge badge-secondary badge-pill">React</span></li>
                            <li className="list-inline-item"><span className="badge badge-secondary badge-pill">D3</span></li>
                            <li className="list-inline-item"><span className="badge badge-secondary badge-pill">MySQL</span></li>
                            <li className="list-inline-item"><span className="badge badge-secondary badge-pill">Shell Scripting</span></li>
                          </ul>
                        </div>

                      </article>

                      <article className="resume-timeline-item position-relative pb-5">

                        <div className="resume-timeline-item-header mb-2">
                          <div className="d-flex flex-column flex-md-row">
                            <h3 className="resume-position-title font-weight-bold mb-1">Technology Analyst</h3>
                            <div className="resume-company-name ml-auto">Pune,India</div>
                          </div>
                          <div className="resume-position-time">LexisNexis Caselaw StyleSheet Conversion (January 2012 - December 2012)</div>
                        </div>
                        <div className="resume-timeline-item-desc">
                          <p className="resume-timeline-item-desc-heading font-weight-bold">Achievements:</p>
                          <ul>
                            <li>Designed data-drop checker tool and reduced development rework by 20 percent.</li>
                            <li>Introduced a training program for newcomers to reduce onboarding time by 6 weeks.</li>
                            <li><FontAwesomeIcon icon={faTrophy} /> Won the Infosys: Most Valuable Player for Q3(2012).</li>
                            <li><FontAwesomeIcon icon={faAward} /> Obtained the LexisNexis: Above and Beyond for Q1 (2011-2012).</li>
                          </ul>
                          <p className="resume-timeline-item-desc-heading font-weight-bold">Technologies Used:</p>
                          <ul className="list-inline">
                            <li className="list-inline-item"><span className="badge badge-secondary badge-pill">XML</span></li>
                            <li className="list-inline-item"><span className="badge badge-secondary badge-pill">XSLT</span></li>
                            <li className="list-inline-item"><span className="badge badge-secondary badge-pill">Perl</span></li>
                            <li className="list-inline-item"><span className="badge badge-secondary badge-pill">HTML</span></li>
                            <li className="list-inline-item"><span className="badge badge-secondary badge-pill">CSS</span></li>
                            <li className="list-inline-item"><span className="badge badge-secondary badge-pill">JavaScript</span></li>
                            <li className="list-inline-item"><span className="badge badge-secondary badge-pill">Shell Scripting</span></li>
                          </ul>
                        </div>

                      </article>

                      <article className="resume-timeline-item position-relative">

                        <div className="resume-timeline-item-header mb-2">
                          <div className="d-flex flex-column flex-md-row">
                            <h3 className="resume-position-title font-weight-bold mb-1">Senior Software Engineer</h3>
                            <div className="resume-company-name ml-auto">Pune, India</div>
                          </div>

                          <div className="resume-position-time">LexisNexis News, Business and Topical (Jan 2010 - December 2011)</div>
                        </div>
                        <div className="resume-timeline-item-desc">
                          <p className="resume-timeline-item-desc-heading font-weight-bold">Achievements:</p>
                          <ul>
                            <li>Reduced ticket inflow by 98 percent through automation of attachment/image cleanup process.</li>
                            <li>Implemented auto-ticketing for tier-0 publications; achieved 60 percent better turnaround time for issue resolution</li>
                            <li><FontAwesomeIcon icon={faTrophy} /> Declared Infosys: Most Valuable Player for Q4 (2009-2010).</li>
                          </ul>
                          <p className="resume-timeline-item-desc-heading font-weight-bold">Technologies Used:</p>
                          <ul className="list-inline">
                            <li className="list-inline-item"><span className="badge badge-secondary badge-pill">Perl</span></li>
                            <li className="list-inline-item"><span className="badge badge-secondary badge-pill">XML</span></li>
                            <li className="list-inline-item"><span className="badge badge-secondary badge-pill">XSLT</span></li>
                            <li className="list-inline-item"><span className="badge badge-secondary badge-pill">HTML</span></li>
                            <li className="list-inline-item"><span className="badge badge-secondary badge-pill">Shell Scripting</span></li>
                          </ul>
                        </div>

                      </article>
                      <article className="resume-timeline-item position-relative">

                        <div className="resume-timeline-item-header mb-2">
                          <div className="d-flex flex-column flex-md-row">
                            <h3 className="resume-position-title font-weight-bold mb-1">Software Engineer</h3>
                            <div className="resume-company-name ml-auto">Pune, India</div>
                          </div>

                          <div className="resume-position-time">LexisNexis Global Data Fabrication (June 2008 - December 2009)</div>
                        </div>
                        <div className="resume-timeline-item-desc">
                          <p className="resume-timeline-item-desc-heading font-weight-bold">Achievements:</p>
                          <ul>
                            <li>Developed multiple end-to-end content collection and conversion pipelines for multiple data sources.</li>
                            <li><FontAwesomeIcon icon={faTrophy}/> Received Infosys: Spot Award for Q2 (2009-2010).</li>
                          </ul>
                          <p className="resume-timeline-item-desc-heading font-weight-bold">Technologies Used:</p>
                          <ul className="list-inline">
                            <li className="list-inline-item"><span className="badge badge-secondary badge-pill">XML</span></li>
                            <li className="list-inline-item"><span className="badge badge-secondary badge-pill">XSLT</span></li>
                            <li className="list-inline-item"><span className="badge badge-secondary badge-pill">Perl</span></li>
                            <li className="list-inline-item"><span className="badge badge-secondary badge-pill">Shell Scripting</span></li>
                          </ul>
                        </div>

                      </article>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }
}

export default Experience