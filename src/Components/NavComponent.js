import '../assests/styles/nav.css'
import {BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom'
function Login()
{
    return(
        <div style={{
            marginLeft: '20%',
            backgroundColor: 'black',
            color: 'white',
            padding: '100px',
            width: '200px',
            borderRadius: '30px',
            marginTop:'20px',
            marginRight:'20%',
        
        }}>
            <h3>LOG IN</h3>
            <form style={{marginRight:"50%"
            }}>
                <label>Username:
                    <input type="text" />
                </label><br></br>
                <label>Password:
                    <input type="password" />
                </label>
            </form><br></br>
            <button>CONFIRM</button>
        </div>
    )
}
function Home()
{
    return(
        <div className='ebook'>
            <h1> E-BOOKS </h1>
        </div>
    )
}
function  Register()
{
    return(
        <div style={{
            marginLeft: '20%',
            backgroundColor: 'black',
            color: 'white',
            padding: '100px',
            width: '230px',
            borderRadius: '30px',
            marginTop:'20px',
            marginRight:'20%',
        
        }}>
            <h3>REGISTRATION</h3>
            <form>
                <label>Name:
                    <input type="text" />
                </label><br></br>
                <label>Age:
                    <input type="text" />
                </label>
                <br></br>
            <label>Address:
                <input type="text" />
            </label>
            <br></br>
            <label>
                Email:
                <input type="text" />
            </label>
            </form><br></br>
            <button>Confirm Registration</button>
        </div>
    )
}
function Navbar()
{
    return (
        <Router>

            <nav>
                <ul>
                    <li className='active'><Link to='/' className='link'>HOME</Link></li>
                    <li className='active'><Link to='/login' className='link'>LOGIN</Link></li>
                    <li className='active'><Link to='/register'className='link'>REGISTER</Link></li>

                </ul>
            </nav>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/login' element={<Login/>} />
                <Route exact path='/register' element={<Register/>} />
            </Routes>
        </Router>
    )
}
export default Navbar;