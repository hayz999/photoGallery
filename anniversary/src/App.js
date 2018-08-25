import React, { Component } from 'react';
import Header from './components/Header';
import Photos from './components/Photos';
import './App.css';

const url = 'https://photos-server.herokuapp.com/photos';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.setState({photos: data.photos})
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Photos />
      </div>
    );
  }
}

export default App;
