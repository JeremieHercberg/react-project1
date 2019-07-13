//External
import React from "react";

//CSS
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = {
    text: ""
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Tapez quelque chose dans la barre de recherche");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" })
    }
  }

  render() {
    const { clearUsers, displayClearButton } = this.props
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text"
            name="text"
            placeholder="Search Users...."
            value={this.state.text}
            onChange={this.onChange}
          >
          </input>
          <input
            type="submit"
            value="Rechercher">
          </input>
        </form>
        {
          displayClearButton &&
          <button onClick={clearUsers}>Recommencer</button>
        }
      </div>
    )
  }
}

export default SearchBar;
