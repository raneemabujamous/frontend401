import axios from "axios";
import React, { Component } from "react";
import CardFav from "./CardFav";
import FormUpdate from "./FormUpdate";

export class Faveroite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favData: [],
      showFavdata: false,
      slug: "",
      price: "",
      image: "",
      showUpdateForm: false,
    };
  }
  componentDidMount = async () => {
    const reqFav = await axios.get(`http://localhost:8004/getpost`);
    this.setState({
      favData: reqFav.data,
      showFavdata: true,
    });
  };
  deletefromfav = async (slug) => {
    const deleteres = await axios.delete(`http://localhost:8004/delete${slug}`);
    this.setState({
      favData: deleteres.data,
    });
  };
  update = (slug, price, image) => {
    this.setState({
      showUpdateForm: true,
      slug: slug,
      price: price,
      image: image,
    });
  };

  changePrice = (e) => this.setState({ price: e.target.value });

  changeimage = (e) => this.setState({ image: e.target.value });

  updaeMethid = async () => {
    const updted = { price: this.state.price, image: this.state.image };
    const updateReq = await axios.put(
      `http://localhost:8004/updatadata${this.state.slug}`,
      updted
    );
    this.setState({
      favData: updateReq.data,
    });
  };

  render() {
    return (
      <div>
        {this.state.showUpdateForm && (
          <FormUpdate
            price={this.state.price}
            image={this.state.image}
            updaeMethid={this.updaeMethid}
            changeimage={this.changeimage}
            changePrice={this.changePrice}
          />
        )}

        {this.state.showFavdata && (
          <CardFav
            favData={this.state.favData}
            deletefromfav={this.deletefromfav}
            update={this.update}
          />
        )}
      </div>
    );
  }
}

export default Faveroite;
