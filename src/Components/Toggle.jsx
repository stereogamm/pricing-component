function Toggle({ onChange }) {
  return (
    <>
      <label className="toggle">
        <input
          type="checkbox"
          className="toggle__input"
          onChange={onChange}
        ></input>
        <span className="toggle__slider"></span>
      </label>
    </>
  );
}

export default Toggle;
