// External
import React from "react";
import { Link } from "react-router-dom";

// Internal
import Loader from "../loader/Loader"

// CSS

class UserComponent extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const { name, avatar_url, location, bio, blog, login, html_url, public_repos, public_gists } = this.props.user;
    const { loading } = this.props;

    if (loading) return <Loader />

    return (
      <React.Fragment>
        {name}
        <Link to="/">Retour à la recherche</Link>
      </React.Fragment>
    )
  }
}

export default UserComponent
