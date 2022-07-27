import React from "react";
import '@testing-library/jest-dom/extend-expect'
import {render, screen} from '@testing-library/react'
import Starships from "./Starships";


test('load must be in the component', () => {
    render(<Starships />);
    const element = screen.getByText(/Load More/i);
    expect(element).toBeInTheDocument();
  });


  

