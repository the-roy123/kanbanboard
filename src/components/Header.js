import React, { useState } from 'react';
import { icons } from '../utils/icons';

const Header = ({ grouping, setGrouping, sorting, setSorting }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <button onClick={() => setIsOpen(!isOpen)} className="display-button">
        <img src={icons.display} alt="Display" className="icon" />
        Display
        <img src={icons.down} alt="Down" className="icon" />
      </button>
      {isOpen && (
        <div className="dropdown">
          <div className="dropdown-item">
            <label>Grouping</label>
            <select value={grouping} onChange={(e) => setGrouping(e.target.value)}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-item">
            <label>Ordering</label>
            <select value={sorting} onChange={(e) => setSorting(e.target.value)}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;