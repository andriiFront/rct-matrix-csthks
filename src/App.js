import { createMatrix } from './matrix.helpers.js'
import { useMatrix } from './hooks/useMatrix.js'

const defaultMatrix = createMatrix(4, 0)

function App() {
  const [matrix, setMatrix] = useMatrix(defaultMatrix)

  return (
    <>
      {matrix.map((row, i) => (
        <div key={i}>
          {row.map((v, k) => (
            <button key={k} onClick={() => setMatrix(i, k, ++v)}>
              {v}
            </button>
          ))}
        </div>
      ))}
    </>
  );
}

export default App;
