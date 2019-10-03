import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('Menu', () => {
  let mockChangeNewsFeed = jest.fn()
  let wrapper = shallow(<Menu changeNewsFeed={mockChangeNewsFeed} />);
  
  it('should call the changeNewsFeed prop when clicked', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(mockChangeNewsFeed).toHaveBeenCalled();
  });

  it('should call the changeNewsFeed prop when clicked', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(mockChangeNewsFeed).toHaveBeenCalled();
  });

  it('should call the changeNewsFeed prop when clicked', () => {
    wrapper.find('button').at(2).simulate('click');
    expect(mockChangeNewsFeed).toHaveBeenCalled();
  });

  it('should call the changeNewsFeed prop when clicked', () => {
    wrapper.find('button').at(3).simulate('click');
    expect(mockChangeNewsFeed).toHaveBeenCalled();
  });

  it('should call the changeNewsFeed prop when clicked', () => {
    wrapper.find('button').at(4).simulate('click');
    expect(mockChangeNewsFeed).toHaveBeenCalled();
  });
});