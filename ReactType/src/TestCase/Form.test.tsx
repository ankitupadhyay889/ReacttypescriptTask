import React from 'react';
import { fireEvent, render, screen} from '@testing-library/react';
// import userEvent from '@testing-library/user-event'
import Form from "./Form";

describe("Test the form component" , () => {
    test("render the form component" , async() => {
        render(<Form />);
        const buttonList = await screen.findAllByRole("button");
        // console.log(buttonList);
        // expect(buttonList).toHaveLength(3);
        expect(buttonList).toHaveLength(2);
    })

    test("check only text in input" , () => {
        render(<Form />);
        const textInput = screen.getByPlaceholderText("Enter Name");
        expect(textInput).toHaveAttribute("type", "text")
    })

    // test("after submit input field empty" , () => {
    //     const {getByTestId} = render(<Form />);
    //     const emptyAfter = getByTestId("sub");
    //     const inputElementNode = screen.getAllByPlaceholderText("Enter Name");
    //     fireEvent.click(emptyAfter);
    //     expect(inputElementNode.values).toMatch("")
    // })

    // test("after submit input field" , () => {
    //     render(<Form />);
    //     const submitBtn = screen.getByTestId("submit");
    //     const userName = screen.getByTestId("name")

    //     userEvent.type(userName, "ankit");
    //     userEvent.click(submitBtn);
    //     const userInfo = screen.getByText("ankit")
    //     expect(userInfo).toBeInTheDocument();
    // })
})