import axios from 'axios'
import React from 'react'

export default function Loginform(props) {
    const [user, setuser] = React.useState('')
    const [password, setpassword] = React.useState('')
    const [error, seterror] = React.useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const authObject = { 'Project-ID': 'cce34405-7282-440e-9c11-38a87241515f', 'User-Name': user, 'User-Secret': password }

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject })
            localStorage.setItem('username', user)
            localStorage.setItem('password', password)

            window.location.reload()
        } catch (error) {
            seterror('Ooops thats not right , Try Again')



        }
    }

    return (
        <>
            <div className="wrapper">
                <div className="form">
                    <div className="title">
                        <h1>Chat Application</h1>
                        <form onSubmit={handleSubmit}>
                            <input required type="text" placeholder="Username" className="input" value={user} onChange={(e) => setuser(e.target.value)} />
                            <input required type="password" className="input" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} />

                            <div align="center">

                            </div>
                            <button type="submit" className="button" >
                                <span>Start Chatting</span>
                            </button>

                            <h2 className="error">
                                {error}
                            </h2>


                        </form>

                    </div>
                </div>

            </div>
        </>
    )
}
