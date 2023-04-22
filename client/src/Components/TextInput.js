import React from 'react'

function TextInput() {
  return (
    <div>
        <table>
            <tr>
                <td> Enter Source Number/E-mail address: </td>
                <td> <input type="text" name="source" id="source" /> </td>
            </tr>
            <tr>
                <td> Enter Message: </td>
                <td> <input type="text" name="message" id="message" /> </td>
            </tr>

            <button type="submit">Submit</button>
        </table>
    </div>
  )
}

export default TextInput