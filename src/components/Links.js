import React from "react";

class Links extends React.Component {
//function Links(props) {
  render() {
  return (
    <div>
      <h3>Links</h3>
      <a href={this.props.github}>{this.props.github}</a>
      <a href={this.props.linkedin}>{this.props.linkedin}</a>
    </div>
  );
  }
}

export default Links;
