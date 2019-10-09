import React from 'react'
import Seasons from './components/seasons'
class App extends React.Component{
state={lat:null,err:null}
componentDidMount(){
window.navigator.geolocation.getCurrentPosition(
    (position)=>this.setState({lat:position.coords.latitude}),
    (err)=>this.setState({err:err.message})
    )
}
render() {
   if(!this.state.err && this.state.lat){
     return <Seasons Location={this.state.lat} />;
     
   }
   if(this.state.err && !this.state.lat){
     return <div>err:{this.state.err}</div>;
    
   }
   return <div className='ui big text loder'>Looding!!</div>;
  }
}
export default App;