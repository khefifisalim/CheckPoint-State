import React, { Component } from "react";

export default class Profile1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Cristiano Ronaldo",
        profession: "Football player",
        imgUrl:
          "data:image/jpeg;base64,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",

        bio: "Cristiano Ronaldo dos Santos Aveiro GOIH ComM is a Portuguese professional footballer who plays as a forward for Serie A club Juventus and captains the Portugal national team",
      },
      show: true,
      digit: 0,
    };
  }

  handleClick = () => {
    this.setState({ show: !this.state.show });
  };

  componentDidMount() {
    setInterval(() => this.setState({ digit: this.state.digit + 1 }), 1000);
  }
  componentDidMount;

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.show === true ? "Hide" : "Show"}
        </button>
        {this.state.show === true ? (
          <div>
            <img
              style={{
                paddingTop: "50px",
                paddingLeft: "550px",
                paddingRight: "550px",
              }}
              src={this.state.person.imgUrl}
              alt="Cris"
            />
            <h3 style={{ color: "gray", textAlign: "center" }}>
              Name : {this.state.person.fullName}
            </h3>
            <h3 style={{ color: "gray", textAlign: "center" }}>
              Proffession : {this.state.person.profession}
            </h3>
            <h3 style={{ color: "grey", textAlign: "center" }}>
              Biography : {this.state.person.bio}
            </h3>
          </div>
        ) : (
          <div></div>
        )}
        <div>counter: {this.state.digit}</div>
      </div>
    );
  }
}
