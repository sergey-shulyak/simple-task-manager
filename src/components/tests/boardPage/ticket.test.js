import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Ticket from '../../boardPage/board/column/ticket';

const props = {
  id: '42',
  title: 'Sample title',
  description: 'Sample description',
  priority: 'medium',
  type: 'task',
  boardId: '24',
  className: 'custom'
};

describe('Ticket', () => {
  it('Should render correctly', () => {
    const wrapper = shallow(<Ticket {...props} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
