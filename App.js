import React, { useState } from "react";

function App() {
  const products = [
    { id:1,name:"Laptop",price:"₹65,000",shortDesc:"Powerful student laptop",fullDesc:"Intel i5, 8GB RAM, 512GB SSD."},
    { id:2,name:"Headphones",price:"₹2,499",shortDesc:"Wireless noise-cancelling",fullDesc:"Bluetooth headphones, long battery life."},
    { id:3,name:"Smartwatch",price:"₹3,999",shortDesc:"Fitness & notifications",fullDesc:"Track steps, heart rate, get notifications."}
  ];
  const [selectedProduct,setSelectedProduct]=useState(null);
  return(
    <div style={{textAlign:"center",fontFamily:"Segoe UI"}}>
      <h1>KL University Store 🏫</h1>
      <div style={{display:"flex",justifyContent:"center",gap:"20px"}}>
        {products.map(p=>(
          <div key={p.id} style={{border:"1px solid #ccc",padding:"15px",borderRadius:"8px",cursor:"pointer"}} onClick={()=>setSelectedProduct(p)}>
            <h3>{p.name}</h3>
            <p>{p.price}</p>
            <p>{p.shortDesc}</p>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <div style={{background:"white",padding:"25px",borderRadius:"12px",textAlign:"center",position:"relative"}}>
            <button onClick={()=>setSelectedProduct(null)} style={{position:"absolute",top:"10px",right:"10px",background:"red",color:"white",border:"none",borderRadius:"50%",width:"30px",height:"30px",cursor:"pointer"}}>×</button>
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.fullDesc}</p>
            <p style={{fontWeight:"bold"}}>{selectedProduct.price}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
