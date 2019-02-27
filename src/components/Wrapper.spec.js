import React from 'react'
import { shallow } from 'enzyme'
import Wrapper from './Wrapper';
import { SideBar } from './SideBar';
import Content from './Content';

describe('#Content Component', () => {
  let contentComponent
  beforeEach(() => {
    contentComponent = shallow(<Wrapper />)
  })
  it('should render div without crushing', () => {
    expect(contentComponent.find('div')).toHaveLength(1)
  })
  it('should render sidebar component', () => {
    expect(contentComponent.find(SideBar)).toHaveLength(1)
  })
  it('should render content component', () => {
    expect(contentComponent.find(Content)).toHaveLength(1)
  })
})