import React, { Component } from 'react';
import './App.css';

class VictimForm extends Component {
  

  constructor() {
    super();

    this.state = {

      'items': {
        'water': false,
        'food': false,
        'first-aid': false,
        'batteries': false,
      },

      'itemsArr': [],

      userLocation: { lat: 0, lng: 0 }, 
      loading: true,
      curTime: null,

    }
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

  renderItems() {
    const items = ['water', 'food', 'first-aid', 'batteries'];
    return items.map((item, i) => {
      return (
        <label key={i}>
          {item}
          <input
          type="checkbox"
          name={item}
          onChange={this.onItemChange.bind(this)}
          value={this.state.items[item]}
          />
        </label>
      )
    })
  }


  onItemChange(e) {
    const val = e.target.checked;
    const name = e.target.name;
    let updatedItems = Object.assign({}, this.state.items, {[name]: val})
    var joined = this.state.itemsArr.concat(name);
    this.setState({
      'items': updatedItems,
      'itemsArr': joined
    })
  }
  
  
 onFormSubmit = (event) => {
   event.preventDefault();
   
   console.log(this.state.items)
   console.log(this.state.itemsArr);
   console.log(this.state.userLocation);
   console.log(this.state.curTime);

  }
  

  render() {
    
    return (
      <div className="App">

          <form onSubmit={this.onFormSubmit.bind(this)}>
            {this.renderItems()}
            <input type="submit" value="Submit!"/>
          </form>
      </div>
    );

  }
}

export default VictimForm;