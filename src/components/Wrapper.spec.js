import React from 'react'
import { shallow } from 'enzyme'
import Wrapper from './Wrapper';
import { SideBar } from './SIdeBar';
import Content from './Content';

describe('#Content Component', () => {
  let wrapperComponent, instance, event, state
  beforeEach(() => {
    wrapperComponent = shallow(<Wrapper />)
    instance = wrapperComponent.instance()
    jest.spyOn(instance, 'sortList')
    jest.spyOn(instance, 'handleChange')
    
    jest.spyOn(instance, 'generateRandomNumbers')



  })
  it('should render div without crushing', () => {
    expect(wrapperComponent.find('div')).toHaveLength(1)
    expect(wrapperComponent.find(SideBar)).toHaveLength(1)
    expect(wrapperComponent.find(Content)).toHaveLength(1)
  })
  it('should render sorted list of generated numbers in descending order', () => {
    const generatedNumbers = [1, 5, 4]
    event = {
      target: { value: 'desc' }
    }
    wrapperComponent.setState({
      isNumberGenerated: true,
      generatedNumbers: generatedNumbers,
      sortCriteria: event
    })
    instance.sortList(event)
    expect(generatedNumbers).toEqual([5, 4, 1])
  })
  it('should render sorted list of generated numbers in ascending order', () => {
    const generatedNumbers = [1, 5, 4]
    event = {
      target: { value: 'asc' }
    }
    wrapperComponent.setState({
      generatedNumbers: generatedNumbers,
      sortCriteria: 'asc',
    })
    instance.sortList(event)
    expect(generatedNumbers).toEqual([1, 4, 5])

  })
  it('should return a number upon onChange event', () => {
    let number
    event = {
      target: { value: 1 }
    }
    wrapperComponent.setState({
      number
    })
    instance.handleChange(event)
    state = wrapperComponent.state()
    expect(state.number).toEqual(1)
  })
  it('should return an array of numbers', () => {
    wrapperComponent.setState({
      isNumberGenerated: true,
      number: 2,
      generatedNumbers: []
    })
    instance.generateRandomNumbers()
    state  = wrapperComponent.state()
    expect(state.generatedNumbers).toHaveLength(2)
    expect(state.totalGeneratedNumbers).toEqual(2)
  })
  it('should throw an error if entered number is less than 1', () => {
    wrapperComponent.setState({
      number: 0
    })
    instance.generateRandomNumbers()
    state  = wrapperComponent.state()
    console.log(state.error)
    expect(state.error).toMatch('number should be between 1 and 10000')
  })
})