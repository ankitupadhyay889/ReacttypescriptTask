import React from 'react';
import { render, screen} from '@testing-library/react';
// // import userEvent from '@testing-library/user-event'
import E from "./E";

// let rootContainer;

// beforeEach(() => {
//   rootContainer = document.createElement("div");
//   document.body.appendChild(rootContainer);
// });

// afterEach(() => {
//   document.body.removeChild(rootContainer);
//   rootContainer = null;
// });

// describe("App Component Testing", () => {
//   it("Renders Hello World Title", () => {
//     act(() => {
//       ReactDOM.render(<App />, rootContainer);
//     });
//     const h1 = rootContainer.querySelector("h1");
//     expect(h1.textContent).to.equal("Hello World");
//   });
// });


test("render app", () => {
    render(<E />);
    const counter = screen.getByText("Ankit Upadhyay");
    expect(counter).toBeInTheDocument();
});