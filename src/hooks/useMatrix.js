import { useState } from "react"
import { setMatrixValue, createMatrix } from '../matrix.helpers'

export const useMatrix = (defaultMatrix) => {
  const [matrix, setState] = useState(defaultMatrix)

  const setMatrix = (line, row, value) => (
    setState(setMatrixValue(matrix, value, line, row))
  )

  const resetMatrix = (size, val) => setState(createMatrix(size, val))

  return [matrix, setMatrix, resetMatrix]
}
