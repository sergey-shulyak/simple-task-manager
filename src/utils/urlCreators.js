export const HOME_URL = '/';

export const BOARDS_URL = '/boards';
export const boardUrl = boardId => `${BOARDS_URL}/${boardId}`;

export const ticketsUrl = boardId => `${boardUrl(boardId)}/tickets`;
export const ticketUrl = (boardId, ticketId) => `${ticketsUrl(boardId)}/${ticketId}`;
