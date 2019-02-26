import ReactDOM from "react-dom";
import { renderToDOM } from "./index";

describe("#renderToDOM", () => {

  beforeEach(() => {
    global.document.getElementById = () => true
    ReactDOM.render = jest.fn()
  })

  it("should call ReactDOM.render", () => {
    renderToDOM();
    expect(ReactDOM.render).not.toHaveBeenCalled();
  });
});
