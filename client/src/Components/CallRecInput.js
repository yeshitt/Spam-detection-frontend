import React from 'react'

function CallRecInput() {
  return (
    <div>
      <table>
        <tr>
          <td><label htmlFor="number">Enter Phone Number:</label></td>
          <td><input type="text" name="number" id="number" /></td>
        </tr>
        <tr>
          <td><label htmlFor="callRec">Enter Recording:</label></td>
          <td><input type="file" accept=".mp3" /></td>
        </tr>
        <tr>
          <td colSpan={2}><button type="submit">Submit</button></td>
        </tr>
      </table>
    </div>
  )
}

export default CallRecInput