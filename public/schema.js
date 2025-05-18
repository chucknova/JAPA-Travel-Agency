// masterInventory
const availableInventory = [
    {
        flightId: "EMIR123",
        tripType: "round-trip", // or "one-way"
        airline: {
            name: "Emirates",
            logo: "emirates-logo.png"
        },
        departure: {
            date: "2025-06-05",
            time: "07:00",
            airport: {
                code: "LOS",
                name: "Lagos Murtala Muhammed"
            }
        },
        arrival: {
            date: "2025-06-25",
            time: "06:00",
            airport: {
                code: "IAD",
                name: "Washington Dulles Intl"
            }
        },
        flightDuration: "12h 30m",

        outboundFlight: {
            stops: 1,
            stopDetails: [
                {
                    stopLocation: "London Heathrow",
                    layoverTime: "2h 30m"
                }
            ],
            legs: [
                {
                    airplane: "Boeing 787-8 Dreamliner",
                    from: {
                        code: "LOS",
                        name: "Lagos Murtala Muhammed"
                    },
                    to: {
                        code: "LHR",
                        name: "London Heathrow"
                    },
                    departureTime: "2025-06-05T07:00:00Z",
                    arrivalTime: "2025-06-05T13:30:00Z",
                    travelTime: "6h 30m"
                },
                {
                    airplane: "Boeing 787-8 Dreamliner",
                    from: {
                        code: "LHR",
                        name: "London Heathrow"
                    },
                    to: {
                        code: "IAD",
                        name: "Washington Dulles Intl"
                    },
                    departureTime: "2025-06-05T16:00:00Z",
                    arrivalTime: "2025-06-05T22:30:00Z",
                    travelTime: "6h 30m"
                }
            ]
        },

        returnFlight: {
            stops: 1,
            stopDetails: [
                {
                    stopLocation: "Dubai",
                    layoverTime: "2h 00m"
                }
            ],
            legs: [
                {
                    airplane: "Boeing 777",
                    from: {
                        code: "IAD",
                        name: "Washington Dulles Intl"
                    },
                    to: {
                        code: "DXB",
                        name: "Dubai International"
                    },
                    departureTime: "2025-06-20T10:00:00Z",
                    arrivalTime: "2025-06-20T18:00:00Z",
                    travelTime: "8h"
                },
                {
                    airplane: "Boeing 777",
                    from: {
                        code: "DXB",
                        name: "Dubai International"
                    },
                    to: {
                        code: "LOS",
                        name: "Lagos Murtala Muhammed"
                    },
                    departureTime: "2025-06-21T08:00:00Z",
                    arrivalTime: "2025-06-21T14:00:00Z",
                    travelTime: "6h"
                }
            ]
        },

        cabin: "Economy",
        travelBaggageAddons: [
            "Seat choice included",
            "Carry-on bag included"
        ],
        fareBreakdown: [
            "Seat choice included",
            "Personal item included",
            "Carry-on bag included",
            "2 checked bags included (50 lbs each)",
            "No refunds"
        ],
        pricing: {
            currency: "NGN",
            amount: 150000
        }
    },

    // Add one-way flight for example
    {
        flightId: "DL100",
        tripType: "one-way",
        airline: {
            name: "Delta Airlines",
            logo: "delta-logo.png"
        },
        departure: {
            date: "2025-06-10",
            time: "09:00",
            airport: {
                code: "ACC",
                name: "Accra Kotoka Intl"
            }
        },
        arrival: {
            date: "2025-06-10",
            time: "17:00",
            airport: {
                code: "JFK",
                name: "New York JFK"
            }
        },
        flightDuration: "10h",
        outboundFlight: {
            stops: 0,
            stopDetails: [],
            legs: [
                {
                    airplane: "Airbus A350",
                    from: {
                        code: "ACC",
                        name: "Accra Kotoka Intl"
                    },
                    to: {
                        code: "JFK",
                        name: "New York JFK"
                    },
                    departureTime: "2025-06-10T09:00:00Z",
                    arrivalTime: "2025-06-10T17:00:00Z",
                    travelTime: "10h"
                }
            ]
        },
        cabin: "Business",
        travelBaggageAddons: [
            "Priority boarding",
            "Carry-on bag included",
            "Lounge access"
        ],
        fareBreakdown: [
            "Seat choice included",
            "2 checked bags",
            "Full refund available before 24h"
        ],
        pricing: {
            currency: "USD",
            amount: 1200
        }
    }
];

console.log(availableInventory);


// Passenger Count
const passengers = {
    Adults: 2,
    Children: 1,
    Infants: 1
};

//Passenger Details
const passengerDetails = {
    mainDetails: [
        {
            travelerType: 'Adult',
            title: 'Mr.',
            firstName: 'John',
            lastName: 'Doe',
            middleName: 'Paul',
            dob: '1985-05-20',
            gender: 'male'
        },
        {
            travelerType: 'Adult',
            title: 'Mr.',
            firstName: 'John',
            lastName: 'Doe',
            middleName: 'Paul',
            dob: '1985-05-20',
            gender: 'male'
        },
        {
            travelerType: 'Adult',
            title: 'Mr.',
            firstName: 'John',
            lastName: 'Doe',
            middleName: 'Paul',
            dob: '1985-05-20',
            gender: 'male'
        }
    ],
    contactDetails: {
        countryCode: '+234',
        emailAddress: "akinbotetemiloluwa9@gmail.com",
        phoneNumber: "07014016009"
    }
};

// Fare Details
const fareSummary = {
    selectedFlightId: 'JAPA1234',
    noOfPassengers: 3,
    flightsTotalPrice: 1400,
    totalTaxesAndFees: 300,
    totalPrice: 1700,
    currency: 'NGN',
    grandTotal: 1880
};

// User Searches for Flights
const flightSearchQuery = {
    tripType: 'round-trip', // 'one-way' or 'round-trip'
    departureAirport: 'LOS', // IATA code
    departureAirportName: 'Lagos, Nigeria',
    destinationAirport: 'JFK',
    destinationAirportName: 'New York, USA',
    departureDate: '23/05/2025',
    returnDate: '28/05/2025',
    cabinClass: 'economy', // economy, business, first
};

// Booking Session
const flightBookingSession = {
    flightSearchQuery,
    passengers,
    passengerDetails, 
    fareSummary
};

console.log(flightBookingSession);