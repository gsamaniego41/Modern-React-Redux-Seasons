import React, {useState, useEffect} from "react";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

const Seasons = () => {
  // state = {lat: null, errorMessage: ''}   --> useState
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat({lat: position.coords.latitude}),
      err => setErrorMessage({errorMessage: err.message})
    );
  }, []);
  /* empty array means only run this function one time (in total)
   for the entire lifecycle of this component */

  let content;
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = <Loader message="Please accept location request" />;
  }

  return <div className="border red">{content}</div>;
};

/* 
class Seasons extends React.Component {
  // state = {lat: null, errorMessage: ""}; --> useState

  componentDidMount = () => {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat: position.coords.latitude}),
      err => this.setState({errorMessage: err.message})
    );
  };

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Loader message="Please accept location request" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
} 

*/

export default Seasons;
