import React from 'react';

const Join = () => {
    return (
        <div>
            <div class="container-fluid bg-secondary text-white">
                <div class="row text-center">
                    <div class="col-lg-12">
                        <h1 style={{ fontWeight:"bold" }}  class="display-4 mt-4 py-3 font-weight-bold">JOIN US</h1>
                        <p style={{ fontWeight:"bold" }}  class="font-weight-bold py-3">FEEL THE REAL PEACE</p>

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
                    <form class="">
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
                                <input type="text" name="number" id="number" placeholder="Number" class="form-control"
                                    maxlength="11" />
                            </div>
                            <div class="form-group col-md-3">
                                <select class="form-control" id="bloodgroup">
                                    <option selected="">Choose Blood Group</option>
                                    <option>A+</option>
                                    <option>A-</option>
                                    <option>B+</option>
                                    <option>B-</option>
                                    <option>O+</option>
                                    <option>O-</option>
                                    <option>AB+</option>
                                    <option>AB-</option>
                                </select>
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