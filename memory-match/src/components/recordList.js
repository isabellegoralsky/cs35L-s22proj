import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom/client';

import {
    BrowserRouter as Router, Routes,
    Route
} from "react-router-dom";


const Record = (props) => (
    <tr>
        <td>{props.record.comment}</td>
        <td>{props.record.likes}</td>
        <td>
            <button className="btn btn-link" onClick={() => { props.like(props.record._id); }}>
                Like
            </button> |
            <button className="btn btn-link" onClick={() => { props.dislike(props.record._id); }}>
                Dislike
            </button>
        </td>
    </tr>
);

export default function RecordList() {
    const [records, setRecords] = useState([]);
    const [form, setForm] = useState({
        comment: "",
        likes: 0,
    });
    

    // This method fetches the records from the database, sorted by most popular or least popular, based on sortvalue.
    useEffect(() => {
        async function getRecords() {
            const response2 = await fetch(`http://localhost:5000/getsortval/62965c89e9db9752ab76301f`,
                {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
            const valObj = await response2.json();
            const sortValue = valObj.sortval;
            const response = await fetch(`http://localhost:5000/record/`);
                if (!response.ok) {
                    const message = `An error occurred: ${response.statusText}`;
                    window.alert(message);
                    return;
                }
            const records = await response.json();
            if (sortValue == 1) {
                records.reverse();
            }
            setRecords(records);
        }
        getRecords();
        return;
    }, [records.length]);



    async function like(id) {
        const response = await fetch(`http://localhost:5000/record/${id}`,
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                },
            });
        const rec = await response.json();

        const newRec = {
            comment: rec.comment,
            likes: rec.likes + 1,
        };

       await fetch(`http://localhost:5000/update/${id}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRec),
       }).then(window.location.reload());

    }

    async function dislike(id) {
        const response = await fetch(`http://localhost:5000/record/${id}`,
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                },
            });
        const rec = await response.json();

        const newRec = {
            comment: rec.comment,
            likes: rec.likes - 1,
        };

        await fetch(`http://localhost:5000/update/${id}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRec),
        }).then(window.location.reload());
    }


    async function setSortVal(newVal) {
        const newObj = {
            sortval: newVal
        };
        await fetch(`http://localhost:5000/update/sortval/62965c89e9db9752ab76301f`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newObj),
        }).then(window.location.reload());
    }

    // This method will map out the records on the table
    function recordList() {
        return records.map((record) => {
            return (
                <Record
                    record={record}
                    like={() => like(record._id)}
                    dislike={() => dislike(record._id)}
                    key={record._id}
                />
            );
        });
    }

    class NavBar extends React.Component {
        render() {
            return (
                <nav>
                    <div><img className="navlogo" src="memmatch35L.svg" alt="library" width="100" height="60" /></div>
                    <ul class="nav-items">
                        <Router><a href={`/`}><li class="nav-item">HOME</li></a></Router>
                        <Router><a href={`/game`}><li class="nav-item">GAME</li></a></Router>
                        <Router><a href={`/comments`}> <li class="nav-item">COMMENTS/CONCERNS</li></a></Router>
                        <Router><a href={`/library`}> <li class="nav-item">LIBRARY</li></a></Router>
                    </ul>
                </nav>
            )
        }
    }
    // This following section will display the table with the records of individuals.

    class MainPage extends React.Component {
        constructor(props) {
            super(props);
            this.state = { value: ''};

            this.handleChange = this.handleChange.bind(this);
            this.onSubmit = this.onSubmit.bind(this);  
        }

        handleChange(event) {
            this.setState({ value: event.target.value });
        }
    

    // This function will handle the submission.
    async onSubmit(e) {
        e.preventDefault();

        // When a post request is sent to the create url, we'll add a new record to the database.
        const newPerson = {
            comment: this.state.value,
            likes: 0,
        };

        await fetch("http://localhost:5000/record/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPerson),
        })
            .catch(error => {
                window.alert(error);
                return;
            });

        setForm({ comment: "", likes: 0 });
        window.location.reload();
    }
        render() {
            return (
                <div>
                    <div className="navigation-div"> <NavBar /> </div>
                    <div className="comments">
                    <h3 className="play">Comments and Concerns</h3>
                    <div>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="comment">Leave a Comment!</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="comment"
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group2">
                                <input
                                    type="submit"
                                    value="Submit"
                                    className="btn btn-primary"
                                />
                            </div>
                        </form>
                    </div>
                    </div>
                    <table className="table table-striped" style={{ marginTop: 70}}>
                        <thead>
                            <tr>
                                <th><span className="deets">Comment</span></th>
                                <th>Likes</th>
                                <th>Action</th>

                            </tr>

                        </thead>
                        <tbody>{recordList()}</tbody>
                        <p className="sorts">
                            <span className="deets">Sort by:</span>
                            <button className="btn btn-link" onClick={() => { setSortVal(0); }}>
                                Most Popular
                            </button> |
                            <button className="btn btn-link" onClick={() => { setSortVal(1); }}>
                                Least Popular
                            </button>
                        </p>
                    </table>
                </div>
            );
        }
    }
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<MainPage />);

}

