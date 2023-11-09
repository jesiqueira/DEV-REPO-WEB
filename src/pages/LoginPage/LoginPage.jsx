import React from "react";
import "./styles.css";

const LoginPage = () => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const handleLogin = () => {
    console.log('Email: ', email);
    console.log('Password: ', password);
  };
  return (
    <div id="login">
      <h1 className="tittle">Login</h1>
      <div className="form">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>{" "}
        <div className="field">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="actions">
          <button onClick={handleLogin}>Entrar</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
