import {useDrag} from 'react-dnd'
import React, {useState} from 'react'
import Cookie from '/Users/parishah/Desktop/dragdrop/src/images/cookie.jpg'

const CookieDrag = ({id,isDropped, tray, outsideTray}) => {
    const[{opacity}, drag] = useDrag(()=> ({
        type: "Cookie",
        item: { id: id},
        collect:(monitor) => ({
            opacity: monitor.isDragging()? 0.5 : 1
        })
    }),
    [outsideTray], [tray]
    )
    return (
        
            
            <img  ref = {drag}className="cookie" src={Cookie} alt={"Cookie"}/> 
        
       
             
    );
}
export default CookieDrag;