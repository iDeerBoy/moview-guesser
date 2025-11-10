import { describe, it, expect } from 'vitest'
import { formatMovieTitle, generateRandomNumber, shuffleArray } from '../utils'

describe('Utils', () => {
  describe('formatMovieTitle', () => {
    it('formats movie title with proper capitalization', () => {
      expect(formatMovieTitle('the dark knight')).toBe('The Dark Knight')
      expect(formatMovieTitle('AVENGERS: ENDGAME')).toBe('Avengers: Endgame')
      expect(formatMovieTitle('pulp fiction')).toBe('Pulp Fiction')
    })

    it('handles single word titles', () => {
      expect(formatMovieTitle('interstellar')).toBe('Interstellar')
      expect(formatMovieTitle('INCEPTION')).toBe('Inception')
    })

    it('handles empty string', () => {
      expect(formatMovieTitle('')).toBe('')
    })
  })

  describe('generateRandomNumber', () => {
    it('generates number within specified range', () => {
      const min = 1
      const max = 10
      const result = generateRandomNumber(min, max)
      
      expect(result).toBeGreaterThanOrEqual(min)
      expect(result).toBeLessThanOrEqual(max)
      expect(Number.isInteger(result)).toBe(true)
    })

    it('works with negative numbers', () => {
      const min = -10
      const max = -1
      const result = generateRandomNumber(min, max)
      
      expect(result).toBeGreaterThanOrEqual(min)
      expect(result).toBeLessThanOrEqual(max)
    })

    it('works when min equals max', () => {
      const value = 5
      const result = generateRandomNumber(value, value)
      expect(result).toBe(value)
    })
  })

  describe('shuffleArray', () => {
    it('returns array with same length', () => {
      const original = [1, 2, 3, 4, 5]
      const shuffled = shuffleArray(original)
      
      expect(shuffled).toHaveLength(original.length)
    })

    it('contains all original elements', () => {
      const original = ['a', 'b', 'c', 'd']
      const shuffled = shuffleArray(original)
      
      original.forEach(item => {
        expect(shuffled).toContain(item)
      })
    })

    it('does not mutate original array', () => {
      const original = [1, 2, 3, 4]
      const originalCopy = [...original]
      shuffleArray(original)
      
      expect(original).toEqual(originalCopy)
    })

    it('handles empty array', () => {
      const result = shuffleArray([])
      expect(result).toEqual([])
    })

    it('handles single element array', () => {
      const original = ['single']
      const result = shuffleArray(original)
      expect(result).toEqual(['single'])
    })
  })
})