import React from 'react';
import App from './App';
import { shallow } from 'enzyme'
import { Header } from './components/Header';
import Wrapper from './components/Wrapper';


describe('#App Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('div')).toHaveLength(1)
    expect(wrapper.find(Header)).toHaveLength(1)
    expect(wrapper.find(Wrapper)).toHaveLength(1)
  })
})

