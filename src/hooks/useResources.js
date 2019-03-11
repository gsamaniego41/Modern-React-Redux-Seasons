import {useState, useEffect} from "react";
import axios from "axios";

// Section 25, Lecture 326: Code Reuse
// resource prop (input) --> Hook stuff --> resources array (output)
const useResources = resource => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async resource => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );
      setResources(response.data);
    })(resource);
  }, [resource]);

  return resources;

  /* ===== Benefits =====
  - This function has NO tie to any specific component
  - We can REUSE this function anywhere else inside our project
  - We can REUSE it in a different project 
  */
};

export default useResources;
