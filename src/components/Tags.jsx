const Tbtn = ({ title, clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <button>{title}</button>
  </div>
);

const Tinput = ({ type, plc, max, step, min, value, ref, clas, onChange }) => (
  <div className={clas}>
    <input
      value={value}
      type={type ? type : "text"}
      placeholder={plc}
      onChange={onChange}
      ref={ref}
      min={min}
      max={max}
      step={step}
    />
  </div>
);

const Tspan = ({ title, clas, onClick }) => (
  <div className={clas} onClick={onClick}>
    <span>{title}</span>
  </div>
);

const Timage = ({ src, clas }) => (
  <div className={clas}>
    <img src={src} alt="" />
  </div>
);
export { Tbtn, Tspan, Tinput, Timage };
