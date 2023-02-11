import logo from './logo.svg';
import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';

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
            />
          </div>
          <div className="column is-4">
            <ProfileCard handle="second handle" title="second-title" />
          </div>
          <div className="column is-4">
            <ProfileCard handle="third handle" title="third title" />
          </div>
        </div>
      </section>
    </div>
  </div>
);
}

export default App;
