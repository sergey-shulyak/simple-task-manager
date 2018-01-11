import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import BoardEntry from '../../boardListPage/boardList/boardEntry';

const props = {
  id: '42',
  title: 'Sample title',
  description: 'Sample description',
  className: 'custom',
  showModal: jest.fn()
};

describe('BoardEntry', () => {
  it('Should render correctly', () => {
    const wrapper = shallow(<BoardEntry {...props} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
