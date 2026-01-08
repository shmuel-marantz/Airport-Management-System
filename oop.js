import { test } from 'node:test'
import assert from "node:assert"

function myTest() {
    test("return correct output when given a valid inpu", () => {
        assert.equal(() => { })
    })
}




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
    buyTicket(ticketType, flight) {
        if (ticketType === "regular") {
            if (this.amountOfMoney < flight.regularTicketPrice * 0.9) return false;
            this.amountOfMoney -= flight.regularTicketPrice * 0.9;
            flight.ticketsList.forEach((t) => {
                if (!t.ownerName && !t.benefitsList) { t.ownerName = this.name; return }
            })
        } if (ticketType === "VIP") {
            if (this.amountOfMoney < flight.VIPTicketPrice) return false;
            this.amountOfMoney -= flight.regularTicketPrice;
            flight.ticketsList.forEach((t) => {
                if (!t.ownerName && t.benefitsList) { t.ownerName = this.name; return }
            })
        }
    }
}

class RegularPassenger extends Passenger {
    constructor(name, IDNumber, amountOfMoney, Workplace, knowsAnAirportEmployee) {
        super(name, IDNumber, amountOfMoney)
        this.Workplace = Workplace
        this.knowsAnAirportEmployee = knowsAnAirportEmployee
    }
    buyTicket(ticketType, flight) {
        if (this.knowsAnAirportEmployee === true) {
            if (ticketType === "regular") {
                if (this.amountOfMoney < flight.regularTicketPrice * 0.8) return false;
                this.amountOfMoney -= flight.regularTicketPrice * 0.8;
                flight.ticketsList.forEach((t) => {
                    if (!t.ownerName && !t.benefitsList) { t.ownerName = this.name; return }
                })
            } if (ticketType === "VIP") {
                if (this.amountOfMoney < flight.VIPTicketPrice * 0.85) return false;
                this.amountOfMoney -= flight.regularTicketPrice * 0.85;
                flight.ticketsList.forEach((t) => {
                    if (!t.ownerName && t.benefitsList) { t.ownerName = this.name; return }
                })
            }
        } else {
            if (ticketType === "regular") {
                if (this.amountOfMoney < flight.regularTicketPrice) return false;
                this.amountOfMoney -= flight.regularTicketPrice;
                flight.ticketsList.forEach((t) => {
                    if (!t.ownerName && !t.benefitsList) { t.ownerName = this.name; return }
                })
            } if (ticketType === "VIP") {
                if (this.amountOfMoney < flight.VIPTicketPrice) return false;
                this.amountOfMoney -= flight.regularTicketPrice;
                flight.ticketsList.forEach((t) => {
                    if (!t.ownerName && t.benefitsList) { t.ownerName = this.name; return }
                })
            }
        }
    }
}

class Ticket {
    constructor(price, ownerName) {
        this.ticketNumber = Math.floor(Math.random() * 1000)
        this.price = price
        this.ownerName = ownerName
    }
}

class VIPTicket extends Ticket {
    constructor(price, ownerName) {
        super(ticketNumber, price, ownerName)
        this.benefitsList = [freeAlcohol, freeFood, hotTowels]
    }
}

function createTickets(flight) {
    for (let i = 0; i < 9; i++) {
        flight.ticketsList.push(new Ticket(100))
    }
    flight.ticketsList.push(new VIPTicket(200))
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

const airport = new Airport()
const regularPassenger = new RegularPassenger("dan", 1, 1000, "#1", true)
const studentPassenger = new StudentPassenger("gad", 2, 1000, "#2")
regularPassenger.buyTicket("regular", airport.flight1)
studentPassenger.buyTicket("VIP", airport.flight1)



console.log(airport.flight1);
