import React, { useEffect, useState } from "react";
import "./Login.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = ({ setLoginUser }) => {
  const history = useHistory();
  // const [isloggedIn, setIsloggedIn] = useState(false);
  const [movies, setMovies] = useState([]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };
  const login = () => {
    axios.post("http://localhost:3001/login", user).then((res) => {
      console.log(res.data.message);
      setLoginUser(res.data.user);

      history.push("/");
    });
  };

  const getList = async () => {
    try {
      const {
        data: { result },
      } = await axios.post("", {
        category: "movies",
        language: "kannada",
        genre: "all",
        sort: "voting",
      });
      setMovies(result);
    } catch (err) {}
  };
  getList()
  console.log(movies);

  return (
    <form className="login" onSubmit={submitHandler}>
      <Link to="/company">
        <button className="CII">Company Info</button>
      </Link>
      <h1>Login</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your Email"
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter your Password"
      ></input>
      <div className="button" type="submit" onClick={login}>
        Login
      </div>
      <div>or</div>
      <div className="button" onClick={() => history.push("/register")}>
        Register
      </div>
    </form>
  );
};

export default Login;
