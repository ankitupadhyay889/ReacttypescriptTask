import React from 'react';
import "./App.css";
import {Route , Routes} from "react-router-dom";
import Home from './Query/Home';
import Link from './Query/Link';
import Normalpage from './Query/Normalpage';
import Rqpage from './Query/Rqpage';
import {ReactQueryDevtools} from "react-query/devtools";
import {QueryClientProvider , QueryClient} from "react-query";

const quClient = new QueryClient()
const App = () => {
  return (
    <div className="App">
      <QueryClientProvider client={quClient}>
        <Link />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/normal" element={<Normalpage />} />
          <Route path='/rqpage' element={<Rqpage />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
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