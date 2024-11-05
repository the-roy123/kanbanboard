import threeDotMenu from '../assets/3 dot menu.svg';
import backlogIcon from '../assets/Backlog.svg';
import cancelledIcon from '../assets/Cancelled.svg';
import displayIcon from '../assets/Display.svg';
import doneIcon from '../assets/Done.svg';
import downIcon from '../assets/down.svg';
import highPriorityIcon from '../assets/Img - High Priority.svg';
import lowPriorityIcon from '../assets/Img - Low Priority.svg';
import mediumPriorityIcon from '../assets/Img - Medium Priority.svg';
import inProgressIcon from '../assets/in-progress.svg';
import noPriorityIcon from '../assets/No-priority.svg';
import urgentPriorityColorIcon from '../assets/SVG - Urgent Priority colour.svg';
import urgentPriorityGreyIcon from '../assets/SVG - Urgent Priority grey.svg';
import todoIcon from '../assets/To-do.svg';

export const icons = {
  threeDotMenu,
  backlog: backlogIcon,
  cancelled: cancelledIcon,
  display: displayIcon,
  done: doneIcon,
  down: downIcon,
  highPriority: highPriorityIcon,
  lowPriority: lowPriorityIcon,
  mediumPriority: mediumPriorityIcon,
  inProgress: inProgressIcon,
  noPriority: noPriorityIcon,
  urgentPriorityColor: urgentPriorityColorIcon,
  urgentPriorityGrey: urgentPriorityGreyIcon,
  todo: todoIcon
};

export const getStatusIcon = (status) => {
  switch (status.toLowerCase()) {
    case 'backlog': return icons.backlog;
    case 'todo': return icons.todo;
    case 'in progress': return icons.inProgress;
    case 'done': return icons.done;
    case 'cancelled': return icons.cancelled;
    default: return icons.todo;
  }
};

export const getPriorityIcon = (priority) => {
  switch (priority) {
    case 4: return icons.urgentPriorityColor;
    case 3: return icons.highPriority;
    case 2: return icons.mediumPriority;
    case 1: return icons.lowPriority;
    case 0: return icons.noPriority;
    default: return icons.noPriority;
  }
};