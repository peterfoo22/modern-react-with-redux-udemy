import logo from './logo.svg';
import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import alexaImage from './images/alexa.png';
import cortanaImage from './images/cortana.png';
import siriImage from './images/siri.png';

function App() {
return (
  <div>
    <section className="hero is-primary">
      <div className="hero-body">
        <p className="title">
          <div>Personal Digital Assistant</div>
        </p>
      </div>
    </section>
    <div className="container">
      <section className="section">
        <div className="columns">
          <div className="column is-4">
            <ProfileCard
              handle="this is the first handle"
              title="first-title"
              image={alexaImage}
              description="Alexa is the first description"
            />
          </div>
          <div className="column is-4">
            <ProfileCard
              handle="second handle"
              title="second-title"
              image={cortanaImage}
              description="Cortana is the second description"
            />
          </div>
          <div className="column is-4">
            <ProfileCard
              handle="third handle"
              title="third title"
              image={siriImage}
              description="Siri is the third description"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
);
}

export default App;
