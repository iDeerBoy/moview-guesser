import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'

describe('App Component', () => {
  it('renders Vite + React heading', () => {
    render(<App />)
    const heading = screen.getByText('Vite + React')
    expect(heading).toBeInTheDocument()
  })

  it('renders count button with initial value 0', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /count is 0/i })
    expect(button).toBeInTheDocument()
  })

  it('increments count when button is clicked', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /count is 0/i })
    
    fireEvent.click(button)
    
    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument()
  })

  it('renders Vite and React logos', () => {
    render(<App />)
    const viteLogo = screen.getByAltText('Vite logo')
    const reactLogo = screen.getByAltText('React logo')
    
    expect(viteLogo).toBeInTheDocument()
    expect(reactLogo).toBeInTheDocument()
  })

  it('renders edit instruction text', () => {
    render(<App />)
    
    // Verificar que el párrafo contiene las partes del texto
    const paragraph = screen.getByText((_, element) => {
      return element?.textContent === 'Edit src/App.tsx and save to test HMR'
    })
    
    expect(paragraph).toBeInTheDocument()
  })
})