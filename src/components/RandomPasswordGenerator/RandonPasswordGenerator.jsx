import { useState } from "react";
import "./RandomPasswordGenerator.css";

const RandomPasswordGenerator = () => {
  const generatePassword = (length) => {
    let randomPassword = "";
    for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor(Math.random() * (126 - 33 + 1)) + 33;
      randomPassword += String.fromCharCode(randomNumber);
    }
    return randomPassword;
  };

  const [password, setPassword] = useState(generatePassword(8));
  const [passwordLegnth, setPasswordLegnth] = useState(8);
  const [inputType, setInputType] = useState("password");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPassword(generatePassword(passwordLegnth));
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeLengthInput = (e) => {
    setPasswordLegnth(e.target.value);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
  };

  const handleChangeInputType = () => {
    inputType === "password" ? setInputType("text") : setInputType("password");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="passwordInputContainer">
        <button className="copyBtn" type="button" onClick={copyPassword}>
          <i className="fa-solid fa-copy"></i>
        </button>

        <input
          className="passwordInput"
          type={inputType}
          name="password"
          value={password}
          onChange={handleChangePassword}
          readOnly
        />
        <button
          className="showBtn"
          type="button"
          onClick={handleChangeInputType}
        >
          <i className="fa-solid fa-eye"></i>
        </button>
      </div>

      <div className="passwordLengthInfoContainer">
        <label className="passwordLengthInfo">
          Password length:{" "}
          <span style={{ color: "#99C8FF" }}>{passwordLegnth}</span>
        </label>
        <input
          className="passwordLengthInput"
          type="range"
          value={passwordLegnth}
          onChange={handleChangeLengthInput}
          min="8"
          max="32"
        />
      </div>

      <input className="generateBtn" type="submit" value="Generate" />
    </form>
  );
};

export default RandomPasswordGenerator;
