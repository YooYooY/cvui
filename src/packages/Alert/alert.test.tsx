import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import Alert,{AlertProps} from "./alert";

const testProps: AlertProps = {
  title: 'test alert',
  closable: true,
  onClose: jest.fn()
}

describe("test alert component",()=>{
    
    it("should render correct",async ()=>{
         const wrapper = render(<Alert {...testProps} />)
         const element = wrapper.getByText('test alert') as HTMLDListElement;
         expect(element).toBeInTheDocument();
         expect(element).toHaveClass('cv-alert-title')
         const closeBtnElement = wrapper.getByTestId('test-close-btn');
         expect(closeBtnElement).toBeInTheDocument();
         fireEvent.click(closeBtnElement);
         expect(testProps.onClose).toHaveBeenCalled();
         await waitFor(() => {
             expect(element).not.toBeInTheDocument();
         })
    })
    
})