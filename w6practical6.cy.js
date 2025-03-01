const baseUrl = "https://restful-booker.herokuapp.com";

describe('Restful Booker POST & GET', () => {

  let bookingid;  // Declare bookingid at the top for sharing between tests

  it('POST-Create Token', function () {
    // User credentials for authentication taken from Restful Booker
    var tokenID = {
      "username": "admin",
      "password": "admin123"
    };

    // Sending a POST request to create a token
    cy.request("POST", `${baseUrl}/auth`, tokenID).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('token');  // default key word from json script (token)
      cy.log("Token:", response.body.token);
    });
  });

  it('POST-Create Booking', function () {
    // Booking data
    var Booking = {
      "firstname": "Pavi",
      "lastname": "ravi",
      "totalprice": 2500,
      "depositpaid": true,
      "bookingdates": {
        "checkin": "2025-03-01",
        "checkout": "2025-03-03"
      },
      "additionalneeds": "Lunch"
    };

    // Sending a POST request to create a booking
    cy.request("POST", `${baseUrl}/booking`, Booking).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('bookingid');  // Ensure booking ID is returned
      bookingid = response.body.bookingid;  // Store booking ID for later use
      cy.log("Booking ID:", bookingid);

      // Validate response body
      expect(response.body.booking.firstname).to.eq('Pavi');
      expect(response.body.booking.lastname).to.eq('ravi');
      expect(response.body.booking.totalprice).to.eq(2500);
      expect(response.body.booking.depositpaid).to.eq(true);
      expect(response.body.booking.bookingdates.checkin).to.eq('2025-03-01');
      expect(response.body.booking.bookingdates.checkout).to.eq('2025-03-03');
      expect(response.body.booking.additionalneeds).to.eq('Lunch');
    });
  });

  it('GET-Get Booking data', function () {
    cy.request('GET', `${baseUrl}/booking/${bookingid}`).then((response) => {
      expect(response.status).to.eq(200);

      // Validate the booking details
      expect(response.body.firstname).to.eq('Pavi');
      expect(response.body.lastname).to.eq('Ravi');
      expect(response.body.totalprice).to.eq(2500);
      expect(response.body.depositpaid).to.eq(true);
      expect(response.body.bookingdates.checkin).to.eq('2025-03-01');
      expect(response.body.bookingdates.checkout).to.eq('2025-03-03');
      expect(response.body.additionalneeds).to.eq('Lunch');
    });
  });

  it('GET-GetBookingId', function () {
    cy.request('GET', `${baseUrl}/booking/${bookingid}`).then((Response) => {
        expect(Response.status).equal(200)
        cy.log("Booking ID:", bookingid);   // To get the booking id
    })

})

it('GET-Get specific data', function () {
    cy.request('GET', `${baseUrl}/booking?firstname=Pavi&lastname=ravi`).then((Response) => {  // validate by specific data "firstname=Preethi&lastname=Srinivasan"
        expect(Response.status).equal(200)   
        cy.log(JSON.stringify(Response))        // To log the entire response
    })
})
})