import axios from "axios";
import React, { Component } from "react";
import CardApi from "./CardApi";
import Faveroite from "./Faveroite";
const url = process.env.REACT_APP_URL;
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataApi: [],
    };
  }
  componentDidMount = async () => {
    const erqApi = await axios.get(
      `https://examraneem.herokuapp.com/getapidata`
    );
    this.setState({
      dataApi: erqApi.data,
    });
    console.log(this.state.dataApi);
  };
  addtoFav = async (obj) => {
    await axios.post(`https://examraneem.herokuapp.com/postMethod`, obj);
    console.log(obj);
  };
  render() {
    return (
      <div>
        <CardApi dataApi={this.state.dataApi} addtoFav={this.addtoFav} />
      </div>
    );
  }
}

export default Home;
