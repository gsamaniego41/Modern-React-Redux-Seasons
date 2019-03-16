import {useState, useEffect} from "react";

const useLocation = () => {
  /* ============== Custom Hook =================== */
  // Logic used to be in Seasons.js
  // Extracted for reusability in other components OR even in other projects
  // lat = piece of state, setLate = setter (equivalent of this.setState)

  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  /* =============================================== */

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat({lat: position.coords.latitude}),
      err => setErrorMessage({errorMessage: err.message})
    );
  }, []);
  /* empty array means only run this function one time (in total)
   for the entire lifecycle of this component */

  /* =============================================== */

  // Seasons.js only cares about lat and errorMessage
  // So return lat and errorMessage
  return [lat, errorMessage];
  // Currently this syntax is convention only, not required
  // I prefer {lat, errorMessage} so order won't matter when destructuring
};

export default useLocation;
