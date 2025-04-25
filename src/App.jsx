import React, { useState } from 'react'
import Data from './Components/data';
import List from './Components/List';

function App() {
  const [students, setStudent] = useState(Data);

  return (
    <>
      <div className='container'>
        <h3>{students.length} Students</h3>
        <List people={students} setStudent={setStudent} />
        <button className="clear" onClick={()=>setStudent([])}>Clear All</button>
      </div>
    </>
  )
}

export default App;