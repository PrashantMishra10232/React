import React,{useContext,useState} from 'react'
import UserContext from '../context/userContext'

function Login() {
    // const [username,setUsername] = useState("")
    // const [email,setEmail] = useState("")
    const [input,setInput] = useState("")
    const [password,setPassword] = useState("")

    const {setUser} = useContext(UserContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }
    return (
        <div>
            <h2>login</h2>
            <input type="text" 
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            placeholder='username or email'/>
            <input type="text"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='password'/>
            <button onClick={handleSubmit}>submit</button>
        </div>
    )
}

export default Login
