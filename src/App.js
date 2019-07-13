// External
import React from "react";
import axios from "axios";

// Components
import Navbar from "./components/navbar/Navbar";
import Users from "./components/users/Users";
import Footer from "./components/footer/Footer";
import Loader from './components/loader/Loader';

// CSS
import "./App.css";

class App extends React.Component {
  state = {
    users: [],
    loading: true
  }

  async componentDidMount() {
    const response = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({ users: response.data, loading: false })
  }

  render() {
    const isLoading = this.state.loading

    return (
      <React.Fragment>
        {isLoading
          ? <Loader />
          :
          <div>
            <Navbar />
            <div className="global-container">
              <Users users={this.state.users} loading={this.state.loading} />
            </div>
            <Footer />
          </div>
        }
      </React.Fragment>
    )
  }
}

export default App;
