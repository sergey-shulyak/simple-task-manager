import { schema } from 'normalizr';

const ticketSchema = new schema.Entity('tickets');
const ticketListSchema = [ticketSchema];

const boardSchema = new schema.Entity('boards');
const boardListSchema = [boardSchema];

export {
  ticketSchema,
  ticketListSchema,
  boardSchema,
  boardListSchema
};
