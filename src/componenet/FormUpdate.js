import React, { Component } from "react";

export class FormUpdate extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.updaeMethid}>
          <input
            defaultValue={this.props.image}
            onChange={this.props.changeimage}
          />
          <input
            defaultValue={this.props.price}
            onChange={this.props.changePrice}
          />
          <input value="update" type="submit" />
        </form>
      </div>
    );
  }
}

export default FormUpdate;
