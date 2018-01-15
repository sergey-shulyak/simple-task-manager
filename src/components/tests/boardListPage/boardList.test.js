import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import BoardList from '../../boardListPage/boardList';
import BoardEntry from '../../boardListPage/boardList/boardEntry';

const props = {
  showModal: jest.fn()
};

const children = [
  <BoardEntry key="1" id="1" title="test" {...props} />,
  <BoardEntry key="2" id="2" title="test" {...props} />,
  <BoardEntry key="3" id="3" title="test" {...props} />
];

describe('BoardList', () => {
  it('Should render correctly', () => {
    const wrapper = shallow(<BoardList>{children}</BoardList>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
