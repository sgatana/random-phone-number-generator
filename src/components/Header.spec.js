import React from 'react'
import { shallow } from 'enzyme'
import { Header } from './Header';
import { Navbar } from 'react-bootstrap';

describe('#HeaderComponent', () => {
  it('should render navigation item', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.find(Navbar)).toHaveLength(1)
  })
})