import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

const CreateAPJ = () => {
  const [state, setstate] = useState({
    name: "",
    actor: "",
    house: "",
    ancestry: "",
  });
  const handleInputChange = function (e) {
    e.preventDefault();
    setstate({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  function handleSubmit() {
    if (!state.name || !state.actor || !state.house || !state.ancestry) {
      return alert("debes completar todos");
    }
    return alert("se mando el post");
  }

  return (
    <div>
      <h1>Add your character</h1>
      <form onSubmit={() => handleSubmit()}>
        {state.name === "" ? <p>llena el campo</p> : null}
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleInputChange}
          placeholder="ingrese un nombre"
        />
        <label>Actor: </label>
        <input
          type="text"
          value={state.actor}
          onChange={handleInputChange}
          placeholder="ingrese quien interpreto al personaje"
        />
        {state.house === "" ? <p>llena el campo</p> : null}
        <label>House: </label>
        <input
          type="text"
          value={state.house}
          onChange={handleInputChange}
          placeholder="ingrese la casa"
        />
        {state.ancestry === "" ? <p>llena el campo</p> : null}
        <label>Ancestry: </label>
        <input
          type="text"
          value={state.ancestry}
          onChange={handleInputChange}
          placeholder="ingrese el ancestry"
        />
        <button type="submit" onClick={handleSubmit}>
          Add!
        </button>
      </form>
    </div>
  );
};

export default CreateAPJ;
