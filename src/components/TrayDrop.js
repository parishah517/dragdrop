import {useDrop} from 'react-dnd'
import React, {useState} from 'react'
import Cookie from './CookieDrag'

const TrayDrop = () => 
{
   
    const [tray, setTray] = useState([]);
    const [outsideTray, setOutsideTray] = useState([{id:1}, {id:2},{ id:3 }]);

    const handleDrop =(id) => {
        setTray([...tray, outsideTray.filter((cookie) => cookie.id === id)]);
        console.log(outsideTray)
        setOutsideTray(outsideTray.filter((cookie) => cookie.id !== id));
       
    }

    const[{isOver}, drop] = useDrop(()=> ({
         accept: "Cookie",
         drop:(item) => {
          if(!tray.find(c=> c.id === item.id)){
            handleDrop(item.id)
          }},
         collect:(monitor) => ({
            isOver: !!monitor.isOver(),
         })
     }),[tray], [outsideTray],
     )
     

    return (
        
        <div className = 'container'  >
            
            <div  className = "outside">
                <span>Drag and Drop the cookies into the grey box!</span>
                {outsideTray.length >0 ? 
                    outsideTray.map((cookie) => {
                        return(
                            <Cookie id = {cookie.id} isDropped = {isOver}  tray= {tray} outsideTray = {outsideTray} ></Cookie>
                        );
                    })
                    :null
                }
            </div>    

           <div ref = {drop} className = "tray">
                {tray.length > 0? 
                     tray.map((cookie) => {
                        return(
                            <Cookie id = {cookie.id} isDropped = {isOver} tray= {tray} outsideTray = {outsideTray}></Cookie>
                        );
                    })
                    :
                    null
                }
           </div>
           
        </div>
       
    );
}

export default TrayDrop;