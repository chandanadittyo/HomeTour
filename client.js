// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Location,} from 'react-360-web';


function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const customLocation = new Location([-1,-5.5, -9]);

  r360.runtime.executor._worker.addEventListener(
    'message',
    (e) => onMessage(e, r360, customLocation)
  );
  r360.renderToLocation(
    r360.createRoot('HomeTour'),
    customLocation
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('test.png'));
}
function onMessage(e,r360,customLocation){
  if(e.data.type ==='newPosition'){
    customLocation.setWorldPosition(e.data.x,e.data.y,e.data.z);
  }
}

window.React360 = {init};
