import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <section>
          <h1 className='bg-blue-700 text-3xl text-white'>Bill Tracker</h1>
        </section>
      </main>
    </>
  )
}

export default App
