import React, { Component } from 'react';
import './App.css';

class VictimForm extends Component {
  

  constructor() {
    super();

    this.state = {

      itemsArr: [],

      userLocation: { lat: 0, lng: 0 }, 
      loading: true,
      curTime: null,
      itemVal: '',

    }
    this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  componentDidMount(props) {
    setInterval( () => {
      this.setState({
        curTime : new Date().toLocaleString()
      })
    },1000)

    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        this.setState({
          userLocation: { lat: latitude, lng: longitude },
          loading: false
        });
      },
      () => {
        this.setState({ loading: false });
      }
    );
  }

  renderEnteredItems() {
    const items = this.state.itemsArr;
    return items.map((item) => {
      return (
          <li>{item}</li>
      )
    })
  }

  keyPress(e){
    if(e.keyCode === 13){
       console.log('entered item', this.state.itemVal);
       const name = this.state.itemVal;
       var joined = this.state.itemsArr.concat(name);
       this.setState({ itemsArr: joined });
    }
 }

 handleChange(e) {
  this.setState({ itemVal: e.target.value });
  console.log(this.state.itemVal);
}


  onItemChange(e) {
    const name = e.target.name;
    var joined = this.state.itemsArr.concat(name);
    this.setState({
      itemsArr: joined
    })
  }
  
  
 onFormSubmit = (event) => {
   event.preventDefault();
   this.setState({
     itemVal: ''
  })
   
   console.log(this.state.itemsArr);
   console.log(this.state.userLocation);
   console.log(this.state.curTime);

  }
  

  render() {
    
    return (
      <div className="App" style={{width:"100%"}}>
        <br/>

          <form onSubmit={this.onFormSubmit.bind(this)}>
            <h3 style={{color:"white"}}>What items do you need?</h3>

            <input type="text" value={this.state.itemVal} onKeyDown={this.keyPress} onChange={this.handleChange}/>
            <ul>
            {this.renderEnteredItems()}
            </ul>
            <br/>
            <input type="submit" value="Request" class="submit-button"/>
          </form>
          <br/>
      </div>
    );

  }
}

export default VictimForm;