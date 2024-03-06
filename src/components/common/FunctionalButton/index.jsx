import "./style.css";

function FunctionalButton({ buttonIcon, buttonName, dropIcon }) {
  return (
    <button className="functionalButton">
      {buttonIcon && buttonIcon}
      {buttonName && buttonName}
      {dropIcon && dropIcon}
    </button>
  );
}

export default FunctionalButton;
