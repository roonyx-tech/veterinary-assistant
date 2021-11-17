// import * as firebase from 'firebase';
// import 'firebase/auth';
import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const onStart = () => {
    // const provider = new firebase.auth.GoogleAuthProvider();
    // firebase.auth().signInWithPopup(provider)
    // console.log('starting digital bylaw test now')
  };
  return (
    <div /*className="tile"*/>
      <h1>Before starting</h1>
      <p>Check history, physical/neurological examinations</p>
      <div className="tile__actions">
        {/*<Link to="/tree/edit">*/}
        {/*    <button>*/}
        {/*        EDIT TREE*/}
        {/*</button>*/}
        {/*</Link>*/}
        {/*<Link to="/tree">*/}
        {/*    <button>*/}
        {/*        VIEW TREE*/}
        {/*</button>*/}
        {/*</Link>*/}
        <Link to="/veterinary-assistant/n/home-page-positive-findings">
          <button onClick={onStart}>
            positive findings
          </button>
        </Link>
        <Link to="/veterinary-assistant/n/evaluate-hemogram-chemistries-liver">
          <button onClick={onStart} style={{marginTop: '10px'}}>
            negative findings
          </button>
        </Link>
      </div>
    </div>)
}
