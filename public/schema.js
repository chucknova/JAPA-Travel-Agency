// masterInventory
const availableInventory = [
    {
        flightId: "EMIR123",
        tripType: "round-trip",
        airline: {
            name: "Emirates",
            logo: "emirates-logo.png"
        },
        departure: {
            date: "30 May 2025",
            time: "9:45 PM",
            airport: {
                code: "LOS",
                name: "Lagos Murtala Muhammed"
            }
        },
        arrival: {
            date: "31 May 2025",
            time: "3:15 PM",
            airport: {
                code: "IAD",
                name: "Washington Dulles Intl"
            }
        },

        outboundFlight: {
            flightDuration: "18h 30m",
            stops: 1,
            stopDetails: [
                {
                    stopLocation: "Dubai International",
                    layoverTime: "3h 45m"
                }
            ],
            legs: [
                {
                    airplane: "Boeing 777",
                    from: {
                        code: "LOS",
                        name: "Lagos Murtala Muhammed"
                    },
                    to: {
                        code: "DXB",
                        name: "Dubai International"
                    },
                    departureDate: "30 May 2025",
                    departureTime: "9:45 PM",
                    arrivalDate: "31 May 2025",
                    arrivalTime: "06:00 AM",
                    travelTime: "6h 15m"
                },
                {
                    airplane: "Boeing 777",
                    from: {
                        code: "DXB",
                        name: "Dubai International"
                    },
                    to: {
                        code: "IAD",
                        name: "Washington Dulles Intl"
                    },
                    departureDate: "31 May 2025",
                    departureTime: "09:45 AM",
                    arrivalDate: "31 May 2025",
                    arrivalTime: "3:15 PM",
                    travelTime: "13h 30m"
                }
            ]
        },

        returnFlight: {
            flightDuration: "18h 45m",
            stops: 1,
            stopDetails: [
                {
                    stopLocation: "Dubai International",
                    layoverTime: "3h 00m"
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
                    departureDate: "10 Jun 2025",
                    departureTime: "10:30 AM",
                    arrivalDate: "12 Jun 2025",
                    arrivalTime: "7:15 PM",
                    travelTime: "12h 45m"
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
                    departureDate: "12 Jun 2025",
                    departureTime: "10:15 PM",
                    arrivalDate: "13 Jun 2025",
                    arrivalTime: "02:00 PM",
                    travelTime: "7h 45m"
                }
            ]
        },

        cabinAvailability: {
            economy: {
                totalSeats: 180,
                availableSeats: 30,
                price: {
                    currency: "NGN",
                    amount: 150000
                }
            },
            business: {
                totalSeats: 24,
                availableSeats: 8,
                price: {
                    currency: "NGN",
                    amount: 450000
                }
            },
            firstclass: {
                totalSeats: 8,
                availableSeats: 2,
                price: {
                    currency: "NGN",
                    amount: 850000
                }
            }
        },
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
        ]
    },

    {
        flightId: "EMIR123",
        tripType: "round-trip",
        airline: {
            name: "Emirates",
            logo: "emirates-logo.png"
        },
        departure: {
            date: "30 May 2025",
            time: "9:45 PM",
            airport: {
                code: "LOS",
                name: "Lagos Murtala Muhammed"
            }
        },
        arrival: {
            date: "31 May 2025",
            time: "3:15 PM",
            airport: {
                code: "IAD",
                name: "Washington Dulles Intl"
            }
        },

        outboundFlight: {
            flightDuration: "18h 30m",
            stops: 1,
            stopDetails: [
                {
                    stopLocation: "Dubai International",
                    layoverTime: "3h 45m"
                }
            ],
            legs: [
                {
                    airplane: "Boeing 777",
                    from: {
                        code: "LOS",
                        name: "Lagos Murtala Muhammed"
                    },
                    to: {
                        code: "DXB",
                        name: "Dubai International"
                    },
                    departureDate: "30 May 2025",
                    departureTime: "9:45 PM",
                    arrivalDate: "31 May 2025",
                    arrivalTime: "06:00 AM",
                    travelTime: "6h 15m"
                },
                {
                    airplane: "Boeing 777",
                    from: {
                        code: "DXB",
                        name: "Dubai International"
                    },
                    to: {
                        code: "IAD",
                        name: "Washington Dulles Intl"
                    },
                    departureDate: "31 May 2025",
                    departureTime: "09:45 AM",
                    arrivalDate: "31 May 2025",
                    arrivalTime: "3:15 PM",
                    travelTime: "13h 30m"
                }
            ]
        },

        returnFlight: {
            flightDuration: "18h 45m",
            stops: 1,
            stopDetails: [
                {
                    stopLocation: "Dubai International",
                    layoverTime: "3h 00m"
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
                    departureDate: "10 Jun 2025",
                    departureTime: "10:30 AM",
                    arrivalDate: "12 Jun 2025",
                    arrivalTime: "7:15 PM",
                    travelTime: "12h 45m"
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
                    departureDate: "12 Jun 2025",
                    departureTime: "10:15 PM",
                    arrivalDate: "13 Jun 2025",
                    arrivalTime: "02:00 PM",
                    travelTime: "7h 45m"
                }
            ]
        },

        cabinAvailability: {
            economy: {
                totalSeats: 180,
                availableSeats: 30,
                price: {
                    currency: "NGN",
                    amount: 150000
                }
            },
            business: {
                totalSeats: 24,
                availableSeats: 8,
                price: {
                    currency: "NGN",
                    amount: 450000
                }
            },
            firstclass: {
                totalSeats: 8,
                availableSeats: 2,
                price: {
                    currency: "NGN",
                    amount: 2500000
                }
            }
        },
        travelBaggageAddons: [
            "Seat choice included",
            "Personal item included",
            "Carry-on bag included"
        ],
        fareBreakdown: [
            "Seat choice included",
            "Personal item included",
            "Carry-on bag included",
            "2 checked bags included (50 lbs each)",
            "No refunds"
        ]
    },


    {
        flightId: "DL100",
        tripType: "one-way",
        airline: {
            name: "Delta Airlines",
            logo: "delta-logo.png"
        },
        departure: {
            date: "30 May 2025",
            time: "10:50 AM",
            airport: {
                code: "ACC",
                name: "Accra Kotoka Intl"
            }
        },
        arrival: {
            date: "31 May 2025",
            time: "05:50 AM",
            airport: {
                code: "JFK",
                name: "New York JFK"
            }
        },
        flightDuration: "11h",

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
                    departureDate: "30 May 2025",
                    departureTime: "10:50 AM",
                    arrivalDate: "31 May 2025",
                    arrivalTime: "05:50 AM",
                    travelTime: "11h"
                }
            ]
        },

        cabinAvailability: {
            economy: {
                totalSeats: 250,
                availableSeats: 45,
                price: {
                    currency: "USD",
                    amount: 800
                }
            },
            business: {
                totalSeats: 48,
                availableSeats: 12,
                price: {
                    currency: "USD",
                    amount: 1200
                }
            },
            firstclass: {
                totalSeats: 12,
                availableSeats: 4,
                price: {
                    currency: "USD",
                    amount: 2500
                }
            }
        },
        travelBaggageAddons: [
            "Priority boarding",
            "Carry-on bag included",
            "Lounge access"
        ],
        fareBreakdown: [
            "Seat choice included",
            "2 checked bags",
            "Full refund available before 24h"
        ]
    }
];



// Extract unique airport names from availableInventory
const airports = [];

availableInventory.forEach(flight => {
    if (flight.departure?.airport?.name) {
        airports.push({ name: flight.departure.airport.name });
    }
    if (flight.arrival?.airport?.name) {
        airports.push({ name: flight.arrival.airport.name });
    }
});

const uniqueAirports = Array.from(new Set(airports.map(a => a.name)))
    .map(name => ({ name }));


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

// Booking Session
// const flightBookingSession = {
//     flightSearchQuery,
//     passengers,
//     passengerDetails, 
//     fareSummary
// };

// console.log(flightBookingSession);