// External
import React from "react";
import axios from "axios";

// Components
import Navbar from './components/navbar/Navbar'
// import Users from "./components/users/Users"


class App extends React.Component {
  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({ loading: true })
    const response = await axios.get("https://api.github.com/users")
    console.log(response.data);
    this.setState({ users: response.data, loading: false })
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        {/* <Users /> */}
      </React.Fragment>
    )
  }
}

export default App;
