import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe ('SearchForm', () => {
  let wrapper;
  const mockDisplaySearch = jest.fn();
  let searchEvent = {target: {name: 'searchInput', value: 'iOS'}}

  beforeEach(() => {
    wrapper = shallow(<SearchForm displaySearchResults={mockDisplaySearch} />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update searchInput in state when change is detected', () => {
    wrapper.instance().handleChange(searchEvent);
    expect(wrapper.state('searchInput')).toEqual('iOS');
  });

  it('should display articles that match the headline search when clicked', () => {
    wrapper.find('button').simulate('click');
    expect(mockDisplaySearch).toHaveBeenCalled();
  });

  it('should reset state after form is cleared', () => {
    wrapper.instance().setState({searchInput:'Pikachu'});
    wrapper.instance().handleClick();
    expect(wrapper.state()).toEqual({searchInput: ''});
  });
});