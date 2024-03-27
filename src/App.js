import React from "react";
import UseEffectPost from './UseEffectPost';
import UseEffectComment from './UseEffectComment';
import UseEffectAlbum from './UseEffectAlbum';
import UseEffectPhotos from './UseEffectPhotos';
import UseEffecttodos from './UseEffecttodos';
import UseEffectUsers from './UseEffectUsers';
import UseEffectUserstable from './UseEffectUserstable';
import UseEffectAxios from './UseEffectAxios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App(){
  let menus = [
    'UseEffectAxios' ,'UseEffectUserstable', 'UseEffecttodos', 'UseEffectAlbum', 'UseEffectPhotos', UseEffectPost
  ]
   return(
    <div className="container-fuild">
     <div className="navbar">
      <ul>
        <li>{menus[0]}</li>
        <li>{menus[1]}</li>
        <li>{menus[2]}</li>
        <li>{menus[3]}</li>
        <li>{menus[4]}</li>
        <li>{menus[5]}</li>
      </ul>
     </div>
    <div>
      <h1>API Integration</h1>
      <div>
      {/* <h4>useEffect Users Api integration (post method)</h4> */}
        <UseEffectAxios />
      </div>

      <div>
      <h4>useEffect Users Table Api integration (post method)</h4>
      <UseEffectUserstable/>
      </div>

      <div>
      <h4>useEffect Users Api integration (post method)</h4>
      <UseEffectUsers />
      </div>

      <div>
      <h4>useEffect todos Api integration (post method)</h4>
      <UseEffecttodos />
      </div>
      <div>
      <h4>useEffect photos Api integration (post method)</h4>
      <UseEffectPhotos />
      </div>
      <div>
      <h4>useEffect Album Api integration (post method)</h4>
      <UseEffectAlbum />
      </div>
      <div>
    <h4>useEffect comment Api integration (post method)</h4>
    </div>
      <UseEffectComment/>
    <h4>useEffect using Api integration (post method)</h4>
    <UseEffectPost />

    </div>
    </div>
  )
}
export default App;