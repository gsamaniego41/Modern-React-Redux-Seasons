import React, {useState} from "react";
import ResourceList from "./ResourceList";

import UserList from "./UserList";

const Hooks = () => {
  const [resource, setResource] = useState("posts");
  return (
    <div>
      <h3>Users:</h3>
      <UserList />
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("todos")}>Todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default Hooks;
