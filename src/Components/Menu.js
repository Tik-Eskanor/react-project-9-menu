import React from "react"

export default function Menu({props})
{
    return(
         <div className="menu-item">
           <div className="img"><img src={props.img}/></div>
           <div className="details">
              <div className="head">
                 <h4>{props.title}</h4>
                 <h5>{props.price}</h5>
              </div>
              <p>{props.desc}</p>
           </div>
         </div>
    )
}