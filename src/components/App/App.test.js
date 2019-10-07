import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import local from '../../data/local';
import technology from '../../data/technology';
import entertainment from '../../data/entertainment';
import science from '../../data/science';
import health from '../../data/health';

describe('App', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should display the local news', () => {

  });

});
