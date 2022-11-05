import React from 'react';
import { json } from 'react-router-dom';

const Join = () => {
    const handelAddUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const age = event.target.age.value;
        const weight = event.target.weight.value;
        const address = event.target.address.value;
        const number = event.target.number.value;
        const blood = event.target.blood.value;

        const users = { name, age, weight, address, number, blood };
        //send data to the server

        fetch('https://morning-dawn-53839.herokuapp.com/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(users),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                alert('user added successfully!!!!');
                event.target.reset();
            })

    }
    return (
        <div>
            <div class="container-fluid bg-secondary text-white">
                <div class="row text-center">
                    <div class="col-lg-12">
                        <h1 style={{ fontWeight: "bold" }} class="display-4 mt-4 py-3 font-weight-bold">JOIN US</h1>
                        <p style={{ fontWeight: "bold" }} class="font-weight-bold py-3">FEEL THE REAL PEACE</p>

                    </div>
                </div>

                <div class="card card-body bg-dark text-white">
                    <div class="card-title text-center">
                        <h3>REGISTRATION FORM</h3>
                        <p class="font-weight-light">Please fill the following information to register as voluntary
                            blood donor and become part of our vision. Kindly update your date of donation once done, so
                            that your name will be hidden automatically till next 4 Months. Also please update your
                            profile/information if in case you relocate in future</p>

                    </div>
                    <form onSubmit={handelAddUser} class="">
                        <div class="container text-center">

                            <div className='row'>
                                <div class="form-group col-md-6">
                                    <input type="name" name="name" id="name" placeholder="Name" class="form-control" />
                                </div>

                                <div class="form-group col-md-3">
                                    <input type="text" name="age" id="age" placeholder="Age" class="form-control" min="50"
                                        max="" />
                                </div>

                                <div class="form-group col-md-3">
                                    <input type="text" name="weight" id="weight" placeholder="Weight" class="form-control" />
                                </div>
                            </div>
                        </div>

                        <div class="form-row container text-center my-4 sm:my-1">
                            <div className='row'>
                                <div class="form-group col-md-6">
                                    <input type="text" name="Address" id="address" placeholder="Address" class="form-control" />
                                </div>

                                <div class="form-group col-md-3">
                                    <input type="text" name="number" id="number" placeholder="Number" class="form-control" />
                                </div>
                                <div class="form-group col-md-3">
                                    <input type="text" name="blood" id="blood" placeholder="Blood Group" class="form-control" />
                                    {/* <select class="form-control" id="bloodgroup">
                                    <option selected="">Choose Blood Group</option>
                                    <option>A+</option>
                                    <option>A-</option>
                                    <option>B+</option>
                                    <option>B-</option>
                                    <option>O+</option>
                                    <option>O-</option>
                                    <option>AB+</option>
                                    <option>AB-</option>
                                </select> */}
                                </div>
                            </div>
                        </div>

                        <input type="submit" name="submit" class="btn btn-outline-success btn-lg btn-block" />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Join;