import React, {useState, useEffect} from "react";
import axios from "axios";

const ResourceList = ({resource}) => {
  // {resource} = prop from Hooks.js --> 'posts' / 'todos'
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
  }, [resource]); //fetcResrouce will run the first time this comp mounts
  // Every time what's inside [] changes, the callback (fetchResource) gets invoked
  // ex: by default [resource] is set to ['posts'] bec that's what was set in Hooks.js -> useState('posts')
  //  user clicks Todos button -> [resource] value becomes ['todos']
  //  user clicks Posts button -> [resource] value becomes ['posts']
  //  but if user clicks Posts button again it won't rerender, bec value of [resource] didn't change

  // *useEffect GOTCHA: can't use async functions or Promises.
  // we have to define a second function like fetchResource, then pass it as a callback to useEffect

  /* ======== Alternative (same result) ========
  useEffect(() => {
    (async resource => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
    setResources(response.data);
    })(resource) *IMMEDIATELY CALLS THE ASYNC FUNC*
  }, [resource])

  Ex: (() => console.log('hi'))()
  Defining and invoking in a single step
  */

  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
