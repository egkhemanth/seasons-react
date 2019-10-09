import './seasons.css'
import React from 'react'

const seasonConfig={
    summer:{
        text:"hoo it's summer ,on ac plz ",
        iconName:'sun'
    },
    winter:{
        text:"hoo it's winter, on heater plz ",
        iconName:'snowflake'
    }
};
const getSeasons= (lat,month)=>{
    if(month>2 && month<9){
        return lat>0 ? 'winter' : 'summer'
    }else{
        return lat>0 ? 'summer' : 'winter'
    }
}

const Seasons=(props)=>{
    const seasons= getSeasons(props.lat,new Date().getMonth())
   const {text,iconName}=seasonConfig[seasons]
  
    return (<div>
        <i className={`${iconName}icon`}/>
        <div className='seasons-display' ><h1>{text}</h1></div>
        <i className={`${iconName}icon`}></i>
        </div>)
    }
export default  Seasons;
