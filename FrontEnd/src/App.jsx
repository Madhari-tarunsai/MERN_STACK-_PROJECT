import React from 'react'
import Upadate from './Donation/Upadate/Upadate'
import Delete from './Donation/Delete/Delete'

const App = () => {
  return (
    <div>
      <h1>Donation Management</h1>
      <Upadate/>
      <Delete/>
    </div>
  )
}

export default App