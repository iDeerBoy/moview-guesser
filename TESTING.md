# Testing Configuration

Este proyecto está configurado para realizar unit tests usando **Vitest** y **React Testing Library**.

## Tecnologías Utilizadas

- **Vitest**: Framework de testing rápido y moderno para proyectos Vite
- **React Testing Library**: Para testing de componentes React
- **Happy DOM**: Entorno DOM ligero para tests
- **@testing-library/jest-dom**: Matchers adicionales para assertions

## Scripts Disponibles

```bash
# Ejecutar todos los tests una vez
npm test

# Ejecutar tests en modo watch (se re-ejecutan al guardar cambios)
npm run test:watch

# Ejecutar tests con interfaz gráfica
npm run test:ui

# Ejecutar tests con reporte de cobertura
npm run test:coverage
```

## Estructura de Tests

```
src/
├── __tests__/
│   ├── App.test.tsx          # Tests del componente principal
│   └── utils.test.ts         # Tests de funciones utilitarias
├── utils/
│   └── index.ts              # Funciones utilitarias de ejemplo
└── setupTests.ts             # Configuración global para tests
```

## Ejemplos de Tests

### Testing de Componentes React

```typescript
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import MyComponent from '../MyComponent'

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  it('handles user interaction', () => {
    render(<MyComponent />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(screen.getByText('Clicked!')).toBeInTheDocument()
  })
})
```

### Testing de Funciones Utilitarias

```typescript
import { describe, it, expect } from 'vitest'
import { myUtilFunction } from '../utils'

describe('myUtilFunction', () => {
  it('returns expected result', () => {
    const result = myUtilFunction('input')
    expect(result).toBe('expected output')
  })
})
```

## Configuración

### vitest.config.ts
- Configuración específica para Vitest
- Usa Happy DOM como entorno de testing
- Configura globals para usar `describe`, `it`, `expect` sin imports

### setupTests.ts
- Importa matchers adicionales de `@testing-library/jest-dom`
- Se ejecuta antes de cada test file

## Comandos Útiles

```bash
# Ejecutar tests específicos
npx vitest src/__tests__/App.test.tsx

# Ejecutar tests en modo debug
npx vitest --inspect-brk

# Ver ayuda de Vitest
npx vitest --help
```

## Best Practices

1. **Organización**: Mantén tests cerca del código que prueban
2. **Nomenclatura**: Usa `.test.ts` o `.test.tsx` para archivos de test
3. **Describe blocks**: Agrupa tests relacionados
4. **Assertions claras**: Usa matchers descriptivos
5. **Setup/Teardown**: Usa `beforeEach`/`afterEach` cuando sea necesario

## Recursos

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Jest DOM Matchers](https://github.com/testing-library/jest-dom)