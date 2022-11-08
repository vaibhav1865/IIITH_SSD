import { useState } from 'react';
import { Link } from 'react-router-dom';


const BACKEND_URI = "http://localhost:5001/api/";

// functional component
function SignUpForm(props) {
    const [rollnumber, setrollnumber] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    return (
        <div className="center-div">
            <h1 className='text-center'>Sign Up</h1>
            <form className='form-group'>
                <label className='m-2 form-label'>Roll Number </label>
                <br />
                <input className='m-2 form-control' type="text" name="rollnumber" value={rollnumber} onChange={(e) => setrollnumber(e.target.value)} />
                <br />
                <label className='m-2 form-label'>Password : </label>
                <br />
                <input className='m-2 form-control' type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <label className="m-2 form-label">Role:</label>
                <select className='m-2 form-control' name="role" value={role} onChange={(e) => setRole(e.target.value)}>

                    <option value="Student" onChange={(e) => setRole(e.target.value)} >Student</option>
                    <option value="TA">TA</option>
                </select>
                <br />
            </form>
            <button className='btn btn-primary position-relative start-50 translate-middle-x' onClick={async (e) => {
                // send fetch (POST) request to server
                console.log(rollnumber, password, role);
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ rollnumber: rollnumber, password: password, role: role })
                };
                console.log("here");
                var res = await fetch(BACKEND_URI + "register", requestOptions);
                var data = await res.json();
                alert(data["msg"]);
            }}>Sign Up</button>
            <br />
            <p className='m-4'>Already Registered ? <Link to='/login'> Login Here</Link></p>
        </div>);
}






export default SignUpForm;