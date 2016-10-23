import ticketlist from '../../TICKETS+PHOTOS/ticket_list';

const initial_state = {
  tickets: ticketlist,
  activeTicket: null,
  date: new Date()
};

export default function(state = initial_state, action) {
  switch(action.type) {
    case 'TICKET_SELECTED':
      return Object.assign({}, state, {
        activeTicket: action.payload
      })
    case 'CALENDAR_DATE':
      return action.payload;
    case 'NEXT_MONTH':
      return Object.assign({}, state, {
        date: action.payload,
        activeTicket: null
      })
    case 'PREV_MONTH':
      return Object.assign({}, state, {
        date: action.payload,
        activeTicket: null
      });
  }

  return state;
}