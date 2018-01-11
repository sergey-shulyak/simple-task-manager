import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import BoardListPage from '../../boardListPage';

const boards = [
  { id: '1', title: 'Test 1' },
  { id: '2', title: 'Test 2' },
  { id: '3', title: 'Test 3' }
];

const props = {
  fetchBoards: jest.fn(),
  showModal: jest.fn(),
  boards
};

describe('BoardListPage', () => {
  it('Should render correctly', () => {
    const wrapper = shallow(<BoardListPage {...props} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Should call fetchBoards on componentWillMount', () => {
    const wrapper = shallow(<BoardListPage {...props} />);

    wrapper.simulate('componentWillMount');

    expect(props.fetchBoards.mock.calls.length).toBeGreaterThan(0);
  });
});
