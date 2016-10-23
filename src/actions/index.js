export function selectTicket(ticket) {
    return {
        type: 'TICKET_SELECTED',
        payload: ticket
    };
}

export function calendarDate(date) {
    return {
        type: 'CALENDAR_DATE',
        payload: date
    };
}

export function nextMonth(date) {
    return {
        type: 'NEXT_MONTH',
        payload: date
    };
}

export function prevMonth(date) {
    return {
        type: 'PREV_MONTH',
        payload: date
    };
}