import logo from './logo.svg';
import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import image1 from './images/alexa.png';
import image2 from './images/cortana.png';
import image3 from './images/siri.png';

function App() {
return (
  <div>
    <div className="container">
      <section className="section">
        <div className="columns">
          <div className="column is-4">
            <ProfileCard
              handle="this is the first handle"
              title="first-title"
              image={image1}
            />
          </div>
          <div className="column is-4">
            <ProfileCard handle="second handle" title="second-title" image={image2} />
          </div>
          <div className="column is-4">
            <ProfileCard handle="third handle" title="third title" image={image3} />
          </div>
        </div>
      </section>
    </div>
  </div>
);
}

export default App;
