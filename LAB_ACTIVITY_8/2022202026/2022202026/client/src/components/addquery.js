
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';

const BACKEND_URI = "http://localhost:5001/std/";

// functional component

function Addquery(props) {

    const [exam_name, setQuery] = useState("");
    const [course_name, setCname] = useState("");
    const [question_num, setQnum] = useState("");
    const [ta_roll, setTa_roll] = useState("");
    const [ta_name, setTa_name] = useState("");
    const [std_comment, setComment] = useState("");
    const [std_roll, setRoll] = useState("");
    const navigate = useNavigate();


    const navigateToqueryForm = () => {
        navigate('/queryform');
    }
    const st_roll = sessionStorage.getItem("curr_roll");

    return (
        <div className="center-div">
            <h1 className='text-center'>Add Querry</h1>
            <form className='form-group'>
                <label className='m-2 form-label'>Exam Name : </label>
                <br />
                <input className='m-2 form-control' type="text" name="exam_name" value={exam_name} onChange={(e) => setQuery(e.target.value)} />
                <br />
                <label className='m-2 form-label'>Course Name : </label>
                <br />
                <input className='m-2 form-control' type="text" name="course_name" value={course_name} onChange={(e) => setCname(e.target.value)} />
                <br />
                <label className='m-2 form-label'>Question Number : </label>
                <br />
                <input className='m-2 form-control' type="text" name="question_num" value={question_num} onChange={(e) => setQnum(e.target.value)} />
                <br />
                <label className='m-2 form-label'>TA Roll Number : </label>
                <br />
                <input className='m-2 form-control' type="text" name="ta_roll" value={ta_roll} onChange={(e) => setTa_roll(e.target.value)} />
                <br />
                <label className='m-2 form-label'>TA Name : </label>
                <br />
                <input className='m-2 form-control' type="text" name="ta_name" value={ta_name} onChange={(e) => setTa_name(e.target.value)} />
                <br />
                <label className='m-2 form-label'>Comment : </label>
                <br />
                <input className='m-2 form-control' type="text" name="std_comment" value={std_comment} onChange={(e) => setComment(e.target.value)} />
                <br />
            </form>

            <button className='btn btn-primary position-relative start-50 translate-middle-x' onClick={async (e) => {
                // send fetch (POST) request to server
                console.log(st_roll);
                setRoll(st_roll);
                var p = JSON.stringify({ exam_name: exam_name, course_name: course_name, question_num: question_num, ta_roll: ta_roll, std_roll: st_roll, ta_comment: "abcd", std_comment: std_comment, IsActive: true });
                console.log(p);
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ exam_name: exam_name, course_name: course_name, question_num: question_num, ta_roll: ta_roll, std_roll: st_roll, ta_comment: "ab", std_comment: std_comment, IsActive: true })
                }
                const response = await fetch(BACKEND_URI + 'addquery', requestOptions);
                const data = await response;
                console.log(data);
                //setInput("");
                setQuery("");
                setCname("");
                setQnum("");
                setTa_roll("");
                if (response.ok)
                    alert("Query Added Successfully");
                else
                    alert("Query Not Added:Check Details and try again");
                navigateToqueryForm();
            }}>Post</button>
        </div>
    );


}





export default Addquery;