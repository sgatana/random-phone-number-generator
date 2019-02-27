import React from 'react'
import { shallow } from 'enzyme'
import Content from './Content';

describe('#Content Component', () => {
  it('should render div without crushing', () => {
    const contentComponent = shallow(<Content />)
    expect(contentComponent.find('div')).toHaveLength(2)
  })
})