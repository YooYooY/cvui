import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonProps } from './button'

const defaultProps = {
    onClick: jest.fn()
}

const testProps: ButtonProps  = {
    btnType: "primary",
    size: "lg",
    className: "kclass"
}

const disabledProps: ButtonProps = {
    disabled: true,
    onClick: jest.fn()
};

describe("test Button component",()=>{
    it("should render the correct default button",()=>{
        const wrapper = render(<Button {...defaultProps} >Nice</Button>)
        const element = wrapper.getByText("Nice") as HTMLButtonElement;
        
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual("BUTTON");
        expect(element).toHaveClass('cv-btn cv-btn-status-default')
        expect(element.disabled).toBeFalsy();
        fireEvent.click(element);
        expect(defaultProps.onClick).toHaveBeenCalled();
    })
    
    it("should render the correct component based on different props",()=>{
        const wrapper = render(<Button {...testProps}>Nice</Button>);
        const element = wrapper.getByText("Nice");
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass(
          ' cv-btn kclass cv-btn-status-primary cv-btn-size-lg'
        )
    })
    
    it("should render a link when btnType equals link and href is provided",()=>{
         const wrapper = render(<Button btnType="link" href="www.baidu.com">Link</Button>)
         const element = wrapper.getByText("Link");
         expect(element).toBeInTheDocument();
         expect(element.tagName).toEqual("A");
         expect(element).toHaveClass('cv-btn cv-btn-status-link')
    })
    
    it("should render disabled button when disabled set to true",()=>{
         const wrapper = render(<Button {...disabledProps}>Nice</Button>)
         const element = wrapper.getByText('Nice') as HTMLButtonElement
         expect(element).toBeInTheDocument();
         expect(element.disabled).toBeTruthy();
         fireEvent.click(element);
         expect(disabledProps.onClick).not.toHaveBeenCalled();
    })
    
    
})
