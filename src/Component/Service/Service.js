import React from 'react';
import { Card } from 'react-bootstrap';
import p1 from '../../img/bd.jpg'
import p2 from '../../img/rg.jpg'
import p3 from '../../img/scr.jpg'
const Service = () => {
    return (
        <div class="bg-secondary ">
            <h1 style={{ fontWeight:"bold" }} class="py-2 mt-4 text-white display-4 font-weight-bold">DONATION PROCESS</h1>
            <h3 class="font-weight-normal py-4 text-white">The donation process from the time you arrive center until the time you leave</h3>
            <div class="row text-center  text-white">
			<div class="col-lg-4">
				
				<div class="card bg-dark">
  				<img class="card-img-top" src={p1} alt="Card image cap"style={{height: "200px"}}/>
  				<div class="card-body">
    				<h5 class="card-title">REGISTRATION</h5>
    				<p class="card-text">You need to complete a very simple registration form. Which contains all required contact information to enter in the donation process.</p>

  				</div>
				</div>

			</div>

			<div class="col-lg-4">
				
				<div class="card bg-dark">
  				<img class="card-img-top" src={p2} alt="Card image cap"style={{height: "200px"}}/>
  				<div class="card-body">
    				<h5 class="card-title">SCREENING</h5>
    				<p class="card-text">A drop of blood from your finger will take for simple test to ensure that your blood iron levels are proper enough for donation process.</p>

  				</div>
				</div>

			</div>

			<div class="col-lg-4">
				
				<div class="card bg-dark" >
  				<img class="card-img-top" src={p3} alt="Card image cap" style={{height: "200px"}}/>
  				<div class="card-body">
    				<h5 class="card-title">DONATION</h5>
    				<p class="card-text">After ensuring and passed screening test successfully you will be directed to a donor bed for donation. It will take only 6-10 minutes.</p>

  				</div>
				</div>

			</div>
		</div>
            {/* <div class="container text-center">
                <div className='row '>
                    <Card className='col' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={p1} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='col mx-5' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={p2} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='col ' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={p3} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div> */}
        </div>

    );
};

export default Service;