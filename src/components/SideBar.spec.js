import React from 'react'
import { shallow } from 'enzyme'
import { SideBar } from './SideBar';

describe('#SideBar Component', () => {
  it('should render div without crushing', () => {
    const SideBarComponent = shallow(<SideBar />)
    expect(SideBarComponent.find('div')).toHaveLength(1)
  })
})