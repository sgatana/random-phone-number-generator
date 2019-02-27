import React from 'react'
import { mount, shallow } from 'enzyme'
import Content from './Content';

describe('#Content Component', () => {
  let generatedNumbers, contentComponent, sortNumbers
  beforeAll(()=> {
    sortNumbers = jest.fn()
    generatedNumbers = [1, 2, 3]
    contentComponent = mount(
     <Content
       generatedNumbers={generatedNumbers}
       isNumberGenerated={true}
       sortNumbers={sortNumbers}
     />
   )
  })
   afterAll(() => {
     contentComponent.unmount()
   })
  it('should render a paragraph when numbers are not generated', () => {
    const wrapper = shallow(<Content />)
    expect(wrapper.find('div')).toHaveLength(2)
    expect(wrapper.find('p')).toHaveLength(1)
  })
  it('should render a list of generated numbers', () => {
    expect(contentComponent.find('ListGroup')).toHaveLength(1)
    expect(contentComponent.find('ListGroupItem')).toHaveLength(4)
  })
  it('should sort items', () => {
    contentComponent.find('select').simulate('change')
    expect(sortNumbers).toHaveBeenCalled()

  })
})