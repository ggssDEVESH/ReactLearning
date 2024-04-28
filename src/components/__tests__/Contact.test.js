import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import '@testing-library/jest-dom';

describe("these are the group of test cases for contact us page",() => {
    //insted of test you can write 'it'
    it("checking the contact component is rendered or not",() => {
        render(<Contact />)
    
        const heading = screen.getByRole('heading')
    
        expect(heading).toBeInTheDocument();
    })
    
    it("should load button inside the component",() => {
        render(<Contact />)
    
        const button = screen.getByText("Submit")
    
        expect(button).toBeInTheDocument();
    })
    
    it("should load input name inside input",() => {
        render(<Contact />)
    
        const inputName = screen.getByPlaceholderText("name")
    
        expect(inputName).toBeInTheDocument();
    })
    
    it("should load two input boxes on the contact components",() => {
        render(<Contact />)
        const inputBoxes = screen.getAllByRole("textbox")
        expect(inputBoxes.length).toBe(2);
    })
})




