import React from 'react';
import { fireEvent, render, screen, cleanup} from '@testing-library/react';
// import userEvent from '@testing-library/user-event'
import Todo from "./Todo";

afterEach(() => {
    const deleteButtons = Array.from(document.querySelectorAll<HTMLElement>('.todo button'));
    deleteButtons.forEach(button => button.click());
    cleanup();
});

describe("Test the button in todo component" , () => {
    test("render the todo component" , async() => {
        render(<Todo />);
        const buttonList = await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(1);
    })

    test("check placeholder in input" , () => {
        render(<Todo />);
        const textInput = screen.getByPlaceholderText("adding");
        expect(textInput).toBeInTheDocument();
    })

    test("check only text in input" , () => {
        render(<Todo />);
        const textInput = screen.getByPlaceholderText("adding");
        expect(textInput).toHaveAttribute("type", "text")
    })

    test("check events onChange" , () => {
        render(<Todo />);
        const event = {target: { value: "ankit"}};
        const inputValue = screen.getByTestId("input");
        fireEvent.change(inputValue,event);
        expect(inputValue).toHaveValue("ankit");
    })

    test("check add button" , () => {
        render(<Todo />);
        const event = {target: { value: "ankit"}};
        const inf = screen.getByTestId("input");
        fireEvent.click(inf,event);
        expect(inf).toBeInTheDocument();
    })

    // test("check delete button" , () => {
    //     render(<Todo />);
    //     const event = {target: { value: "ankit"}};
    //     const inf = screen.getByTestId("deletebtn");
    //     fireEvent.click(inf,event);
    //     expect(inf).toHaveTextContent("ankit");
    // })

    // test("check delete button" , () => {
    //     const doc = render(<Todo />);
    //     const inputElement = doc.getByTestId('input');
    //     const createButtonElement = doc.getByTestId('add');
    //     const todoCountElement = doc.getByTestId('todoCount');
    //     fireEvent.change(inputElement, { target: { value: 'Feed my cat.' } });
    //     fireEvent.click(createButtonElement);
    //     const todo = doc.queryByTestId('todo');
    //     const todoDeleteButton = doc.getByTestId('deleteButton');
    //     fireEvent.click(todoDeleteButton);
    //     const todos = doc.queryAllByTestId('todo');
    //     expect(todoCountElement).toHaveTextContent('0 todos');
    //     expect(todo).not.toBeInTheDocument();
    //     expect(todos.length).toBe(0);
    // })

    test("check after add button input field empty" , () => {
        render(<Todo />);
        const emptyAft = screen.getByTestId("add");
        const inpScren = screen.getByTestId("input");
        fireEvent.click(emptyAft);
        expect(inpScren).toHaveTextContent("");
    })

    // test("testing userEvent" , () => {
    //     const {getByTestId} = render(<Todo/>);
    //     userEvent.type(getByTestId("input"), "test4");
    //     expect(getByTestId("input")).toHaveValue("test4");
    // })
})