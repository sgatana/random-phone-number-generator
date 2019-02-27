import React, { Component } from 'react'
import { SideBar } from './SIdeBar';
import Content from './Content';
import { Container, Row, Col } from 'react-bootstrap'
import { saveAs } from 'file-saver'

export default class Wrapper extends Component {
  state = {
    isNumberGenerated: false,
    generatedNumbers: [],
    number: '',
    error: '',
    totalGeneratedNumbers: '',
    maxNumber: '',
    minNumber: '',
    sortCriteria: 'asc'
  }

  generateRandomNumbers = () => {
    const { number } = this.state
    if (number < 1 || number > 10000) {
      this.setState({
        error: 'number should be between 1 and 10000',
        isNumberGenerated: false
      })
      return
    }
    let generatedNumbers = []
    for (let i = 0; i < number; i++) {
      const generatedNumber = '0' + Math.ceil(Math.random() * 900000000 + 100000000)
      generatedNumbers.push(generatedNumber)
      this.setState({
        isNumberGenerated: true,
        generatedNumbers: generatedNumbers,
        error: '',
        maxNumber: Math.max(...generatedNumbers),
        minNumber: Math.min(...generatedNumbers),
        totalGeneratedNumbers: generatedNumbers.length
      })
    }

  }
  exportNumbers = () => {
    const { generatedNumbers } = this.state
    const data = new Blob(generatedNumbers, { type: "text/plain;charset=utf-8" })
    saveAs(data, 'Phone Numbers.pdf')
  }
  handleChange = event => {
    const number = event.target.value
    this.setState({
      number
    })
  }
  sortList = event => {
    const { value } = event.target
    const { generatedNumbers, sortCriteria } = this.state
    if (sortCriteria === value) {

      this.setState(() => ({
        generatedNumbers: generatedNumbers.sort((a, b) => a - b)
      }))
    } else {
      this.setState(() => ({
        generatedNumbers: generatedNumbers.sort((a, b) => b - a)
      }))
    }

  }
  render() {
    const {
      isNumberGenerated,
      generatedNumbers,
      maxNumber,
      minNumber,
      totalGeneratedNumbers,
    } = this.state
    return (

      <div className="wrapper">
        <Container>
          <Row>
            <Col md={3}>
              <SideBar
                generateRandomNumbers={this.generateRandomNumbers}
                onChange={this.handleChange}
                error={this.state.error}
                generatedNumbers={generatedNumbers}
                exportNumbers={this.exportNumbers}
              />
            </Col>
            <Col md={9}>
              <Content
                isNumberGenerated={isNumberGenerated}
                generatedNumbers={generatedNumbers}
                maxNumber={maxNumber}
                minNumber={minNumber}
                totalGeneratedNumbers={totalGeneratedNumbers}
                sortNumbers={this.sortList}
              />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}