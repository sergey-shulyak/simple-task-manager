import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { columns, tickets } from '../testData';

import BoardPage from '../../boardPage';

const getProps = overrides => ({
  board: { id: '42', title: 'Test board', columns },
  tickets,
  fetchBoard: jest.fn(),
  fetchTickets: jest.fn(),
  match: { params: { id: '42' } },
  ...overrides
});

describe('BoardListPage', () => {
  it('Should render correctly', () => {
    const props = getProps();
    const wrapper = shallow(<BoardPage {...props} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Should call fetchBoard on componentWillMount with empty Board', () => {
    const props = getProps({ board: {} });
    const wrapper = shallow(<BoardPage {...props} />);

    wrapper.simulate('componentWillMount');

    expect(props.fetchBoard.mock.calls.length).toBe(1);
  });

  it('Should call fetchTickets on componentWillMount', () => {
    const props = getProps();
    const wrapper = shallow(<BoardPage {...props} />);

    wrapper.simulate('componentWillMount');

    expect(props.fetchTickets.mock.calls.length).toBe(1);
  });
});
