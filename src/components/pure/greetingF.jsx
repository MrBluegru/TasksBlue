import React, { useState } from "react";
import PropTypes from "prop-types";

const GreetingF = (props) => {
  const [age, setAge] = useState(23);

  const birthday = () => {
    setAge(age + 1);
  };

  return (
    <div>
      <h1>Hola {props.name} ! desde componente funcional</h1>
      <h2>tu edad : {age} </h2>
      <div>
        <button onClick={birthday}>Aumentar +1</button>
      </div>
    </div>
  );
};

GreetingF.propTypes = {
  name: PropTypes.string,
};

export default GreetingF;
