import "./App.css";
import Subscription from "./Subscription";

function App() {
  return (
    <div className="container">
      <div className="head">
        <h1>Join our community</h1>
        <span className="head__subtitle">30-day, hassle-free money back guarantee</span>
        <p>
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </div>
      {/* <section> */}
        <Subscription/>
        <div className="two">
          <h2>Why Us</h2>
          <p>
            Tutorials by industry experts Peer & expert code review Coding
            exercises Access to our GitHub repos Community forum Flashcard decks
            New videos every week
          </p>
        </div>
      {/* </section> */}
    </div>
  );
}

export default App;
