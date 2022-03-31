import React, { Component } from "react";
import Contacts from "./components/contacts";
import "./App.css";
import "./components/PostForm";
import PostForm from "./components/PostForm";

class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="column">
            <Contacts blogs={this.state.blogs} />
          </div>
          <div className="column">
            <PostForm />
          </div>
        </div>
      </div>
    );
  }
  state = {
    blogs: [],
  };
  componentDidMount() {
    fetch("http://127.0.0.1:8000/viewSomeBlog/")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ blogs: data });
      })
      .catch(console.log);
  }
}

export default App;
