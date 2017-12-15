import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { columns, tickets } from '../testData';

import Board from '../../boardPage/board';

const props = {
  title: 'Sample title',
  columns,
  tickets,
  className: 'custom'
};

describe('Board', () => {
  it('Should render correctly', () => {
    const wrapper = shallow(<Board {...props} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
