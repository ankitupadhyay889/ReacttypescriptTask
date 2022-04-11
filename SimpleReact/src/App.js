import React from 'react';
import {Route , Routes} from "react-router-dom";
import Home from './Query/Home';
import Link from './Query/Link';
import Normalpage from './Query/Normalpage';
import Rqpage from './Query/Rqpage';

const App = () => {
  return (
    <div>
        <Link />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/normal" element={<Normalpage />} />
          <Route path='/rqpage' element={<Rqpage />} />
        </Routes>
    </div>
  );
};

export default App;
























// import React from 'react';
// import "./App.css";
// import Firecall from './Firebanotific/Firecall';
// // import Social from './Social';

// const App = () => {
//   return (
//     <div className='App'>
//         {/* <Social /> */}
//         <Firecall />
//     </div>
//   );
// };

// export default App;