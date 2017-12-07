import { schema } from 'normalizr';

const ticket = new schema.Entity('tickets');
const column = new schema.Entity('columns', { tickets: [ticket] });
const board = new schema.Entity('boards', { columns: [column] });

const boardList = [board];

export { boardList, board, column, ticket };
