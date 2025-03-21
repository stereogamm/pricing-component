function Toggle({ isYearly, togglePayPlan }) {
  return (
    <>
      <label className="toggle" id="toggle">
        <input
          type="checkbox"
          className="toggle__input"
          onChange={togglePayPlan}
          checked={isYearly}
          aria-live="polite"
          aria-checked={isYearly}
        ></input>
        <span className="toggle__slider"></span>
        <span className="toggle__label"></span>
        <span className={`monthly ${isYearly ? "hidden" : ""}`}>Monthly Plan</span>
        <span className={`annually ${isYearly  ? "" : "hidden"}`}>Annual Plan</span>
      </label>
    </>
  );
}

export default Toggle;
