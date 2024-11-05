import React, { useState, useEffect } from 'react';
import { fetchTickets } from '../services/api';
import Header from './Header';
import Column from './Column';
import { groupTickets, sortTickets } from '../utils/utils';
import { getStatusIcon, getPriorityIcon } from '../utils/icons';

const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'status');
  const [sorting, setSorting] = useState(localStorage.getItem('sorting') || 'priority');

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchTickets();
      setTickets(data.tickets);
      setUsers(data.users);
    };
    loadData();
  }, []);

  useEffect(() => {
    localStorage.setItem('grouping', grouping);
    localStorage.setItem('sorting', sorting);
  }, [grouping, sorting]);

  const groupedTickets = groupTickets(tickets, grouping, users);
  const sortedTickets = sortTickets(groupedTickets, sorting);

  const getColumnIcon = (key) => {
    switch (grouping) {
      case 'status':
        return getStatusIcon(key);
      case 'priority':
        return getPriorityIcon(Number(key));
      case 'user':
        return null; // No specific icon for users
      default:
        return null;
    }
  };

  return (
    <div className="kanban-board">
      <Header 
        grouping={grouping} 
        setGrouping={setGrouping}
        sorting={sorting}
        setSorting={setSorting}
      />
      <div className="board-columns">
        {Object.entries(sortedTickets).map(([key, tickets]) => (
          <Column 
            key={key} 
            title={key} 
            tickets={tickets} 
            users={users}
            icon={getColumnIcon(key)}
          />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;