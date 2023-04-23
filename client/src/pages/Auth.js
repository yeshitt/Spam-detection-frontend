import React, {useState} from 'react'

function Auth() {
    const [doLogin, setDoLogin] = useState(true);
  return (
    <div>
        <h2>Spam Detection Filter</h2>
        <p>  
            ?? Description of site goes here ??
        </p>

        <div>
            <button onClick={()=> setDoLogin(true)}>Login</button>
            <button onClick={()=> setDoLogin(false)}>Sign Up</button>
            {
                doLogin ?
                <table className="login">
                    <tbody>
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
                    </tbody>
                </table>:
                <table className="signin">
                    <tbody>
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
                    </tbody>
                </table>
            }
        </div> 
            
    </div>
  )
}

export default Auth