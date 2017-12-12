export const homeUrl = () => '/';

export const boardsUrl = () => '/boards';
export const boardUrl = boardId => `${boardsUrl()}/${boardId}`;

export const ticketsUrl = boardId => `${boardUrl(boardId)}/tickets`;
export const ticketUrl = (boardId, ticketId) => `${ticketsUrl(boardId)}/${ticketId}`;
