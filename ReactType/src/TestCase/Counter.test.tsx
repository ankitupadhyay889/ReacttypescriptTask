import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "./Counter";


test("increments counter", () => {
    render(<Counter />);
    const counter = screen.getByTestId("counter");
    const incre = screen.getByTestId("increment");
    fireEvent.click(incre);
    expect(counter).toHaveTextContent("1");
});


test("decrements counter", () => {
    render(<Counter />);
    const counter = screen.getByTestId("counter");
    const decre = screen.getByTestId("decrement");
    fireEvent.click(decre);
    expect(counter).toHaveTextContent("0");
});