import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { tickets } from '../testData';

import Column from '../../boardPage/board/column';

const props = {
  title: 'Sample title',
  tickets,
  className: 'custom',
  boardId: '42'
};

describe('Column', () => {
  it('Should render correctly', () => {
    const wrapper = shallow(<Column {...props} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
