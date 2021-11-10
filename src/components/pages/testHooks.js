 import React,{useState,useEffect, useRef} from 'react';

function MouseTrack(){
  
    const [name,setName]=useState('');
   
    const prevName=useRef('');
   // const rendercount=useRef(1);
    useEffect(() => {
        console.log("useeffect");
        prevName.current=name;
      // rendercount.current=rendercount.current+1;
    },[name])
    console.log("re-render");
    return(
        
        <div>
            <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            <h2>Prevname: {prevName.current}</h2>
            {
                // <h2>Render count is: {rendercount.current}</h2>
                // <button onClick={()=>setCount(count+1)}>Increase count value</button>
            }
        </div>
    )

}

export default MouseTrack;

//render props
// function Cat({mouse}){
//   return(
//       <img src="https://myrzik.com/wp-content/uploads/2013/05/Cats025.jpg" 
//       style={{position:"absolute",height:"200px",left:mouse.x,top:mouse.y}}/>
//   )
// }
// function Dog({mouse}){
//     return(
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO5U_ey34JfjcpO-PCuBxU8bQ74c3t4j4Fnw&usqp=CAU"
//         style={{position:"absolute", height:"200px", left:mouse.x+10,top:mouse.y+10}} />
//     )
// }
// function Mouse(props){
//     const[mouse,setMouseCordinat]=useState({x:0,y:0});

//     const handleMouseMove=(e)=>{
//         setMouseCordinat({x:e.clientX, y:e.clientY});
//     }

//     return(
//         <div style={{height:"100vh"}} onMouseMove={handleMouseMove}>        
//           <h3>Mausun cari pozisiyas {`x is ${mouse.x}, y is ${mouse.y}`}</h3>
//           {props.render(mouse)}
//         </div>
//     )
// }

// function MouseTrack(){
//     return(
//         <> 
//           <h1>Mausu terpedin</h1>
//           <Mouse render={mouse=><Cat mouse={mouse}/>}/>
//           <Mouse render={mouse=><Dog mouse={mouse}/>}/>
//         </>
//     )
// }

// export default MouseTrack;