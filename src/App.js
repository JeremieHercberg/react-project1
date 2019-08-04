// External
import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/navbar/Navbar";
import Users from "./components/users/Users";
import Footer from "./components/footer/Footer";
import Loader from "./components/loader/Loader";
import SearchBar from "./components/search/SearchBar";
import Alert from "./components/alert/Alert"
import About from "./components/about/About"

// CSS
import "./App.css";

class App extends React.Component {
  state = {
    users: [],
    loading: false,
    alert: null
  }

  // async componentDidMount() {
  //   const response = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //   this.setState({ users: response.data, loading: false })
  // }

  searchUsers = async (text) => {
    this.setState({ loading: true })
    const response = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({ users: response.data.items, loading: false })
  }

  clearUsers = () => { this.setState({ users: [] }) }

  setAlert = (msg) => {
    this.setState({ alert: { msg } })
    setTimeout(() => this.setState({ alert: null }), 5000)
  }

  render() {
    const { users, loading, alert } = this.state
    const isLoading = loading
    const areUsersFilled = users.length > 0

    return (
      <React.Fragment>
        {isLoading
          ? <Loader />
          :
          <div>
            <Router>
              <Navbar />
              <Alert alert={alert} />
              <Switch>
                <Route exact path="/" render={props => (
                  <React.Fragment>
                    <SearchBar
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      displayClearButton={areUsersFilled}
                      setAlert={this.setAlert}
                    />
                    <div className="global-container">
                      <Users users={users} loading={loading} />
                    </div>
                  </React.Fragment>
                )} />
                <Route exact path="/about" component={About} />
              </Switch>
              <Footer />
            </Router>
          </div>
        }
      </React.Fragment>
    )
  }
}

export default App;
