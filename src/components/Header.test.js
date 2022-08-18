import {screen, render, fireEvent} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'

test('Is rendering', () => {
     const newUsers = [[{
      firstName: 'MockName',
    
    }]]

     const userLogin = {
      email: 'mock@gmail.com',
      password: '123456'
    }   

    render(<BrowserRouter><Header newUsers={newUsers} userLogin={userLogin}/></BrowserRouter>)
    screen.debug()
     expect(screen.getByText(/Log In/i)).toBeInTheDocument() 
    
  })