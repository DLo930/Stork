import React, { Component } from 'react';
import './App.css';

import { publishPost } from './socket';

class VictimForm extends Component {


  constructor() {
    super();

    this.state = {

      itemsArr: [],

      location: { lat: 0, lng: 0 },
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
          location: { lat: latitude, lng: longitude },
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
      const name = this.state.itemVal;
      var joined = this.state.itemsArr.concat(name);
      this.setState({
        itemVal: '',
        itemsArr: joined
      });
    }
  }

  handleChange(e) {
    this.setState({ itemVal: e.target.value });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.setState({
      itemVal: ''
    });
    publishPost({
      items: this.state.itemsArr,
      location: [this.state.location.lat, this.state.location.lng],
      time: this.state.curTime
    });
  }


  render() {

    return (
      <div class="w-container">
        <div class="div-block-2">
          <div class="w-form">
            <h3 style={{color:"black"}}>What items do you need?</h3>
            <input type="text" value={this.state.itemVal} onKeyDown={this.keyPress} onChange={this.handleChange}/>
            <ul>
            {this.renderEnteredItems()}
            </ul>
            <br/>
            <input placeholder="Item" type="submit" value="Request" class="submit-button" onClick={this.onFormSubmit}/>
          </div>
        </div>
      </div>
      /* <div className="App" style={{width:"100%"}}>
        <br/>
        <form>
          <h3 style={{color:"black"}}>What items do you need?</h3>

          <input type="text" value={this.state.itemVal} onKeyDown={this.keyPress} onChange={this.handleChange}/>
          <ul>
          {this.renderEnteredItems()}
          </ul>
          <br/>
          <input placeholder="Item" type="submit" value="Request" class="submit-button" onClick={this.onFormSubmit}/>
          </form>
          <br/>
          <br/>
      </div> */
    );

  }
}

export default VictimForm;
