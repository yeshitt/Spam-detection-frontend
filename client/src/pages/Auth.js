import React, {useState} from 'react'

function Auth() {
    const [login, setLogin] = useState(true);
  return (
    <div>
        <h2>Spam Detection Filter</h2>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo repellendus suscipit ea dolores pariatur odit assumenda debitis commodi, doloremque, iusto, id iste animi. </p>

        <div>
            <button onClick={()=> setLogin(true)}>Login</button>
            <button onClick={()=> setLogin(false)}>Sign Up</button>
            {
                login ?
                <table className="login">
                    <tr>
                        <td><label htmlFor="email">Enter Email:</label></td>
                        <td><input type="text" name="email" id="email" /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="password">Enter Password:</label></td>
                        <td><input type="text" name="password" id="password" /></td>
                    </tr>
                    <tr>
                        <td colSpan="2"><button type="submit">Login</button></td>
                    </tr>
                </table>:
                <div className="signin">
                    <tr>
                        <td><label htmlFor="name">Enter Name:</label></td>
                        <td><input type="text" name="name" id="name" /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="email">Enter Email:</label></td>
                        <td><input type="text" name="email" id="email" /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="password">Enter Password:</label></td>
                        <td><input type="text" name="password" id="password" /></td>
                    </tr>
                    <tr>
                        <td colSpan="2"><button type="submit">Sign Up</button></td>
                    </tr>
                </div>
            }
        </div> 
            
    </div>
  )
}

export default Auth