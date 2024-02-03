import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
const Welcome = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;
  const navigate = useNavigate();

  const [location, setLocation] = useState("");

  const goToWeather = (event) => {
    if (event.key === "Enter") {
      return navigate(`/weather/${location}`);
    }
  };
  return (
    <>
      <div>
        <div className="row align-items-center profile-header">
          <div className="col-md-2 mb-3">
            <img
              src={picture}
              alt="Profile"
              className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
            />
          </div>
          <div className="col-md text-center text-md-left">
            <h2>{name}</h2>
            <p className="lead text-muted">{email}</p>
          </div>
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Enter Location"
            onKeyUp={goToWeather}
            type="text"
          />
        </div>
      </div>
    </>
  );
};

export default Welcome;
