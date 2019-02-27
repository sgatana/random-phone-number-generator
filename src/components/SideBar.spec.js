import React from 'react'
import { shallow, mount } from 'enzyme'
import { SideBar } from './SIdeBar';

describe('#SideBar Component', () => {
  let component, generateRandomNumbers, exportNumbers
  beforeAll(() => {
    generateRandomNumbers = jest.fn()
    exportNumbers = jest.fn()
    component = mount(
      <SideBar
        generateRandomNumbers={generateRandomNumbers}
        exportNumbers={exportNumbers}
      />
    )
  })
  afterAll(() => {
    component.unmount()
  })
  it('should render div without crushing', () => {
    const SideBarComponent = shallow(<SideBar />)
    expect(SideBarComponent.find('div')).toHaveLength(1)
  })
  it('should call generateRandomNumbers', () => {
    component.find('Button#generate').simulate('click')
    expect(generateRandomNumbers).toHaveBeenCalled()
  })
  it('should call exportNumbers function', () => {
    component.find('Button#export').simulate('click')
    expect(exportNumbers).toHaveBeenCalled()
  })
})