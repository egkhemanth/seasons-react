import React from 'react'
const getSeason =(lat,month)=>{
if(month>2 && month<9){
    return lat > 0 ? 'summer':'winter' ;
} else{
    return lat > 0 ? 'winter':'summer';
}};
const SeasonsDisplay=(props)=>{
    const season=getSeason(props.lat,new Date().getMonth());
    const text=season==='winter' ?"it's hot pls on AC":"it's cool pls on Heater";
    const icon=season==='winter'?'Snowflake':'Sun';

return(<div>
    <i className={`${icon}icon`} ></i>
    <div>{text}</div>
    <i className={`${icon}icon`} />
    </div>
)
}



export default SeasonsDisplay;
