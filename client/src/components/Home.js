import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { StyledHeader, StyledLink, StyledBody, StyledButton, MenuContainer } from '../styles/Game';
import '../App.css';


class Home extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      id: "",
      redirect: false,
      games: []
    };
  }

  componentWillMount() {
    axios.get("/api/game").then(res => {
      this.setState({ games: res.data });
    });
  }
  _handleChange = e => {
    this.setState({ username: e.target.value });
  };
  _handleSubmit = e => {
    e.preventDefault();
    console.log("CLICKING BUTTON");
    axios
      .post("/api/game", { banana: "banana", user: this.state.username })
      .then(res => {
        console.log("Successfully Created Game");
        console.log(res.data);
        this.setState({ redirect: true, id: res.data._id });
      });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/game/${this.state.id}`} />;
    } else {
      return (
        <MenuContainer>
          <StyledHeader>JEOPARDY</StyledHeader>
          <StyledBody>
          <form onSubmit={this._handleSubmit}>
            <input
              onChange={this._handleChange}
              value={this.state.username}
              type="text"
            />
            <StyledButton>New Game</StyledButton>
          </form>
          <h3>Existing Games: </h3>
          <ul>
            {this.state.games.map((game, i) => {
              return (
                <li key={i}>
                  <StyledLink to={`/game/${game._id}`}>
                    {" "}{game.user}'s Game{" "}
                  </StyledLink>
                </li>
              );
            })}
          </ul>
        </StyledBody>
      </MenuContainer>
      );
    }
  }
}
export default Home;
