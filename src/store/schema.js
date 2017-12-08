import { schema } from 'normalizr';

const ticketSchema = new schema.Entity('tickets');
const columnSchema = new schema.Entity('columns');
const boardSchema = new schema.Entity('boards', { columns: [columnSchema] });

const boardsSchema = [boardSchema];
const columnsSchema = [columnSchema];
const ticketsSchema = [ticketSchema];

export {
  boardsSchema,
  columnsSchema,
  ticketsSchema,
  boardSchema,
  columnSchema,
  ticketSchema
};
