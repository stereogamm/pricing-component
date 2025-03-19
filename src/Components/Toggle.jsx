function Toggle({ toggleState }) {
  return (
    <>
      <label className="toggle">
        <input
          type="checkbox"
          className="toggle__input"
          onChange={toggleState}
        ></input>
        <span className="toggle__slider"></span>
      </label>
    </>
  );
}

export default Toggle;
