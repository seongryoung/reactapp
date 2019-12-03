import React from 'react';

class App extends React.Component{
  state = {
    isloading : true
  }
 
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({isloading : false})
    }, 3000);
  }

  render(){
    const {isloading} = this.state;
    return(
      <div>{isloading ? "is loding ..." : "i am ready"}</div>
    )
  }
}
 
export default App;