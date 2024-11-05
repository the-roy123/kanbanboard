
export const groupTickets = (tickets, grouping, users) => {
    switch (grouping) {
      case 'status':
        return tickets.reduce((acc, ticket) => {
          (acc[ticket.status] = acc[ticket.status] || []).push(ticket);
          return acc;
        }, {});
      case 'user':
        return tickets.reduce((acc, ticket) => {
          const user = users.find(user => user.id === ticket.userId);
          (acc[user.name] = acc[user.name] || []).push(ticket);
          return acc;
        }, {});
      case 'priority':
        const priorityLabels = {
          4: 'Urgent',
          3: 'High',
          2: 'Medium',
          1: 'Low',
          0: 'No priority'
        };
        return tickets.reduce((acc, ticket) => {
          (acc[priorityLabels[ticket.priority]] = acc[priorityLabels[ticket.priority]] || []).push(ticket);
          return acc;
        }, {});
      default:
        return { 'All Tickets': tickets };
    }
  };
  
  export const sortTickets = (groupedTickets, sorting) => {
    const sortFunction = sorting === 'priority' 
      ? (a, b) => b.priority - a.priority
      : (a, b) => a.title.localeCompare(b.title);
  
    return Object.entries(groupedTickets).reduce((acc, [key, tickets]) => {
      acc[key] = tickets.sort(sortFunction);
      return acc;
    }, {});
  };