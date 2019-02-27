import React from 'react';
import App from './App';
import ReactDOM from 'react-dom'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Header } from './components/Header';
import Wrapper from './components/Wrapper';

// configure({adapter: new Adapter()})

describe('#App Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('div')).toHaveLength(1)
    expect(wrapper.find(Header)).toHaveLength(1)
    expect(wrapper.find(Wrapper)).toHaveLength(1)
  })
})

