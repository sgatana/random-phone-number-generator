import React from 'react';
import App from './App';
import ReactDOM from 'react-dom'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// configure({adapter: new Adapter()})

describe('#App Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('div')).toHaveLength(1)
  })
})

