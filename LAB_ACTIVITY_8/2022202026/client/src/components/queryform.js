
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import axios from 'axios';
import Popper from 'popper.js';
import styles, { css } from 'styled-components';
import Card from 'react-bootstrap/Card';


const BACKEND_URI = "http://localhost:5001/std/";

// functional component
// functional component
const Queryform = () => {
    console.log("Queryform");

    const [data, setData] = useState('');
    const parms = {
        st_rol: sessionStorage.getItem("curr_roll")
    };

    const fetchdata = async (url) => {
        console.log(url);
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok) {
            console.log(data);
            setData(data);
        }
        else {
            console.log("error");
        }


    }
    const navigate = useNavigate();

    const navigatetologin = () => {
        navigate("/login");
        window.location.reload();
    }

    useEffect(() => {
        console.log("useEffect");
        fetchdata(BACKEND_URI + 'getquery/' + parms.st_rol);
    }, []);

    console.log(data);
    return (
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <h1>Feedbacks:-</h1>
                <Link to="/addQuery">
                    <button type="button">
                        Add New Query
                    </button>
                </Link>
                <button onClick={navigatetologin}>
                    Logout
                </button>
            </nav>
            <div>
                {data ?
                    data.data.map((item) => {
                        return (
                            // <div key={data._id}>
                            <Card style={{ width: "50rem", marginLeft: "25rem" }} key={data._id}>
                                <Card.Body>
                                    <Card.Text><b>Exam Name: </b>  {item.exam_name}</Card.Text>
                                    <Card.Text><b>Course Name: </b>{item.course_name}</Card.Text>
                                    <Card.Text><b>Question No.: </b>{item.question_num}</Card.Text>
                                    <Card.Text><b>TA Roll: </b>{item.ta_roll}</Card.Text>
                                    <Card.Text><b>Your Comment: </b>{item.std_comment}</Card.Text>
                                    <Card.Text><b>TA's Response: </b>{item.ta_comment}</Card.Text>
                                </Card.Body>
                            </Card>
                            // </div>
                        )
                    }) : <h3>No data yet</h3>}
            </div>

        </div>
    );





};



export default Queryform;