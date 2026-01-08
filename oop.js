class Flight {
    constructor(flightName, airline, flightNumber,
        maximumNumberOfPassengers, regularTicketPrice, VIPTicketPrice) {
        this.flightName = flightName
        this.airline = airline,
            this.flightNumber = flightNumber,
            this.maximumNumberOfPassengers = maximumNumberOfPassengers,
            this.regularTicketPrice = regularTicketPrice,
            this.VIPTicketPrice = VIPTicketPrice,
            this.ticketsList = []
    }
}

class Passenger {
    constructor(name, IDNumber, amountOfMoney) {
        this.name = name
        this.IDNumber = IDNumber
        this.amountOfMoney = amountOfMoney
    }
}
class StudentPassenger extends Passenger {
    constructor(name, IDNumber, amountOfMoney, schoolOrUniversityName) {
        super(name, IDNumber, amountOfMoney)
        this.schoolOrUniversityName = schoolOrUniversityName
    }
}
class RegularPassenger extends Passenger {
    constructor(name, IDNumber, amountOfMoney, Workplace, knowsAnAirportEmployee) {
        super(name, IDNumber, amountOfMoney)
        this.Workplace = Workplace
        this.knowsAnAirportEmployee = knowsAnAirportEmployee
    }
}

class Ticket {
    constructor(price, ownerName) {
        this.ticketNumber = Math.floor(Math.random() * 1000)
        this.price = price
        this.ownerName = ownerName
    }
}

class RegularTicket extends Ticket { }

class VIPTicket extends Ticket { }

function createTickets(flight) {
    for (let i = 0; i < 9; i++) {
        flight.ticketsList.push(new Ticket(100))
    }
    flight.ticketsList.push(new Ticket(200))
}

class Airport {
    constructor() {
        this.flight1 = new Flight("flight1", "analiza", 1, 10, 100, 200)
        this.flight2 = new Flight("flight2", "analiza", 2, 10, 100, 200)
        this.flight3 = new Flight("flight3", "analiza", 3, 10, 100, 200)
        createTickets(this.flight1)
        createTickets(this.flight2)
        createTickets(this.flight3)
    }
}

const a = new Airport()
console.log(a.flight2);
