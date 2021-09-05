import React from 'react';

import Card from './card';

function SocialLinks() {
  return (
    <div className="social">
      <div className="social-links-container">
        <a href="https://hackodisha.devfolio.co/">
          {' '}
          <Card>
            <div className="box-img-container">
              <img
                className="box-img-apply-with-devfolio"
                src={require('./assets/devfolio1.webp').default}
                alt="Hackodisha Devfolio Registeration"
              ></img>
              <span className="box-content">Hackodisha Registration</span>
            </div>
          </Card>
        </a>

        <a href="https://hackodisha.xyz/">
          {' '}
          <Card>
            <div className="box-img-container">
              <img
                className="box-img"
                src={require('./assets/hackodisha-logo.png').default}
                alt="Hackodisha Website"
              ></img>
              <span className="box-content"> Hackodisha Website</span>
            </div>
          </Card>{' '}
        </a>

        <a href="https://discord.com/invite/VWrQxSg9nR">
          <Card>
            <div className="box-img-container">
              <img
                className="box-img"
                src={require('./assets/discord.png').default}
                alt="Hackodisha Discord"
              ></img>
              <span className="box-content"> Hackodisha Discord</span>{' '}
            </div>
          </Card>
        </a>

        <a href="https://dare2compete.com/creative-cultural-event/crypto-quest-hackodisha-national-institute-of-technology-rourkela-197790?refId=pkfVP2s&lb=pPAoUz8">
          <Card>
            <div className="box-img-container">
              <img
                className="box-img"
                src={require('./assets/Finance_club.png').default}
                alt="Finance Club"
              ></img>
              <span className="box-content">Crypto-quest</span>
            </div>
          </Card>{' '}
        </a>

        <a href="https://www.youtube.com/watch?v=biaOs164gl4">
          {' '}
          <Card>
            <div className="box-img-container">
              <img
                className="box-img"
                src={require('./assets/youtube.png').default}
                alt="Hackodisha Youtube Workshops"
              ></img>
              <span className="box-content">Join Workshop</span>
            </div>
          </Card>{' '}
        </a>

        <a href="https://dare2compete.com/p/auto-potency-hackodisha-national-institute-of-technology-nit-rourkela-194981?lb=jDyxl0d">
          <Card>
            <div className="box-img-container">
              <img
                className="box-img-cyborg"
                src={require('./assets/cyborg.png').default}
                alt="Cyborg"
              ></img>
              <span className="box-content"> Auto-Potency</span>
            </div>
          </Card>{' '}
        </a>

        <a href="https://guide.hackodisha.xyz/">
          {' '}
          <Card>
            <div className="box-img-container">
              <img
                className="box-img"
                src={require('./assets/hackodisha-logo.png').default}
                alt="Hackodisha Guide"
              ></img>
              <span className="box-content"> Hackodisha Guide</span>
            </div>
          </Card>{' '}
        </a>

        <a href="https://www.instagram.com/webwiz.nitr/">
          {' '}
          <Card>
            <div className="box-img-container">
              <img
                className="box-img"
                src={require('./assets/instagram.png').default}
                alt="Hackodisha Webwiz Instagram"
              ></img>
              <span className="box-content"> Instagram</span>
            </div>
          </Card>{' '}
        </a>

        <a href="https://leaderboard.hackodisha.xyz">
          <Card>
            <div className="box-img-container">
              <img
                className="box-img"
                src={require('./assets/hackodisha-logo.png').default}
                alt="Hackodisha Leaderboard"
              ></img>
              <span className="box-content"> Leaderboard</span>
            </div>
          </Card>{' '}
        </a>

        <a href="https://in.linkedin.com/company/hack-odisha">
          <Card>
            <div className="box-img-container">
              <img
                className="box-img"
                src={require('./assets/linkedin.png').default}
                alt="Hackodisha Linkedin"
              ></img>
              <span className="box-content">LinkedIn</span>
            </div>
          </Card>
        </a>

        <a href="https://www.facebook.com/hackodisha">
          {' '}
          <Card>
            <div className="box-img-container">
              <img
                className="box-img"
                src={require('./assets/facebook-logo.png').default}
                alt="Hackodisha Facebook"
              ></img>
              <span className="box-content">Facebook</span>
            </div>
          </Card>
        </a>

        <a href="https://twitter.com/hackodisha">
          <Card>
            <div className="box-img-container">
              <img
                className="box-img"
                src={require('./assets/twitter.png').default}
                alt="Hackodisha Twitter"
              ></img>
              <span className="box-content">Twitter</span>
            </div>
          </Card>{' '}
        </a>
      </div>
    </div>
  );
}

export default SocialLinks;
