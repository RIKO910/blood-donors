import React, { useEffect, useState } from 'react';
import './Donors.css'

const Donors = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {

        fetch('https://morning-dawn-53839.herokuapp.com/user')
            .then(res => res.json())
            .then(data => setUsers(data))

    }, []);
    // {
    //     users.map(user => <p>{user.name}</p>)
    // }
    return (
        <div>
            <h2>Available Donors: {users.length}</h2>
            <div class=" table overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Weight</th>
                            <th>Address</th>
                            <th>Number</th>
                            <th>Blood Group</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((a, index) => <tr key={a._id}>
                                <th>{index + 1}</th>
                                <td>{a.name}</td>
                                <td>{a.age}</td>
                                <td>{a.weight}</td>
                                <td>{a.address}</td>
                                <td>{a.number}</td>
                                <td>{a.blood}</td>  
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Donors;