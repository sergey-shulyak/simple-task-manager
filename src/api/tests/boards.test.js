import { normalize } from 'normalizr';

import * as api from '../boards';
import { boardListSchema, boardSchema } from '../../store/schema';

import data from './data.json';

jest.mock('../utils.js');

describe('Boards API', () => {
  it('Should fetch all boards and normalize them', async () => {
    const expectedData = normalize(data.boards, boardListSchema);
    const actualData = await api.getBoards();

    expect(actualData).toEqual(expectedData);
  });

  it('Should fetch board by id and normalize it', async () => {
    const id = 2;
    const matchingBoard = data.boards.find(board => board.id === id);

    const expectedData = normalize(matchingBoard, boardSchema);
    const actualData = await api.getBoard(id);

    expect(actualData).toEqual(expectedData);
  });

  it('Should create board on server', async () => {
    const expectedData = {
      id: 42,
      title: 'Test board',
      description: 'Test description'
    };

    const actualData = await api.createBoard(expectedData);

    expect(actualData).toEqual(expectedData);
  });

  it('Should delete board from server', async () => {
    const id = 42;

    const actualData = await api.deleteBoard(id);

    expect(actualData).toEqual(id);
  });
});
