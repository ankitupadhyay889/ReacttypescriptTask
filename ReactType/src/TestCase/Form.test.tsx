import React from 'react';
import { fireEvent, render, screen} from '@testing-library/react';
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

    test("after submit input field empty" , () => {
        const {getByTestId} = render(<Form />);
        const emptyAfter = getByTestId("sub");
        const inputElementNode = screen.getByTestId("name");
        fireEvent.click(emptyAfter);
        expect(inputElementNode).toHaveTextContent("")
    })

    test("after submit input field" , () => {
        render(<Form />);
        const event = {target: { value: "ankit"}};
        const userName = screen.getByTestId("name")
        fireEvent.change(userName,event);
        expect(userName).toHaveValue("ankit");
        const submitBtn = screen.getByTestId("submit");
        fireEvent.click(submitBtn,event);
        expect(userName).toBeInTheDocument();
    })
})