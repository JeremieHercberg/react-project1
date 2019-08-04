// External
import React from "react";

// CSS
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
    const { text } = this.state
    const { setAlert, searchUsers } = this.props
    if (text === "") {
      setAlert("Tapez quelque chose dans la barre de recherche");
    } else {
      searchUsers(text);
      this.setState({ text: "" })
    }
  }

  render() {
    const { clearUsers, displayClearButton } = this.props
    const { text } = this.state
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text"
            name="text"
            placeholder="Search Users...."
            value={text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Rechercher"
          />
        </form>
        {
          displayClearButton &&
          <button type="button" onClick={clearUsers}>Recommencer</button>
        }
      </div>
    )
  }
}

export default SearchBar;
