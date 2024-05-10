import React, { useState } from "react";
import "./DropDown.css";

function Dropdown({ options, defaultOption, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option, index) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option, index);
    }
  };

  return (
    <div className="dropdown">
      <div
        className={`select ${isOpen ? "select-clicked" : ""}`}
        onClick={toggleDropdown}
      >
        <span className="selected">{selectedOption}</span>
        <div className={`caret ${isOpen ? "caret-rotate" : ""}`}></div>
        <ul className={`menu ${isOpen ? "menu-open" : ""}`}>
          {options.map((option, index) => (
            <li
              key={index}
              className={selectedOption === option ? "active" : ""}
              onClick={() => handleOptionClick(option, index)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
