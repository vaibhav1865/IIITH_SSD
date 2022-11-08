
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';

const BACKEND_URI = "http://localhost:5001/api/";

// functional component
function LoginForm(props) {
    const [rollnumber, setRollno] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const navigate = useNavigate();

    const navigateToProfile = () => {
        navigate('/QueryForm');
    }


    return (
        <div className="center-div">
            <h1 className='text-center'>Re-Eval Portal</h1>
            <form className='form-group'>
                <label className='m-2 form-label'>Roll Number:</label>
                <br />
                <input className='m-2 form-control' type="text" name="rollnumber" value={rollnumber} onChange={(e) => setRollno(e.target.value)} />
                <br />
                <label className='m-2 form-label'>Password : </label>
                <br />
                <input className='m-2 form-control' type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />

                <label className="m-2 form-label">Role:</label>
                <select className='m-2 form-control' name="role" value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="Select"> Select Role</option>
                    <option value="Student" onChange={(e) => setRole(e.target.value)}>Student</option>
                    <option value="TA" onChange={(e) => setRole(e.target.value)}>TA</option>
                </select>
                <br />

            </form>
            <button className='btn btn-primary position-relative start-50 translate-middle-x' onClick={async (e) => {
                // send fetch (POST) request to server
                console.log(rollnumber, password, role);
                const requestOptions = {
                    crendentials: 'include',
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ rollnumber: rollnumber, password: password, role: role })
                };

                var res = await fetch(BACKEND_URI + "login", requestOptions);
                var data = await res.json();
                alert(data["msg"]);
                setRollno("");
                setPassword("");
                setRole("");
                if (res.status == 200) {
                    sessionStorage.setItem("curr_roll", rollnumber);
                    sessionStorage.setItem("curr_role", role);
                    navigateToProfile();
                }


            }}>Login</button>
            <br />
            <p className='m-4'>Not Registered ? <Link to='/signup'> Sign Up Here</Link></p>
        </div>);



}

export default LoginForm;