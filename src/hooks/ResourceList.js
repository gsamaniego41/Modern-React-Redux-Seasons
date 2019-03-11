import React, {useState, useEffect} from "react";
import axios from "axios";

const ResourceList = ({resource}) => {
  // any time ResourceList first gets rendered, or receives a new value for resource (posts/todos),
  // we want to call fetchResource, then eventually update our state
  const [resources, setResources] = useState([]);

  // useEffect allows us to use lifecycle methods in a func comp
  // useEffect essentially combines CDM and CDU

  const fetchResource = async resource => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
    setResources(response.data);
  };

  useEffect(() => {
    fetchResource(resource);
  }, []);

  return <div>{resources.length}</div>;
};

export default ResourceList;
