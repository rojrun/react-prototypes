import React from 'react';
import Stopwatch from './stopwatch';

function App(){
   return (
       <div className='container'>
            <h1 className='text-center'>Stopwatch</h1>
            <Stopwatch/>
       </div>
   )
}

export default App;

// export default (props) => {
//     return (
//         <div className="container">
//             <h1 className="text-center">Stopwatch</h1>
//             <Stopwatch/>
//         </div>
//     )
// }