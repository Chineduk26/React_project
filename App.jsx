import React from 'react';
import "./index.css";
import Nature from './Component/Nature';
import NatureData from './Component/NatureData';

//const NatureInfo=(value)=>{
  //  return(
   //     <>
     //   <Nature
       // title={value.title}
        //img={value.img}
        //descr={value.descr}
        //btn={value.btn}
      //  />
        //</>
   // )
//}
const App=()=>{
    return(
        <>
        <h1>ABOUT NATURE </h1>
        <div className="container"> 
        {NatureData.map((value)=>{
            return(
            <>
               <Nature
        title={value.title}
        img={value.img}
        descr={value.descr}
        btn={value.btn}
        />
            </>
            )
        })}
         </div>
        </>        

    )
}





export default App;