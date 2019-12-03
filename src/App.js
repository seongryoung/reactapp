import React from 'react';
import prop from 'prop-types'

class App extends React.Component{
  state = {
    count : 0
  }
 
  add = () => {
    this.setState(current =>({count : current.count + 1}))
  }
  minus = () => {
    this.setState(current => ({count : current.count - 1}))
  }

  componentDidUpdate = () => {
    console.log("Compnent did updated")
  }

  componentDidMount = () => {
    console.log("component did Mounted")
  }

  componentWillUnmount = () => {
    console.log("Component did Unmounted")
  }

  render(){
    console.log("i am renderling");
    return(
      <div>
        <h1>the number is : {this.state.count}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    )
  }
}
 
export default App;