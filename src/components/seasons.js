import './seasons.css'
import React from 'react'

const seasonConfig={
    summer:{
        text:"let's go to beach ",
        iconName:'sun'
    },
    winter:{
        text:"it's cold!",
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