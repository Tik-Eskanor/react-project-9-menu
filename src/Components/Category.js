import React from "react"

export default function Category({name,filter})
{
    return(
        <button className="btn" onClick={()=>filter(name)}>{name}</button>
    )
}