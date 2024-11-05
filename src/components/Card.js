import React from 'react';
import { icons, getStatusIcon, getPriorityIcon } from '../utils/icons';

const priorityLabels = {
  4: 'Urgent',
  3: 'High',
  2: 'Medium',
  1: 'Low',
  0: 'No priority'
};

const Card = ({ ticket, user }) => {
  return (
    <div className="card">
      <div className="card-status-icon">
        <img src={getStatusIcon(ticket.status)} alt={ticket.status} />
      </div>
      <div className="card-content">
        <div className="card-header">
          <span className="card-id">{ticket.id}</span>
          <img src={icons.threeDotMenu} alt="Menu" className="card-menu-icon" />
        </div>
        <h3 className="card-title">{ticket.title}</h3>
        <div className="card-footer">
          <div className="card-priority">
            <img src={getPriorityIcon(ticket.priority)} alt={priorityLabels[ticket.priority]} className="priority-icon" />
            <span>{priorityLabels[ticket.priority]}</span>
          </div>
          {ticket.tag && (
            <div className="card-tag">
              <span>{ticket.tag}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;