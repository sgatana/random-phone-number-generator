import React from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap';

export const SideBar =
  ({
    generateRandomNumbers,
    error,
    onChange,
    exportNumbers
  }) => (
      <div>
        <input type="number" min="0" onChange={onChange} className="form-control" placeholder="Enter the number to generate" />
        <span className="text-danger">
          {error}
        </span>
        <br />
        <ButtonToolbar>
          <Button id="generate" color="button-outline-primary" onClick={() => generateRandomNumbers()} className="btn">Generate Numbers</Button>
        </ButtonToolbar>
        <br />
        <ButtonToolbar>
          <Button id="export" color="button-outline-primary" className="btn" onClick={() => exportNumbers()}>Export Numbers</Button>
        </ButtonToolbar>
       
      </div>
    )