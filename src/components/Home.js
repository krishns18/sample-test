import React, { Component } from 'react';
import profilepic from './../ShaileshKrishna.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt, faFacebookSquare, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'


class Home extends Component {
  render() {
    return(
      <div className="container">
        <div className="row homepage-row justify-content-center">
          <div className="col-3">
            <img src={profilepic} className="img-fluid rounded profile-pic mx-auto" alt="profile pic"></img>
          </div>
        </div>
        <div className="row homepage-row justify-content-center">
          <h1 className="display-name">Shailesh Krishna</h1>
        </div>
        <div className="row homepage-row justify-content-center">
          <div className="col-6 justify-content-center">
            <h4>Full Stack | Data Science | Analytics</h4>
          </div>
        </div>
        <div className="row homepage-row justify-content-center">
          <div className="col-6">
            <div className="row homepage-row justify-content-center">
              <div className="col-2">
              <p className="lead media-link"><a href="https://www.linkedin.com/in/shaileshkrishna18/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn}/></a></p>
              </div>
              <div className="col-2">
              <p className="lead media-link"><a href="https://github.com/krishns18" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithubAlt}/></a></p>
              </div>
              <div className="col-2">
              <p className="lead media-link"><a href="https://www.facebook.com/krishna.shailesh" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookSquare}/></a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="row homepage-row justify-content-center">
          <div className="col-8">
            <p className="lead"><FontAwesomeIcon icon={faMapMarkerAlt}/> Sunnyvale, CA, USA | <FontAwesomeIcon icon={faEnvelope}/> krishna.shailesh@outlook.com | <FontAwesomeIcon icon={faPhoneAlt}/> (661)-645-4297</p>
          </div>
        </div>
        
        
      </div>
    )
  }
}

export default Home