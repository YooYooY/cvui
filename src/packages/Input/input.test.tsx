import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Input, { InputProps } from './input';

const defaultProps: InputProps = {
  onChange: jest.fn(),
  placeholder: 'test-input',
}

describe("test Input component",()=>{
    it("should render the correct default Input",()=>{
        const wrapper = render(<Input {...defaultProps} />)
        const testNode = wrapper.getByPlaceholderText("test-input") as HTMLInputElement;
        expect(testNode).toBeInTheDocument();
        expect(testNode).toHaveClass("cv-input-inner");
        fireEvent.change(testNode, { target: { value: 'test value' } })
        expect(defaultProps.onChange).toHaveBeenCalled();
        expect(testNode.value).toEqual('test value')
    });
    
    it("should render the disabled Input on disabled property",()=>{
        const wrapper = render(<Input disabled placeholder="disabled" />)
        const testNode = wrapper.getByPlaceholderText("disabled") as HTMLInputElement;
        expect(testNode.disabled).toBeTruthy()
    })
    
    it("should render different input sizes on size property",()=>{
        const wrapper = render(<Input placeholder="size" size="lg" />);
        const testContainer = wrapper.container.querySelector(".cv-input");
        expect(testContainer).toHaveClass("cv-input-size-lg");
    });
    
    it("should render prepand and append element on prepend/append property",()=>{
        const {queryByText, container} = render(<Input placeholder="pend" prepend="https://" append=".com" />)
        const testContainer = container.querySelector(".cv-input");
        expect(testContainer).toHaveClass(
          'cv-input cv-input-group-prepend cv-input-group-append'
        )
        expect(queryByText("https://")).toBeInTheDocument();
        expect(queryByText(".com")).toBeInTheDocument();
    })
    
})