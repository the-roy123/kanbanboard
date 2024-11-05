import React from 'react';
import Card from './Card';

const Column = ({ title, tickets, users, icon }) => {
  return (
    <div className="column">
      <h2 className="column-header">
        {icon && <img src={icon} alt={title} className="status-icon" />}
        {title}
        <span className="ticket-count">{tickets.length}</span>
      </h2>
      <div className="column-cards">
        {tickets.map(ticket => (
          <Card key={ticket.id} ticket={ticket} user={users.find(user => user.id === ticket.userId)} />
        ))}
      </div>
    </div>
  );
};

export default Column;