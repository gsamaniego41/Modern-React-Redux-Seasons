import React from "react";

class Hooks extends React.Component {
  state = {resource: "posts"};
  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.setState({resource: "posts"})}>
            Posts
          </button>
          <button onClick={() => this.setState({resource: "todos"})}>
            Todos
          </button>
        </div>
        {this.state.resource}
      </div>
    );
  }
}

export default Hooks;
