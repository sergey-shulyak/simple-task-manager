import { schema } from 'normalizr';

const ticketSchema = new schema.Entity('tickets');
const ticketsSchema = [ticketSchema];

const boardSchema = new schema.Entity('boards', { ticketsSchema });
const boardsSchema = [boardSchema];

export {
  ticketSchema,
  ticketsSchema,
  boardSchema,
  boardsSchema
};
