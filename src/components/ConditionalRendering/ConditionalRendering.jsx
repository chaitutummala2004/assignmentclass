import React from 'react'

function ConditionalRendering({isLoggedIN}) {
//     if(isLoggedIN)
//   return (
//     <>
//       <h1>Welcome</h1>
//     </>
//   );
//   else
//   return(
//     <>
//     <h1>Welcome to Dashboard</h1>
//   </>
// )




// let render;    //using Environmental variable
// if(isLoggedIN){
//     render=<h1>Welcome</h1>
// }
// else{
//     render=<h1>hii</h1>
// }
// return <>{render}</>;


return(<>{isLoggedIN && <h1>Welcome</h1>}
{!isLoggedIN && <h1>HIIII</h1>}

</>
);
}


export default ConditionalRendering
