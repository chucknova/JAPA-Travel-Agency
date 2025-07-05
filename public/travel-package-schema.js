const travelPackages = [
    {
        categoryName: "Beach Vacation",
        description: "Sun, sand, soft life. Curate your perfect beach escape, where every wave resets your soul.",
        categoryThumbnail: 'https://ggsc.s3.us-west-2.amazonaws.com/assets/images/how_to_avoid_the_post-vacation_stress_frenzy_-_abcdef_-_0a21b39134b316e51cdc0dd96c5e6bca3c0093e9_-_abcdef_-_c3aa4369bd53794b17dba2719890b56de8809755.webp',
        packages: [
            // Package 1 - Maldives
            {
                //Level 1
                id: "beach_001",
                name: "Maldives Paradise: 7-Day Overwater Villa Escape",
                duration: { days: 7 },
                packageThumbnail: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&h=600&fit=crop',
                shortDesc: "Experience ultimate luxury in overwater villas with crystal-clear lagoons and world-class diving",
                price: { amount: 2850000, currency: "NGN", priceType: "per person" },
                destination: "Maldives",

                // Level 2
                highlights: ["Overwater Villa", "Snorkeling & Diving", "Spa Treatments", "Sunset Cruises"],
                difficulty: "relaxed",
                groupSize: { min: 2, max: 8 },
                startAndEndLocation: { startsAt: "Malé, Maldives", endsAt: "Malé, Maldives" },
                aboutPackage: "Escape to paradise in the Maldives, where turquoise waters meet pristine white sand beaches. Stay in luxurious overwater villas, enjoy world-class diving and snorkeling, indulge in spa treatments, and witness breathtaking sunsets. This carefully curated experience offers the perfect blend of relaxation, adventure, and luxury for discerning travelers seeking an unforgettable tropical getaway.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Arrival & Overwater Villa Check-in",
                        itineraryDetails: "Arrive at Malé International Airport and take a scenic seaplane transfer to your resort. Check into your overwater villa with direct lagoon access. Enjoy a welcome cocktail and sunset dinner on your private deck overlooking the Indian Ocean."
                    },
                    {
                        itineraryTitle: "Day 2: Snorkeling Adventure & Spa Relaxation",
                        itineraryDetails: "Morning guided snorkeling tour to explore vibrant coral reefs and tropical fish. Return for lunch at the resort's beachfront restaurant. Afternoon at the overwater spa with signature Maldivian treatments and infinity pool relaxation."
                    },
                    {
                        itineraryTitle: "Day 3: Dolphin Watching & Sandbank Picnic",
                        itineraryDetails: "Early morning dolphin watching cruise in traditional dhoni boats. Visit a pristine sandbank for a private picnic lunch. Evening at leisure with optional water sports including kayaking and paddleboarding."
                    },
                    {
                        itineraryTitle: "Day 4: Deep Sea Fishing & Cultural Village Tour",
                        itineraryDetails: "Half-day deep sea fishing excursion with experienced local guides. Fresh catch prepared for lunch by resort chefs. Afternoon visit to a local island to experience Maldivian culture and traditions."
                    },
                    {
                        itineraryTitle: "Day 5: Scuba Diving & Sunset Cruise",
                        itineraryDetails: "Certified diving experience at renowned dive sites with manta rays and reef sharks. Lunch and relaxation time. Evening sunset cruise with champagne and canapés as you watch the sky transform into brilliant colors."
                    },
                    {
                        itineraryTitle: "Day 6: Private Beach Day & Farewell Dinner",
                        itineraryDetails: "Spend the day at your own pace - private beach access, villa amenities, or additional spa treatments. Farewell dinner at the resort's signature restaurant with fresh seafood and international cuisine."
                    },
                    {
                        itineraryTitle: "Day 7: Departure",
                        itineraryDetails: "Final breakfast in your villa. Seaplane transfer back to Malé International Airport for your departure flight. Take with you memories of paradise and the tranquil beauty of the Maldives."
                    }
                ],
                inclusions: [
                    {
                        inclusionTitle: "7 nights in Luxury Overwater villa",
                        inclusionDetails: "7 nights in luxury overwater villa with direct lagoon access, private deck, and glass floor panels for underwater viewing"
                    },
                    {
                        inclusionTitle: "All Meals & Premium Beverages",
                        inclusionDetails: "Daily breakfast, lunch, and dinner at resort restaurants, plus premium alcoholic and non-alcoholic beverages throughout your stay"
                    },
                    {
                        inclusionTitle: "Seaplane Transfers",
                        inclusionDetails: "Round-trip scenic seaplane transfers between Malé Airport and resort, offering stunning aerial views of the atolls"
                    },
                    {
                        inclusionTitle: "Water Sports Equipment",
                        inclusionDetails: "Complimentary use of snorkeling gear, kayaks, paddleboards, and windsurfing equipment for unlimited water adventures"
                    },
                    {
                        inclusionTitle: "Daily Excursions",
                        inclusionDetails: "Guided snorkeling tours, dolphin watching, sandbank visits, fishing trips, and cultural island tours with local guides"
                    },
                    {
                        inclusionTitle: "Spa Credit & Airport Assistance",
                        inclusionDetails: "$200 spa credit per person for treatments, plus VIP airport assistance and dedicated resort representative throughout stay"
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                ],
                addons: [
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                ],

                // Level 3
                totalPackages: {
                    remaining: 60,
                    totalCount: 70
                },

                tourGallery: [
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                ]
            },

            // Package 2 - Santorini
            {
                //Level 1
                id: "beach_002",
                name: "Santorini Sunset: 5-Day Greek Island Romance",
                duration: { days: 5 },
                packageThumbnail: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop',
                shortDesc: "Discover Santorini's dramatic cliffs, volcanic beaches, and world-famous sunsets",
                price: { amount: 1950000, currency: "NGN", priceType: "per person" },
                destination: "Santorini, Greece",

                // Level 2
                highlights: ["Clifftop Hotels", "Volcanic Beaches", "Wine Tasting", "Sunset Views"],
                difficulty: "moderate",
                groupSize: { min: 2, max: 10 },
                startAndEndLocation: { startsAt: "Santorini Airport", endsAt: "Santorini Airport" },
                aboutPackage: "Experience the magic of Santorini with its iconic blue-domed churches, dramatic cliff-top villages, and spectacular sunsets. This romantic getaway combines luxury accommodation with authentic Greek experiences, from wine tasting at local vineyards to exploring unique volcanic beaches. Perfect for couples and small groups seeking a blend of relaxation and cultural discovery.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Arrival & Oia Exploration",
                        itineraryDetails: "Arrive at Santorini Airport and transfer to your clifftop hotel in Oia. Check-in and enjoy welcome drinks overlooking the caldera. Evening stroll through Oia's charming streets, visiting local boutiques and art galleries before dinner at a traditional taverna."
                    },
                    {
                        itineraryTitle: "Day 2: Volcano Tour & Hot Springs",
                        itineraryDetails: "Morning boat excursion to the active volcano island of Nea Kameni. Hike to the crater and learn about the island's geological history. Afternoon relaxation at the natural hot springs of Palea Kameni. Return for sunset viewing from your hotel terrace."
                    },
                    {
                        itineraryTitle: "Day 3: Wine Tasting & Red Beach",
                        itineraryDetails: "Visit three traditional wineries across the island, tasting unique Assyrtiko wines and learning about volcanic soil viticulture. Lunch at a vineyard restaurant with caldera views. Afternoon at the famous Red Beach with its dramatic red volcanic cliffs."
                    },
                    {
                        itineraryTitle: "Day 4: Fira & Traditional Villages",
                        itineraryDetails: "Explore Fira, the island's capital, with its archaeological museum and traditional architecture. Visit the picturesque village of Pyrgos and its medieval castle. Afternoon cooking class learning to prepare traditional Greek dishes with local ingredients."
                    },
                    {
                        itineraryTitle: "Day 5: Departure",
                        itineraryDetails: "Final breakfast with caldera views. Last-minute shopping in Fira for local products and souvenirs. Private transfer to Santorini Airport for departure, taking with you memories of Greece's most romantic island."
                    }
                ],
                inclusions: [
                    {
                        inclusionTitle: "Clifftop Hotel with Caldera Views",
                        inclusionDetails: "5 nights in luxury clifftop accommodation with private balcony, infinity pool access, and breathtaking caldera views"
                    },
                    {
                        inclusionTitle: "Daily Breakfast & 2 Dinners",
                        inclusionDetails: "Daily Greek breakfast with local products, plus 2 traditional dinners at highly-rated tavernas featuring fresh seafood and regional specialties"
                    },
                    {
                        inclusionTitle: "Private Airport Transfers",
                        inclusionDetails: "Round-trip private transfers between Santorini Airport and hotel, with professional drivers and comfortable vehicles"
                    },
                    {
                        inclusionTitle: "Volcano & Hot Springs Tour",
                        inclusionDetails: "Full-day guided boat tour to active volcano, hot springs, and surrounding islands with professional guide and traditional Greek boat"
                    },
                    {
                        inclusionTitle: "Wine Tasting Experience",
                        inclusionDetails: "Visit to three premium wineries with tastings of 12+ local wines, including rare Assyrtiko varieties and traditional Vinsanto dessert wine"
                    },
                    {
                        inclusionTitle: "Cooking Class & Cultural Tours",
                        inclusionDetails: "Traditional Greek cooking class with local chef, plus guided tours of Fira, Pyrgos, and other charming villages with historical insights"
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&h=600&fit=crop',
                        accomodationName: 'Clifftop Suite with Infinity Pool',
                        noOfNights: '5',
                        accomodationDesc: "Luxury suite carved into the cliff face with traditional Cycladic architecture, private balcony, infinity pool access, and unobstructed views of the caldera and famous Santorini sunsets."
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                ],

                addons: [
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                ],

                // Level 3
                totalPackages: {
                    remaining: 60,
                    totalCount: 70
                },

                tourGallery: [
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                ]
            },

            // Package 3 - Seychelles
            {
                //Level 1
                id: "beach_003",
                name: "Seychelles Discovery: 8-Day Island Paradise",
                duration: { days: 8 },
                packageThumbnail: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
                shortDesc: "Explore pristine beaches, unique wildlife, and luxury resorts across multiple Seychelles islands",
                price: { amount: 3200000, currency: "NGN", priceType: "per person" },
                destination: "Seychelles",

                // Level 2
                highlights: ["Three Islands", "Giant Tortoises", "Pristine Beaches", "Snorkeling"],
                difficulty: "easy",
                groupSize: { min: 2, max: 12 },
                startAndEndLocation: { startsAt: "Mahé, Seychelles", endsAt: "Mahé, Seychelles" },
                aboutPackage: "Discover the untouched beauty of Seychelles across three stunning islands. From the granite boulders of La Digue to the pristine beaches of Praslin and the vibrant culture of Mahé, this island-hopping adventure offers encounters with giant tortoises, rare birds, and some of the world's most beautiful beaches. Perfect for nature lovers and beach enthusiasts seeking an authentic tropical experience.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Arrival in Mahé & Victoria Exploration",
                        itineraryDetails: "Arrive at Seychelles International Airport and transfer to your beachfront resort. Afternoon tour of Victoria, the world's smallest capital city, visiting the colorful market, clock tower, and botanical gardens. Welcome dinner featuring Creole cuisine."
                    },
                    {
                        itineraryTitle: "Day 2: Mahé Island Tour & Morne Seychellois",
                        itineraryDetails: "Full-day island tour including Morne Seychellois National Park, tea plantation visit, and craft village. Lunch at a local restaurant with ocean views. Afternoon at Beau Vallon Beach for swimming and water sports."
                    },
                    {
                        itineraryTitle: "Day 3: Ferry to Praslin & Vallée de Mai",
                        itineraryDetails: "Morning ferry to Praslin Island. Check into beachfront accommodation. Afternoon exploration of Vallée de Mai Nature Reserve, home to the famous Coco de Mer palm and rare black parrots. Evening at leisure on Côte d'Or Beach."
                    },
                    {
                        itineraryTitle: "Day 4: Anse Lazio & Praslin Exploration",
                        itineraryDetails: "Visit Anse Lazio, often rated among the world's best beaches, for swimming and snorkeling. Lunch at a beachfront restaurant. Afternoon island tour visiting local villages and learning about Seychellois culture and traditions."
                    },
                    {
                        itineraryTitle: "Day 5: La Digue Island & Giant Tortoises",
                        itineraryDetails: "Day trip to La Digue Island by ferry. Explore the island by bicycle, visiting L'Union Estate to see giant tortoises and traditional coconut processing. Afternoon at Anse Source d'Argent with its famous granite boulders."
                    },
                    {
                        itineraryTitle: "Day 6: Snorkeling & Marine Life",
                        itineraryDetails: "Half-day snorkeling excursion to Curieuse Island Marine Park. Encounter diverse marine life including tropical fish, rays, and possibly sea turtles. Beach barbecue lunch on a deserted beach. Return to Praslin for relaxation."
                    },
                    {
                        itineraryTitle: "Day 7: Return to Mahé & Sunset Cruise",
                        itineraryDetails: "Morning ferry back to Mahé. Check into resort and enjoy beach time. Afternoon at leisure for shopping or spa treatments. Evening sunset cruise with dinner and live music, celebrating your Seychelles adventure."
                    },
                    {
                        itineraryTitle: "Day 8: Departure",
                        itineraryDetails: "Final breakfast with ocean views. Last-minute souvenir shopping at local markets. Private transfer to Seychelles International Airport for departure, carrying memories of paradise islands."
                    }
                ],
                inclusions: [
                    {
                        inclusionTitle: "Multi-Island Accommodation",
                        inclusionDetails: "8 nights in luxury beachfront resorts across Mahé and Praslin islands, all with ocean views and private beach access"
                    },
                    {
                        inclusionTitle: "All Meals & Local Beverages",
                        inclusionDetails: "Daily breakfast, lunch, and dinner featuring fresh seafood and authentic Creole cuisine, plus local beverages and fresh fruit juices"
                    },
                    {
                        inclusionTitle: "Inter-Island Ferry Transfers",
                        inclusionDetails: "Round-trip ferry transfers between Mahé and Praslin, plus day trip to La Digue with comfortable seating and scenic views"
                    },
                    {
                        inclusionTitle: "National Park Entrance Fees",
                        inclusionDetails: "Entry to Vallée de Mai Nature Reserve, Morne Seychellois National Park, and Curieuse Marine Park with certified guides"
                    },
                    {
                        inclusionTitle: "Island Tours & Activities",
                        inclusionDetails: "Guided tours of all three islands, bicycle rental on La Digue, snorkeling equipment, and cultural village visits"
                    },
                    {
                        inclusionTitle: "Sunset Cruise & Airport Transfers",
                        inclusionDetails: "Romantic sunset cruise with dinner and entertainment, plus private airport transfers and 24/7 local support throughout your stay"
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&h=600&fit=crop',
                        accomodationName: 'Beachfront Villa - Mahé',
                        noOfNights: '4',
                        accomodationDesc: "Luxury beachfront villa with private terrace, direct beach access, and tropical garden views. Features modern amenities with traditional Seychellois design elements."
                    },
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
                        accomodationName: 'Ocean View Resort - Praslin',
                        noOfNights: '4',
                        accomodationDesc: "Elegant resort accommodation with panoramic ocean views, private balcony, and access to Côte d'Or Beach. Surrounded by lush tropical vegetation."
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                ],
                addons: [
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                ],

                // Level 3
                totalPackages: {
                    remaining: 60,
                    totalCount: 70
                },

                tourGallery: [
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                ]
            },

            // Package 4 - Costa Rica
            {
                //Level 1
                id: "beach_004",
                name: "Costa Rica Beach & Adventure: 6-Day Eco Paradise",
                duration: { days: 6 },
                packageThumbnail: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800&h=600&fit=crop',
                shortDesc: "Combine pristine Pacific beaches with wildlife adventures and eco-lodge luxury",
                price: { amount: 1650000, currency: "NGN", priceType: "per person" },
                destination: "Guanacaste, Costa Rica",

                // Level 2
                highlights: ["Eco-Lodge Stay", "Wildlife Watching", "Volcano Views", "Beach Activities"],
                difficulty: "moderate",
                groupSize: { min: 4, max: 14 },
                startAndEndLocation: { startsAt: "Liberia, Costa Rica", endsAt: "Liberia, Costa Rica" },
                aboutPackage: "Experience the best of Costa Rica's Pacific coast with this perfect blend of adventure and relaxation. Stay in luxury eco-lodges, spot diverse wildlife including monkeys and exotic birds, explore volcanic landscapes, and enjoy pristine beaches. This sustainable tourism experience showcases Costa Rica's commitment to conservation while providing unforgettable memories in one of the world's most biodiverse countries.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Arrival & Eco-Lodge Check-in",
                        itineraryDetails: "Arrive at Liberia Airport and transfer through scenic countryside to your eco-lodge. Check-in and enjoy welcome drinks overlooking the Pacific Ocean. Evening nature walk with naturalist guide to spot wildlife and learn about local ecosystems."
                    },
                    {
                        itineraryTitle: "Day 2: Wildlife Sanctuary & Beach Time",
                        itineraryDetails: "Morning visit to a wildlife sanctuary to see rescued animals including sloths, monkeys, and colorful birds. Learn about conservation efforts and rehabilitation programs. Afternoon at Tamarindo Beach for swimming, surfing lessons, or simply relaxing on golden sand."
                    },
                    {
                        itineraryTitle: "Day 3: Volcano & Hot Springs Adventure",
                        itineraryDetails: "Full-day excursion to Rincon de la Vieja National Park. Hike through tropical forest to see volcanic activity, waterfalls, and diverse wildlife. Afternoon relaxation at natural hot springs with therapeutic volcanic mud treatments. Return to lodge for dinner."
                    },
                    {
                        itineraryTitle: "Day 4: Canopy Tour & Beach Activities",
                        itineraryDetails: "Morning zip-line canopy tour through the treetops for spectacular views and wildlife spotting. Afternoon at Conchal Beach, known for its unique shell sand. Options for snorkeling, kayaking, or horseback riding along the beach."
                    },
                    {
                        itineraryTitle: "Day 5: Mangrove Tour & Sunset Cruise",
                        itineraryDetails: "Morning boat tour through mangrove estuary to see crocodiles, birds, and marine life. Learn about the importance of mangrove ecosystems. Afternoon at leisure. Evening sunset cruise with dinner and live music while watching for dolphins."
                    },
                    {
                        itineraryTitle: "Day 6: Departure",
                        itineraryDetails: "Final breakfast with ocean views. Optional last-minute activities or souvenir shopping. Transfer to Liberia Airport for departure, taking with you memories of Costa Rica's natural beauty and commitment to conservation."
                    }
                ],
                inclusions: [
                    {
                        inclusionTitle: "Eco-Lodge Accommodation",
                        inclusionDetails: "6 nights in luxury eco-lodge with ocean views, sustainable practices, and integration with natural surroundings"
                    },
                    {
                        inclusionTitle: "All Meals & Fresh Beverages",
                        inclusionDetails: "Daily breakfast, lunch, and dinner featuring organic local ingredients, tropical fruits, and traditional Costa Rican cuisine"
                    },
                    {
                        inclusionTitle: "Airport Transfers & Transportation",
                        inclusionDetails: "Round-trip transfers from Liberia Airport plus comfortable transportation to all activities and attractions"
                    },
                    {
                        inclusionTitle: "Wildlife & Nature Tours",
                        inclusionDetails: "Guided tours to wildlife sanctuary, volcano national park, and mangrove estuary with experienced naturalist guides"
                    },
                    {
                        inclusionTitle: "Adventure Activities",
                        inclusionDetails: "Zip-line canopy tour, nature walks, hot springs access, and choice of beach activities including surfing lessons"
                    },
                    {
                        inclusionTitle: "Sunset Cruise & Park Fees",
                        inclusionDetails: "Romantic sunset cruise with dinner and dolphin watching, plus all national park entrance fees and conservation contributions"
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&h=600&fit=crop',
                        accomodationName: 'Eco-Lodge Ocean View Villa',
                        noOfNights: '6',
                        accomodationDesc: "Sustainable luxury villa with panoramic Pacific Ocean views, private terrace, and integration with tropical forest. Features solar power, rainwater collection, and locally-sourced materials."
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                ],
                addons: [
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                ],

                // Level 3
                totalPackages: {
                    remaining: 60,
                    totalCount: 70
                },

                tourGallery: [
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                ]
            },

            // Package 5 - Barbados
            {
                //Level 1
                id: "beach_005",
                name: "Barbados Cultural Beach: 5-Day Caribbean Heritage",
                duration: { days: 5 },
                packageThumbnail: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=800&h=600&fit=crop',
                shortDesc: "Experience Caribbean culture, rum heritage, and stunning beaches on this vibrant island",
                price: { amount: 1450000, currency: "NGN", priceType: "per person" },
                destination: "Barbados",

                // Level 2
                highlights: ["Rum Distillery", "Cultural Tours", "Caribbean Beaches", "Local Music"],
                difficulty: "easy",
                groupSize: { min: 2, max: 16 },
                startAndEndLocation: { startsAt: "Bridgetown, Barbados", endsAt: "Bridgetown, Barbados" },
                aboutPackage: "Immerse yourself in the rich culture and history of Barbados while enjoying some of the Caribbean's most beautiful beaches. From rum distillery tours to traditional fish markets, calypso music to colonial architecture, this experience showcases the authentic spirit of Barbados. Perfect for travelers seeking cultural enrichment alongside tropical relaxation.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Arrival & Bridgetown Heritage Tour",
                        itineraryDetails: "Arrive at Grantley Adams International Airport and transfer to your beachfront hotel. Afternoon walking tour of historic Bridgetown, a UNESCO World Heritage site. Visit the Parliament Buildings, National Heroes Square, and colorful local markets."
                    },
                    {
                        itineraryTitle: "Day 2: Rum Heritage & Harrison's Cave",
                        itineraryDetails: "Morning tour of Mount Gay Rum Distillery, the world's oldest rum producer, including tastings and history. Afternoon exploration of Harrison's Cave, traveling through underground limestone caverns with stunning formations."
                    },
                    {
                        itineraryTitle: "Day 3: Beach Day & Water Sports",
                        itineraryDetails: "Full day at Crane Beach, one of the world's most beautiful beaches with pink sand and dramatic cliffs. Options for swimming, snorkeling, boogie boarding, or simply relaxing. Beachfront lunch and sunset cocktails."
                    },
                    {
                        itineraryTitle: "Day 4: Cultural Immersion & Local Music",
                        itineraryDetails: "Morning visit to local fish market and pottery studio to see traditional crafts. Afternoon cooking class learning to prepare flying fish and other Bajan specialties. Evening dinner with live calypso and steel drum music."
                    },
                    {
                        itineraryTitle: "Day 5: Departure",
                        itineraryDetails: "Final breakfast with ocean views. Last-minute shopping at local craft markets for souvenirs and rum. Transfer to airport for departure, taking with you the warmth and culture of Barbados."
                    }
                ],
                inclusions: [
                    {
                        inclusionTitle: "Beachfront Hotel Stay",
                        inclusionDetails: "5 nights in luxury beachfront hotel with ocean views, private balcony, and direct beach access on the beautiful Caribbean coast"
                    },
                    {
                        inclusionTitle: "All Meals & Rum Tastings",
                        inclusionDetails: "Daily breakfast, lunch, and dinner featuring authentic Bajan cuisine, fresh seafood, and tropical fruits, plus rum tastings and cocktails"
                    },
                    {
                        inclusionTitle: "Cultural Tours & Activities",
                        inclusionDetails: "Guided tours of historic Bridgetown, rum distillery, Harrison's Cave, and local markets with knowledgeable cultural guides"
                    },
                    {
                        inclusionTitle: "Cooking Class & Music Experience",
                        inclusionDetails: "Traditional Bajan cooking class with local chef, plus evening entertainment with live calypso and steel drum performances"
                    },
                    {
                        inclusionTitle: "Beach Activities & Water Sports",
                        inclusionDetails: "Access to Crane Beach and other top beaches, with equipment for snorkeling, boogie boarding, and other water sports"
                    },
                    {
                        inclusionTitle: "Airport Transfers & Local Transport",
                        inclusionDetails: "Round-trip airport transfers and comfortable transportation to all activities and attractions throughout your stay"
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
                        accomodationName: 'Caribbean Beachfront Resort',
                        noOfNights: '5',
                        accomodationDesc: "Luxury beachfront resort with colonial Caribbean architecture, private beach access, infinity pool, and panoramic ocean views. Features traditional Bajan design with modern amenities."
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                ],
                addons: [
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                ],

                // Level 3
                totalPackages: {
                    remaining: 60,
                    totalCount: 70
                },

                tourGallery: [
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                ]
            }
        ]
    },

    {
        categoryName: "All-Inclusive Vacation",
        description: "Our all-inclusive getaways mean zero stress, full enjoyment. You just pack vibes, we’ll handle the rest.",
        categoryThumbnail: 'https://ggsc.s3.us-west-2.amazonaws.com/assets/images/how_to_avoid_the_post-vacation_stress_frenzy_-_abcdef_-_0a21b39134b316e51cdc0dd96c5e6bca3c0093e9_-_abcdef_-_c3aa4369bd53794b17dba2719890b56de8809755.webp',
        packages: [
            // Package 1 - Maldives
            {
                //Level 1
                id: "beach_001",
                name: "Maldives Paradise: 7-Day Overwater Villa Escape",
                duration: { days: 7 },
                packageThumbnail: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&h=600&fit=crop',
                shortDesc: "Experience ultimate luxury in overwater villas with crystal-clear lagoons and world-class diving",
                price: { amount: 2850000, currency: "NGN", priceType: "per person" },
                destination: "Maldives",

                // Level 2
                highlights: ["Overwater Villa", "Snorkeling & Diving", "Spa Treatments", "Sunset Cruises"],
                difficulty: "relaxed",
                groupSize: { min: 2, max: 8 },
                startAndEndLocation: { startsAt: "Malé, Maldives", endsAt: "Malé, Maldives" },
                aboutPackage: "Escape to paradise in the Maldives, where turquoise waters meet pristine white sand beaches. Stay in luxurious overwater villas, enjoy world-class diving and snorkeling, indulge in spa treatments, and witness breathtaking sunsets. This carefully curated experience offers the perfect blend of relaxation, adventure, and luxury for discerning travelers seeking an unforgettable tropical getaway.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Arrival & Overwater Villa Check-in",
                        itineraryDetails: "Arrive at Malé International Airport and take a scenic seaplane transfer to your resort. Check into your overwater villa with direct lagoon access. Enjoy a welcome cocktail and sunset dinner on your private deck overlooking the Indian Ocean."
                    },
                    {
                        itineraryTitle: "Day 2: Snorkeling Adventure & Spa Relaxation",
                        itineraryDetails: "Morning guided snorkeling tour to explore vibrant coral reefs and tropical fish. Return for lunch at the resort's beachfront restaurant. Afternoon at the overwater spa with signature Maldivian treatments and infinity pool relaxation."
                    },
                    {
                        itineraryTitle: "Day 3: Dolphin Watching & Sandbank Picnic",
                        itineraryDetails: "Early morning dolphin watching cruise in traditional dhoni boats. Visit a pristine sandbank for a private picnic lunch. Evening at leisure with optional water sports including kayaking and paddleboarding."
                    },
                    {
                        itineraryTitle: "Day 4: Deep Sea Fishing & Cultural Village Tour",
                        itineraryDetails: "Half-day deep sea fishing excursion with experienced local guides. Fresh catch prepared for lunch by resort chefs. Afternoon visit to a local island to experience Maldivian culture and traditions."
                    },
                    {
                        itineraryTitle: "Day 5: Scuba Diving & Sunset Cruise",
                        itineraryDetails: "Certified diving experience at renowned dive sites with manta rays and reef sharks. Lunch and relaxation time. Evening sunset cruise with champagne and canapés as you watch the sky transform into brilliant colors."
                    },
                    {
                        itineraryTitle: "Day 6: Private Beach Day & Farewell Dinner",
                        itineraryDetails: "Spend the day at your own pace - private beach access, villa amenities, or additional spa treatments. Farewell dinner at the resort's signature restaurant with fresh seafood and international cuisine."
                    },
                    {
                        itineraryTitle: "Day 7: Departure",
                        itineraryDetails: "Final breakfast in your villa. Seaplane transfer back to Malé International Airport for your departure flight. Take with you memories of paradise and the tranquil beauty of the Maldives."
                    }
                ],
                inclusions: [
                    {
                        inclusionTitle: "7 nights in Luxury Overwater villa",
                        inclusionDetails: "7 nights in luxury overwater villa with direct lagoon access, private deck, and glass floor panels for underwater viewing"
                    },
                    {
                        inclusionTitle: "All Meals & Premium Beverages",
                        inclusionDetails: "Daily breakfast, lunch, and dinner at resort restaurants, plus premium alcoholic and non-alcoholic beverages throughout your stay"
                    },
                    {
                        inclusionTitle: "Seaplane Transfers",
                        inclusionDetails: "Round-trip scenic seaplane transfers between Malé Airport and resort, offering stunning aerial views of the atolls"
                    },
                    {
                        inclusionTitle: "Water Sports Equipment",
                        inclusionDetails: "Complimentary use of snorkeling gear, kayaks, paddleboards, and windsurfing equipment for unlimited water adventures"
                    },
                    {
                        inclusionTitle: "Daily Excursions",
                        inclusionDetails: "Guided snorkeling tours, dolphin watching, sandbank visits, fishing trips, and cultural island tours with local guides"
                    },
                    {
                        inclusionTitle: "Spa Credit & Airport Assistance",
                        inclusionDetails: "$200 spa credit per person for treatments, plus VIP airport assistance and dedicated resort representative throughout stay"
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                ],
                addons: [
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                ],

                // Level 3
                totalPackages: {
                    remaining: 60,
                    totalCount: 70
                },

                tourGallery: [
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                ]
            },

            // Package 2 - Santorini
            {
                //Level 1
                id: "beach_002",
                name: "Santorini Sunset: 5-Day Greek Island Romance",
                duration: { days: 5 },
                packageThumbnail: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop',
                shortDesc: "Discover Santorini's dramatic cliffs, volcanic beaches, and world-famous sunsets",
                price: { amount: 1950000, currency: "NGN", priceType: "per person" },
                destination: "Santorini, Greece",

                // Level 2
                highlights: ["Clifftop Hotels", "Volcanic Beaches", "Wine Tasting", "Sunset Views"],
                difficulty: "moderate",
                groupSize: { min: 2, max: 10 },
                startAndEndLocation: { startsAt: "Santorini Airport", endsAt: "Santorini Airport" },
                aboutPackage: "Experience the magic of Santorini with its iconic blue-domed churches, dramatic cliff-top villages, and spectacular sunsets. This romantic getaway combines luxury accommodation with authentic Greek experiences, from wine tasting at local vineyards to exploring unique volcanic beaches. Perfect for couples and small groups seeking a blend of relaxation and cultural discovery.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Arrival & Oia Exploration",
                        itineraryDetails: "Arrive at Santorini Airport and transfer to your clifftop hotel in Oia. Check-in and enjoy welcome drinks overlooking the caldera. Evening stroll through Oia's charming streets, visiting local boutiques and art galleries before dinner at a traditional taverna."
                    },
                    {
                        itineraryTitle: "Day 2: Volcano Tour & Hot Springs",
                        itineraryDetails: "Morning boat excursion to the active volcano island of Nea Kameni. Hike to the crater and learn about the island's geological history. Afternoon relaxation at the natural hot springs of Palea Kameni. Return for sunset viewing from your hotel terrace."
                    },
                    {
                        itineraryTitle: "Day 3: Wine Tasting & Red Beach",
                        itineraryDetails: "Visit three traditional wineries across the island, tasting unique Assyrtiko wines and learning about volcanic soil viticulture. Lunch at a vineyard restaurant with caldera views. Afternoon at the famous Red Beach with its dramatic red volcanic cliffs."
                    },
                    {
                        itineraryTitle: "Day 4: Fira & Traditional Villages",
                        itineraryDetails: "Explore Fira, the island's capital, with its archaeological museum and traditional architecture. Visit the picturesque village of Pyrgos and its medieval castle. Afternoon cooking class learning to prepare traditional Greek dishes with local ingredients."
                    },
                    {
                        itineraryTitle: "Day 5: Departure",
                        itineraryDetails: "Final breakfast with caldera views. Last-minute shopping in Fira for local products and souvenirs. Private transfer to Santorini Airport for departure, taking with you memories of Greece's most romantic island."
                    }
                ],
                inclusions: [
                    {
                        inclusionTitle: "Clifftop Hotel with Caldera Views",
                        inclusionDetails: "5 nights in luxury clifftop accommodation with private balcony, infinity pool access, and breathtaking caldera views"
                    },
                    {
                        inclusionTitle: "Daily Breakfast & 2 Dinners",
                        inclusionDetails: "Daily Greek breakfast with local products, plus 2 traditional dinners at highly-rated tavernas featuring fresh seafood and regional specialties"
                    },
                    {
                        inclusionTitle: "Private Airport Transfers",
                        inclusionDetails: "Round-trip private transfers between Santorini Airport and hotel, with professional drivers and comfortable vehicles"
                    },
                    {
                        inclusionTitle: "Volcano & Hot Springs Tour",
                        inclusionDetails: "Full-day guided boat tour to active volcano, hot springs, and surrounding islands with professional guide and traditional Greek boat"
                    },
                    {
                        inclusionTitle: "Wine Tasting Experience",
                        inclusionDetails: "Visit to three premium wineries with tastings of 12+ local wines, including rare Assyrtiko varieties and traditional Vinsanto dessert wine"
                    },
                    {
                        inclusionTitle: "Cooking Class & Cultural Tours",
                        inclusionDetails: "Traditional Greek cooking class with local chef, plus guided tours of Fira, Pyrgos, and other charming villages with historical insights"
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&h=600&fit=crop',
                        accomodationName: 'Clifftop Suite with Infinity Pool',
                        noOfNights: '5',
                        accomodationDesc: "Luxury suite carved into the cliff face with traditional Cycladic architecture, private balcony, infinity pool access, and unobstructed views of the caldera and famous Santorini sunsets."
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                ],

                addons: [
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                ],

                // Level 3
                totalPackages: {
                    remaining: 60,
                    totalCount: 70
                },

                tourGallery: [
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                ]
            },

            // Package 3 - Seychelles
            {
                //Level 1
                id: "beach_003",
                name: "Seychelles Discovery: 8-Day Island Paradise",
                duration: { days: 8 },
                packageThumbnail: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
                shortDesc: "Explore pristine beaches, unique wildlife, and luxury resorts across multiple Seychelles islands",
                price: { amount: 3200000, currency: "NGN", priceType: "per person" },
                destination: "Seychelles",

                // Level 2
                highlights: ["Three Islands", "Giant Tortoises", "Pristine Beaches", "Snorkeling"],
                difficulty: "easy",
                groupSize: { min: 2, max: 12 },
                startAndEndLocation: { startsAt: "Mahé, Seychelles", endsAt: "Mahé, Seychelles" },
                aboutPackage: "Discover the untouched beauty of Seychelles across three stunning islands. From the granite boulders of La Digue to the pristine beaches of Praslin and the vibrant culture of Mahé, this island-hopping adventure offers encounters with giant tortoises, rare birds, and some of the world's most beautiful beaches. Perfect for nature lovers and beach enthusiasts seeking an authentic tropical experience.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Arrival in Mahé & Victoria Exploration",
                        itineraryDetails: "Arrive at Seychelles International Airport and transfer to your beachfront resort. Afternoon tour of Victoria, the world's smallest capital city, visiting the colorful market, clock tower, and botanical gardens. Welcome dinner featuring Creole cuisine."
                    },
                    {
                        itineraryTitle: "Day 2: Mahé Island Tour & Morne Seychellois",
                        itineraryDetails: "Full-day island tour including Morne Seychellois National Park, tea plantation visit, and craft village. Lunch at a local restaurant with ocean views. Afternoon at Beau Vallon Beach for swimming and water sports."
                    },
                    {
                        itineraryTitle: "Day 3: Ferry to Praslin & Vallée de Mai",
                        itineraryDetails: "Morning ferry to Praslin Island. Check into beachfront accommodation. Afternoon exploration of Vallée de Mai Nature Reserve, home to the famous Coco de Mer palm and rare black parrots. Evening at leisure on Côte d'Or Beach."
                    },
                    {
                        itineraryTitle: "Day 4: Anse Lazio & Praslin Exploration",
                        itineraryDetails: "Visit Anse Lazio, often rated among the world's best beaches, for swimming and snorkeling. Lunch at a beachfront restaurant. Afternoon island tour visiting local villages and learning about Seychellois culture and traditions."
                    },
                    {
                        itineraryTitle: "Day 5: La Digue Island & Giant Tortoises",
                        itineraryDetails: "Day trip to La Digue Island by ferry. Explore the island by bicycle, visiting L'Union Estate to see giant tortoises and traditional coconut processing. Afternoon at Anse Source d'Argent with its famous granite boulders."
                    },
                    {
                        itineraryTitle: "Day 6: Snorkeling & Marine Life",
                        itineraryDetails: "Half-day snorkeling excursion to Curieuse Island Marine Park. Encounter diverse marine life including tropical fish, rays, and possibly sea turtles. Beach barbecue lunch on a deserted beach. Return to Praslin for relaxation."
                    },
                    {
                        itineraryTitle: "Day 7: Return to Mahé & Sunset Cruise",
                        itineraryDetails: "Morning ferry back to Mahé. Check into resort and enjoy beach time. Afternoon at leisure for shopping or spa treatments. Evening sunset cruise with dinner and live music, celebrating your Seychelles adventure."
                    },
                    {
                        itineraryTitle: "Day 8: Departure",
                        itineraryDetails: "Final breakfast with ocean views. Last-minute souvenir shopping at local markets. Private transfer to Seychelles International Airport for departure, carrying memories of paradise islands."
                    }
                ],
                inclusions: [
                    {
                        inclusionTitle: "Multi-Island Accommodation",
                        inclusionDetails: "8 nights in luxury beachfront resorts across Mahé and Praslin islands, all with ocean views and private beach access"
                    },
                    {
                        inclusionTitle: "All Meals & Local Beverages",
                        inclusionDetails: "Daily breakfast, lunch, and dinner featuring fresh seafood and authentic Creole cuisine, plus local beverages and fresh fruit juices"
                    },
                    {
                        inclusionTitle: "Inter-Island Ferry Transfers",
                        inclusionDetails: "Round-trip ferry transfers between Mahé and Praslin, plus day trip to La Digue with comfortable seating and scenic views"
                    },
                    {
                        inclusionTitle: "National Park Entrance Fees",
                        inclusionDetails: "Entry to Vallée de Mai Nature Reserve, Morne Seychellois National Park, and Curieuse Marine Park with certified guides"
                    },
                    {
                        inclusionTitle: "Island Tours & Activities",
                        inclusionDetails: "Guided tours of all three islands, bicycle rental on La Digue, snorkeling equipment, and cultural village visits"
                    },
                    {
                        inclusionTitle: "Sunset Cruise & Airport Transfers",
                        inclusionDetails: "Romantic sunset cruise with dinner and entertainment, plus private airport transfers and 24/7 local support throughout your stay"
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&h=600&fit=crop',
                        accomodationName: 'Beachfront Villa - Mahé',
                        noOfNights: '4',
                        accomodationDesc: "Luxury beachfront villa with private terrace, direct beach access, and tropical garden views. Features modern amenities with traditional Seychellois design elements."
                    },
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
                        accomodationName: 'Ocean View Resort - Praslin',
                        noOfNights: '4',
                        accomodationDesc: "Elegant resort accommodation with panoramic ocean views, private balcony, and access to Côte d'Or Beach. Surrounded by lush tropical vegetation."
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                ],
                addons: [
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                ],

                // Level 3
                totalPackages: {
                    remaining: 60,
                    totalCount: 70
                },

                tourGallery: [
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                ]
            },

            // Package 4 - Costa Rica
            {
                //Level 1
                id: "beach_004",
                name: "Costa Rica Beach & Adventure: 6-Day Eco Paradise",
                duration: { days: 6 },
                packageThumbnail: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800&h=600&fit=crop',
                shortDesc: "Combine pristine Pacific beaches with wildlife adventures and eco-lodge luxury",
                price: { amount: 1650000, currency: "NGN", priceType: "per person" },
                destination: "Guanacaste, Costa Rica",

                // Level 2
                highlights: ["Eco-Lodge Stay", "Wildlife Watching", "Volcano Views", "Beach Activities"],
                difficulty: "moderate",
                groupSize: { min: 4, max: 14 },
                startAndEndLocation: { startsAt: "Liberia, Costa Rica", endsAt: "Liberia, Costa Rica" },
                aboutPackage: "Experience the best of Costa Rica's Pacific coast with this perfect blend of adventure and relaxation. Stay in luxury eco-lodges, spot diverse wildlife including monkeys and exotic birds, explore volcanic landscapes, and enjoy pristine beaches. This sustainable tourism experience showcases Costa Rica's commitment to conservation while providing unforgettable memories in one of the world's most biodiverse countries.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Arrival & Eco-Lodge Check-in",
                        itineraryDetails: "Arrive at Liberia Airport and transfer through scenic countryside to your eco-lodge. Check-in and enjoy welcome drinks overlooking the Pacific Ocean. Evening nature walk with naturalist guide to spot wildlife and learn about local ecosystems."
                    },
                    {
                        itineraryTitle: "Day 2: Wildlife Sanctuary & Beach Time",
                        itineraryDetails: "Morning visit to a wildlife sanctuary to see rescued animals including sloths, monkeys, and colorful birds. Learn about conservation efforts and rehabilitation programs. Afternoon at Tamarindo Beach for swimming, surfing lessons, or simply relaxing on golden sand."
                    },
                    {
                        itineraryTitle: "Day 3: Volcano & Hot Springs Adventure",
                        itineraryDetails: "Full-day excursion to Rincon de la Vieja National Park. Hike through tropical forest to see volcanic activity, waterfalls, and diverse wildlife. Afternoon relaxation at natural hot springs with therapeutic volcanic mud treatments. Return to lodge for dinner."
                    },
                    {
                        itineraryTitle: "Day 4: Canopy Tour & Beach Activities",
                        itineraryDetails: "Morning zip-line canopy tour through the treetops for spectacular views and wildlife spotting. Afternoon at Conchal Beach, known for its unique shell sand. Options for snorkeling, kayaking, or horseback riding along the beach."
                    },
                    {
                        itineraryTitle: "Day 5: Mangrove Tour & Sunset Cruise",
                        itineraryDetails: "Morning boat tour through mangrove estuary to see crocodiles, birds, and marine life. Learn about the importance of mangrove ecosystems. Afternoon at leisure. Evening sunset cruise with dinner and live music while watching for dolphins."
                    },
                    {
                        itineraryTitle: "Day 6: Departure",
                        itineraryDetails: "Final breakfast with ocean views. Optional last-minute activities or souvenir shopping. Transfer to Liberia Airport for departure, taking with you memories of Costa Rica's natural beauty and commitment to conservation."
                    }
                ],
                inclusions: [
                    {
                        inclusionTitle: "Eco-Lodge Accommodation",
                        inclusionDetails: "6 nights in luxury eco-lodge with ocean views, sustainable practices, and integration with natural surroundings"
                    },
                    {
                        inclusionTitle: "All Meals & Fresh Beverages",
                        inclusionDetails: "Daily breakfast, lunch, and dinner featuring organic local ingredients, tropical fruits, and traditional Costa Rican cuisine"
                    },
                    {
                        inclusionTitle: "Airport Transfers & Transportation",
                        inclusionDetails: "Round-trip transfers from Liberia Airport plus comfortable transportation to all activities and attractions"
                    },
                    {
                        inclusionTitle: "Wildlife & Nature Tours",
                        inclusionDetails: "Guided tours to wildlife sanctuary, volcano national park, and mangrove estuary with experienced naturalist guides"
                    },
                    {
                        inclusionTitle: "Adventure Activities",
                        inclusionDetails: "Zip-line canopy tour, nature walks, hot springs access, and choice of beach activities including surfing lessons"
                    },
                    {
                        inclusionTitle: "Sunset Cruise & Park Fees",
                        inclusionDetails: "Romantic sunset cruise with dinner and dolphin watching, plus all national park entrance fees and conservation contributions"
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&h=600&fit=crop',
                        accomodationName: 'Eco-Lodge Ocean View Villa',
                        noOfNights: '6',
                        accomodationDesc: "Sustainable luxury villa with panoramic Pacific Ocean views, private terrace, and integration with tropical forest. Features solar power, rainwater collection, and locally-sourced materials."
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                ],
                addons: [
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                ],

                // Level 3
                totalPackages: {
                    remaining: 60,
                    totalCount: 70
                },

                tourGallery: [
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                ]
            },

            // Package 5 - Barbados
            {
                //Level 1
                id: "beach_005",
                name: "Barbados Cultural Beach: 5-Day Caribbean Heritage",
                duration: { days: 5 },
                packageThumbnail: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=800&h=600&fit=crop',
                shortDesc: "Experience Caribbean culture, rum heritage, and stunning beaches on this vibrant island",
                price: { amount: 1450000, currency: "NGN", priceType: "per person" },
                destination: "Barbados",

                // Level 2
                highlights: ["Rum Distillery", "Cultural Tours", "Caribbean Beaches", "Local Music"],
                difficulty: "easy",
                groupSize: { min: 2, max: 16 },
                startAndEndLocation: { startsAt: "Bridgetown, Barbados", endsAt: "Bridgetown, Barbados" },
                aboutPackage: "Immerse yourself in the rich culture and history of Barbados while enjoying some of the Caribbean's most beautiful beaches. From rum distillery tours to traditional fish markets, calypso music to colonial architecture, this experience showcases the authentic spirit of Barbados. Perfect for travelers seeking cultural enrichment alongside tropical relaxation.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Arrival & Bridgetown Heritage Tour",
                        itineraryDetails: "Arrive at Grantley Adams International Airport and transfer to your beachfront hotel. Afternoon walking tour of historic Bridgetown, a UNESCO World Heritage site. Visit the Parliament Buildings, National Heroes Square, and colorful local markets."
                    },
                    {
                        itineraryTitle: "Day 2: Rum Heritage & Harrison's Cave",
                        itineraryDetails: "Morning tour of Mount Gay Rum Distillery, the world's oldest rum producer, including tastings and history. Afternoon exploration of Harrison's Cave, traveling through underground limestone caverns with stunning formations."
                    },
                    {
                        itineraryTitle: "Day 3: Beach Day & Water Sports",
                        itineraryDetails: "Full day at Crane Beach, one of the world's most beautiful beaches with pink sand and dramatic cliffs. Options for swimming, snorkeling, boogie boarding, or simply relaxing. Beachfront lunch and sunset cocktails."
                    },
                    {
                        itineraryTitle: "Day 4: Cultural Immersion & Local Music",
                        itineraryDetails: "Morning visit to local fish market and pottery studio to see traditional crafts. Afternoon cooking class learning to prepare flying fish and other Bajan specialties. Evening dinner with live calypso and steel drum music."
                    },
                    {
                        itineraryTitle: "Day 5: Departure",
                        itineraryDetails: "Final breakfast with ocean views. Last-minute shopping at local craft markets for souvenirs and rum. Transfer to airport for departure, taking with you the warmth and culture of Barbados."
                    }
                ],
                inclusions: [
                    {
                        inclusionTitle: "Beachfront Hotel Stay",
                        inclusionDetails: "5 nights in luxury beachfront hotel with ocean views, private balcony, and direct beach access on the beautiful Caribbean coast"
                    },
                    {
                        inclusionTitle: "All Meals & Rum Tastings",
                        inclusionDetails: "Daily breakfast, lunch, and dinner featuring authentic Bajan cuisine, fresh seafood, and tropical fruits, plus rum tastings and cocktails"
                    },
                    {
                        inclusionTitle: "Cultural Tours & Activities",
                        inclusionDetails: "Guided tours of historic Bridgetown, rum distillery, Harrison's Cave, and local markets with knowledgeable cultural guides"
                    },
                    {
                        inclusionTitle: "Cooking Class & Music Experience",
                        inclusionDetails: "Traditional Bajan cooking class with local chef, plus evening entertainment with live calypso and steel drum performances"
                    },
                    {
                        inclusionTitle: "Beach Activities & Water Sports",
                        inclusionDetails: "Access to Crane Beach and other top beaches, with equipment for snorkeling, boogie boarding, and other water sports"
                    },
                    {
                        inclusionTitle: "Airport Transfers & Local Transport",
                        inclusionDetails: "Round-trip airport transfers and comfortable transportation to all activities and attractions throughout your stay"
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
                        accomodationName: 'Caribbean Beachfront Resort',
                        noOfNights: '5',
                        accomodationDesc: "Luxury beachfront resort with colonial Caribbean architecture, private beach access, infinity pool, and panoramic ocean views. Features traditional Bajan design with modern amenities."
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                ],
                addons: [
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                ],

                // Level 3
                totalPackages: {
                    remaining: 60,
                    totalCount: 70
                },

                tourGallery: [
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                ]
            }
        ]
    },

    {
        categoryName: "Romantic Getwaways",
        description: "Plan baecations, honeymoons, or dreamy spa weekends. Wherever love is calling, JAPA gets you there in style.",
        categoryThumbnail: 'https://ggsc.s3.us-west-2.amazonaws.com/assets/images/how_to_avoid_the_post-vacation_stress_frenzy_-_abcdef_-_0a21b39134b316e51cdc0dd96c5e6bca3c0093e9_-_abcdef_-_c3aa4369bd53794b17dba2719890b56de8809755.webp',
        packages: [
            // Package 1 - Maldives
            {
                //Level 1
                id: "beach_001",
                name: "Maldives Paradise: 7-Day Overwater Villa Escape",
                duration: { days: 7 },
                packageThumbnail: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&h=600&fit=crop',
                shortDesc: "Experience ultimate luxury in overwater villas with crystal-clear lagoons and world-class diving",
                price: { amount: 2850000, currency: "NGN", priceType: "per person" },
                destination: "Maldives",

                // Level 2
                highlights: ["Overwater Villa", "Snorkeling & Diving", "Spa Treatments", "Sunset Cruises"],
                difficulty: "relaxed",
                groupSize: { min: 2, max: 8 },
                startAndEndLocation: { startsAt: "Malé, Maldives", endsAt: "Malé, Maldives" },
                aboutPackage: "Escape to paradise in the Maldives, where turquoise waters meet pristine white sand beaches. Stay in luxurious overwater villas, enjoy world-class diving and snorkeling, indulge in spa treatments, and witness breathtaking sunsets. This carefully curated experience offers the perfect blend of relaxation, adventure, and luxury for discerning travelers seeking an unforgettable tropical getaway.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Arrival & Overwater Villa Check-in",
                        itineraryDetails: "Arrive at Malé International Airport and take a scenic seaplane transfer to your resort. Check into your overwater villa with direct lagoon access. Enjoy a welcome cocktail and sunset dinner on your private deck overlooking the Indian Ocean."
                    },
                    {
                        itineraryTitle: "Day 2: Snorkeling Adventure & Spa Relaxation",
                        itineraryDetails: "Morning guided snorkeling tour to explore vibrant coral reefs and tropical fish. Return for lunch at the resort's beachfront restaurant. Afternoon at the overwater spa with signature Maldivian treatments and infinity pool relaxation."
                    },
                    {
                        itineraryTitle: "Day 3: Dolphin Watching & Sandbank Picnic",
                        itineraryDetails: "Early morning dolphin watching cruise in traditional dhoni boats. Visit a pristine sandbank for a private picnic lunch. Evening at leisure with optional water sports including kayaking and paddleboarding."
                    },
                    {
                        itineraryTitle: "Day 4: Deep Sea Fishing & Cultural Village Tour",
                        itineraryDetails: "Half-day deep sea fishing excursion with experienced local guides. Fresh catch prepared for lunch by resort chefs. Afternoon visit to a local island to experience Maldivian culture and traditions."
                    },
                    {
                        itineraryTitle: "Day 5: Scuba Diving & Sunset Cruise",
                        itineraryDetails: "Certified diving experience at renowned dive sites with manta rays and reef sharks. Lunch and relaxation time. Evening sunset cruise with champagne and canapés as you watch the sky transform into brilliant colors."
                    },
                    {
                        itineraryTitle: "Day 6: Private Beach Day & Farewell Dinner",
                        itineraryDetails: "Spend the day at your own pace - private beach access, villa amenities, or additional spa treatments. Farewell dinner at the resort's signature restaurant with fresh seafood and international cuisine."
                    },
                    {
                        itineraryTitle: "Day 7: Departure",
                        itineraryDetails: "Final breakfast in your villa. Seaplane transfer back to Malé International Airport for your departure flight. Take with you memories of paradise and the tranquil beauty of the Maldives."
                    }
                ],
                inclusions: [
                    {
                        inclusionTitle: "7 nights in Luxury Overwater villa",
                        inclusionDetails: "7 nights in luxury overwater villa with direct lagoon access, private deck, and glass floor panels for underwater viewing"
                    },
                    {
                        inclusionTitle: "All Meals & Premium Beverages",
                        inclusionDetails: "Daily breakfast, lunch, and dinner at resort restaurants, plus premium alcoholic and non-alcoholic beverages throughout your stay"
                    },
                    {
                        inclusionTitle: "Seaplane Transfers",
                        inclusionDetails: "Round-trip scenic seaplane transfers between Malé Airport and resort, offering stunning aerial views of the atolls"
                    },
                    {
                        inclusionTitle: "Water Sports Equipment",
                        inclusionDetails: "Complimentary use of snorkeling gear, kayaks, paddleboards, and windsurfing equipment for unlimited water adventures"
                    },
                    {
                        inclusionTitle: "Daily Excursions",
                        inclusionDetails: "Guided snorkeling tours, dolphin watching, sandbank visits, fishing trips, and cultural island tours with local guides"
                    },
                    {
                        inclusionTitle: "Spa Credit & Airport Assistance",
                        inclusionDetails: "$200 spa credit per person for treatments, plus VIP airport assistance and dedicated resort representative throughout stay"
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                ],
                addons: [
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                ],

                // Level 3
                totalPackages: {
                    remaining: 60,
                    totalCount: 70
                },

                tourGallery: [
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                ]
            },

            // Package 2 - Santorini
            {
                //Level 1
                id: "beach_002",
                name: "Santorini Sunset: 5-Day Greek Island Romance",
                duration: { days: 5 },
                packageThumbnail: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop',
                shortDesc: "Discover Santorini's dramatic cliffs, volcanic beaches, and world-famous sunsets",
                price: { amount: 1950000, currency: "NGN", priceType: "per person" },
                destination: "Santorini, Greece",

                // Level 2
                highlights: ["Clifftop Hotels", "Volcanic Beaches", "Wine Tasting", "Sunset Views"],
                difficulty: "moderate",
                groupSize: { min: 2, max: 10 },
                startAndEndLocation: { startsAt: "Santorini Airport", endsAt: "Santorini Airport" },
                aboutPackage: "Experience the magic of Santorini with its iconic blue-domed churches, dramatic cliff-top villages, and spectacular sunsets. This romantic getaway combines luxury accommodation with authentic Greek experiences, from wine tasting at local vineyards to exploring unique volcanic beaches. Perfect for couples and small groups seeking a blend of relaxation and cultural discovery.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Arrival & Oia Exploration",
                        itineraryDetails: "Arrive at Santorini Airport and transfer to your clifftop hotel in Oia. Check-in and enjoy welcome drinks overlooking the caldera. Evening stroll through Oia's charming streets, visiting local boutiques and art galleries before dinner at a traditional taverna."
                    },
                    {
                        itineraryTitle: "Day 2: Volcano Tour & Hot Springs",
                        itineraryDetails: "Morning boat excursion to the active volcano island of Nea Kameni. Hike to the crater and learn about the island's geological history. Afternoon relaxation at the natural hot springs of Palea Kameni. Return for sunset viewing from your hotel terrace."
                    },
                    {
                        itineraryTitle: "Day 3: Wine Tasting & Red Beach",
                        itineraryDetails: "Visit three traditional wineries across the island, tasting unique Assyrtiko wines and learning about volcanic soil viticulture. Lunch at a vineyard restaurant with caldera views. Afternoon at the famous Red Beach with its dramatic red volcanic cliffs."
                    },
                    {
                        itineraryTitle: "Day 4: Fira & Traditional Villages",
                        itineraryDetails: "Explore Fira, the island's capital, with its archaeological museum and traditional architecture. Visit the picturesque village of Pyrgos and its medieval castle. Afternoon cooking class learning to prepare traditional Greek dishes with local ingredients."
                    },
                    {
                        itineraryTitle: "Day 5: Departure",
                        itineraryDetails: "Final breakfast with caldera views. Last-minute shopping in Fira for local products and souvenirs. Private transfer to Santorini Airport for departure, taking with you memories of Greece's most romantic island."
                    }
                ],
                inclusions: [
                    {
                        inclusionTitle: "Clifftop Hotel with Caldera Views",
                        inclusionDetails: "5 nights in luxury clifftop accommodation with private balcony, infinity pool access, and breathtaking caldera views"
                    },
                    {
                        inclusionTitle: "Daily Breakfast & 2 Dinners",
                        inclusionDetails: "Daily Greek breakfast with local products, plus 2 traditional dinners at highly-rated tavernas featuring fresh seafood and regional specialties"
                    },
                    {
                        inclusionTitle: "Private Airport Transfers",
                        inclusionDetails: "Round-trip private transfers between Santorini Airport and hotel, with professional drivers and comfortable vehicles"
                    },
                    {
                        inclusionTitle: "Volcano & Hot Springs Tour",
                        inclusionDetails: "Full-day guided boat tour to active volcano, hot springs, and surrounding islands with professional guide and traditional Greek boat"
                    },
                    {
                        inclusionTitle: "Wine Tasting Experience",
                        inclusionDetails: "Visit to three premium wineries with tastings of 12+ local wines, including rare Assyrtiko varieties and traditional Vinsanto dessert wine"
                    },
                    {
                        inclusionTitle: "Cooking Class & Cultural Tours",
                        inclusionDetails: "Traditional Greek cooking class with local chef, plus guided tours of Fira, Pyrgos, and other charming villages with historical insights"
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&h=600&fit=crop',
                        accomodationName: 'Clifftop Suite with Infinity Pool',
                        noOfNights: '5',
                        accomodationDesc: "Luxury suite carved into the cliff face with traditional Cycladic architecture, private balcony, infinity pool access, and unobstructed views of the caldera and famous Santorini sunsets."
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                ],

                addons: [
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                ],

                // Level 3
                totalPackages: {
                    remaining: 60,
                    totalCount: 70
                },

                tourGallery: [
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                ]
            },

            // Package 3 - Seychelles
            {
                //Level 1
                id: "beach_003",
                name: "Seychelles Discovery: 8-Day Island Paradise",
                duration: { days: 8 },
                packageThumbnail: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
                shortDesc: "Explore pristine beaches, unique wildlife, and luxury resorts across multiple Seychelles islands",
                price: { amount: 3200000, currency: "NGN", priceType: "per person" },
                destination: "Seychelles",

                // Level 2
                highlights: ["Three Islands", "Giant Tortoises", "Pristine Beaches", "Snorkeling"],
                difficulty: "easy",
                groupSize: { min: 2, max: 12 },
                startAndEndLocation: { startsAt: "Mahé, Seychelles", endsAt: "Mahé, Seychelles" },
                aboutPackage: "Discover the untouched beauty of Seychelles across three stunning islands. From the granite boulders of La Digue to the pristine beaches of Praslin and the vibrant culture of Mahé, this island-hopping adventure offers encounters with giant tortoises, rare birds, and some of the world's most beautiful beaches. Perfect for nature lovers and beach enthusiasts seeking an authentic tropical experience.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Arrival in Mahé & Victoria Exploration",
                        itineraryDetails: "Arrive at Seychelles International Airport and transfer to your beachfront resort. Afternoon tour of Victoria, the world's smallest capital city, visiting the colorful market, clock tower, and botanical gardens. Welcome dinner featuring Creole cuisine."
                    },
                    {
                        itineraryTitle: "Day 2: Mahé Island Tour & Morne Seychellois",
                        itineraryDetails: "Full-day island tour including Morne Seychellois National Park, tea plantation visit, and craft village. Lunch at a local restaurant with ocean views. Afternoon at Beau Vallon Beach for swimming and water sports."
                    },
                    {
                        itineraryTitle: "Day 3: Ferry to Praslin & Vallée de Mai",
                        itineraryDetails: "Morning ferry to Praslin Island. Check into beachfront accommodation. Afternoon exploration of Vallée de Mai Nature Reserve, home to the famous Coco de Mer palm and rare black parrots. Evening at leisure on Côte d'Or Beach."
                    },
                    {
                        itineraryTitle: "Day 4: Anse Lazio & Praslin Exploration",
                        itineraryDetails: "Visit Anse Lazio, often rated among the world's best beaches, for swimming and snorkeling. Lunch at a beachfront restaurant. Afternoon island tour visiting local villages and learning about Seychellois culture and traditions."
                    },
                    {
                        itineraryTitle: "Day 5: La Digue Island & Giant Tortoises",
                        itineraryDetails: "Day trip to La Digue Island by ferry. Explore the island by bicycle, visiting L'Union Estate to see giant tortoises and traditional coconut processing. Afternoon at Anse Source d'Argent with its famous granite boulders."
                    },
                    {
                        itineraryTitle: "Day 6: Snorkeling & Marine Life",
                        itineraryDetails: "Half-day snorkeling excursion to Curieuse Island Marine Park. Encounter diverse marine life including tropical fish, rays, and possibly sea turtles. Beach barbecue lunch on a deserted beach. Return to Praslin for relaxation."
                    },
                    {
                        itineraryTitle: "Day 7: Return to Mahé & Sunset Cruise",
                        itineraryDetails: "Morning ferry back to Mahé. Check into resort and enjoy beach time. Afternoon at leisure for shopping or spa treatments. Evening sunset cruise with dinner and live music, celebrating your Seychelles adventure."
                    },
                    {
                        itineraryTitle: "Day 8: Departure",
                        itineraryDetails: "Final breakfast with ocean views. Last-minute souvenir shopping at local markets. Private transfer to Seychelles International Airport for departure, carrying memories of paradise islands."
                    }
                ],
                inclusions: [
                    {
                        inclusionTitle: "Multi-Island Accommodation",
                        inclusionDetails: "8 nights in luxury beachfront resorts across Mahé and Praslin islands, all with ocean views and private beach access"
                    },
                    {
                        inclusionTitle: "All Meals & Local Beverages",
                        inclusionDetails: "Daily breakfast, lunch, and dinner featuring fresh seafood and authentic Creole cuisine, plus local beverages and fresh fruit juices"
                    },
                    {
                        inclusionTitle: "Inter-Island Ferry Transfers",
                        inclusionDetails: "Round-trip ferry transfers between Mahé and Praslin, plus day trip to La Digue with comfortable seating and scenic views"
                    },
                    {
                        inclusionTitle: "National Park Entrance Fees",
                        inclusionDetails: "Entry to Vallée de Mai Nature Reserve, Morne Seychellois National Park, and Curieuse Marine Park with certified guides"
                    },
                    {
                        inclusionTitle: "Island Tours & Activities",
                        inclusionDetails: "Guided tours of all three islands, bicycle rental on La Digue, snorkeling equipment, and cultural village visits"
                    },
                    {
                        inclusionTitle: "Sunset Cruise & Airport Transfers",
                        inclusionDetails: "Romantic sunset cruise with dinner and entertainment, plus private airport transfers and 24/7 local support throughout your stay"
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&h=600&fit=crop',
                        accomodationName: 'Beachfront Villa - Mahé',
                        noOfNights: '4',
                        accomodationDesc: "Luxury beachfront villa with private terrace, direct beach access, and tropical garden views. Features modern amenities with traditional Seychellois design elements."
                    },
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
                        accomodationName: 'Ocean View Resort - Praslin',
                        noOfNights: '4',
                        accomodationDesc: "Elegant resort accommodation with panoramic ocean views, private balcony, and access to Côte d'Or Beach. Surrounded by lush tropical vegetation."
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                ],
                addons: [
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                ],

                // Level 3
                totalPackages: {
                    remaining: 60,
                    totalCount: 70
                },

                tourGallery: [
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                ]
            },

            // Package 4 - Costa Rica
            {
                //Level 1
                id: "beach_004",
                name: "Costa Rica Beach & Adventure: 6-Day Eco Paradise",
                duration: { days: 6 },
                packageThumbnail: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800&h=600&fit=crop',
                shortDesc: "Combine pristine Pacific beaches with wildlife adventures and eco-lodge luxury",
                price: { amount: 1650000, currency: "NGN", priceType: "per person" },
                destination: "Guanacaste, Costa Rica",

                // Level 2
                highlights: ["Eco-Lodge Stay", "Wildlife Watching", "Volcano Views", "Beach Activities"],
                difficulty: "moderate",
                groupSize: { min: 4, max: 14 },
                startAndEndLocation: { startsAt: "Liberia, Costa Rica", endsAt: "Liberia, Costa Rica" },
                aboutPackage: "Experience the best of Costa Rica's Pacific coast with this perfect blend of adventure and relaxation. Stay in luxury eco-lodges, spot diverse wildlife including monkeys and exotic birds, explore volcanic landscapes, and enjoy pristine beaches. This sustainable tourism experience showcases Costa Rica's commitment to conservation while providing unforgettable memories in one of the world's most biodiverse countries.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Arrival & Eco-Lodge Check-in",
                        itineraryDetails: "Arrive at Liberia Airport and transfer through scenic countryside to your eco-lodge. Check-in and enjoy welcome drinks overlooking the Pacific Ocean. Evening nature walk with naturalist guide to spot wildlife and learn about local ecosystems."
                    },
                    {
                        itineraryTitle: "Day 2: Wildlife Sanctuary & Beach Time",
                        itineraryDetails: "Morning visit to a wildlife sanctuary to see rescued animals including sloths, monkeys, and colorful birds. Learn about conservation efforts and rehabilitation programs. Afternoon at Tamarindo Beach for swimming, surfing lessons, or simply relaxing on golden sand."
                    },
                    {
                        itineraryTitle: "Day 3: Volcano & Hot Springs Adventure",
                        itineraryDetails: "Full-day excursion to Rincon de la Vieja National Park. Hike through tropical forest to see volcanic activity, waterfalls, and diverse wildlife. Afternoon relaxation at natural hot springs with therapeutic volcanic mud treatments. Return to lodge for dinner."
                    },
                    {
                        itineraryTitle: "Day 4: Canopy Tour & Beach Activities",
                        itineraryDetails: "Morning zip-line canopy tour through the treetops for spectacular views and wildlife spotting. Afternoon at Conchal Beach, known for its unique shell sand. Options for snorkeling, kayaking, or horseback riding along the beach."
                    },
                    {
                        itineraryTitle: "Day 5: Mangrove Tour & Sunset Cruise",
                        itineraryDetails: "Morning boat tour through mangrove estuary to see crocodiles, birds, and marine life. Learn about the importance of mangrove ecosystems. Afternoon at leisure. Evening sunset cruise with dinner and live music while watching for dolphins."
                    },
                    {
                        itineraryTitle: "Day 6: Departure",
                        itineraryDetails: "Final breakfast with ocean views. Optional last-minute activities or souvenir shopping. Transfer to Liberia Airport for departure, taking with you memories of Costa Rica's natural beauty and commitment to conservation."
                    }
                ],
                inclusions: [
                    {
                        inclusionTitle: "Eco-Lodge Accommodation",
                        inclusionDetails: "6 nights in luxury eco-lodge with ocean views, sustainable practices, and integration with natural surroundings"
                    },
                    {
                        inclusionTitle: "All Meals & Fresh Beverages",
                        inclusionDetails: "Daily breakfast, lunch, and dinner featuring organic local ingredients, tropical fruits, and traditional Costa Rican cuisine"
                    },
                    {
                        inclusionTitle: "Airport Transfers & Transportation",
                        inclusionDetails: "Round-trip transfers from Liberia Airport plus comfortable transportation to all activities and attractions"
                    },
                    {
                        inclusionTitle: "Wildlife & Nature Tours",
                        inclusionDetails: "Guided tours to wildlife sanctuary, volcano national park, and mangrove estuary with experienced naturalist guides"
                    },
                    {
                        inclusionTitle: "Adventure Activities",
                        inclusionDetails: "Zip-line canopy tour, nature walks, hot springs access, and choice of beach activities including surfing lessons"
                    },
                    {
                        inclusionTitle: "Sunset Cruise & Park Fees",
                        inclusionDetails: "Romantic sunset cruise with dinner and dolphin watching, plus all national park entrance fees and conservation contributions"
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&h=600&fit=crop',
                        accomodationName: 'Eco-Lodge Ocean View Villa',
                        noOfNights: '6',
                        accomodationDesc: "Sustainable luxury villa with panoramic Pacific Ocean views, private terrace, and integration with tropical forest. Features solar power, rainwater collection, and locally-sourced materials."
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                ],
                addons: [
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                ],

                // Level 3
                totalPackages: {
                    remaining: 60,
                    totalCount: 70
                },

                tourGallery: [
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                ]
            },

            // Package 5 - Barbados
            {
                //Level 1
                id: "beach_005",
                name: "Barbados Cultural Beach: 5-Day Caribbean Heritage",
                duration: { days: 5 },
                packageThumbnail: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=800&h=600&fit=crop',
                shortDesc: "Experience Caribbean culture, rum heritage, and stunning beaches on this vibrant island",
                price: { amount: 1450000, currency: "NGN", priceType: "per person" },
                destination: "Barbados",

                // Level 2
                highlights: ["Rum Distillery", "Cultural Tours", "Caribbean Beaches", "Local Music"],
                difficulty: "easy",
                groupSize: { min: 2, max: 16 },
                startAndEndLocation: { startsAt: "Bridgetown, Barbados", endsAt: "Bridgetown, Barbados" },
                aboutPackage: "Immerse yourself in the rich culture and history of Barbados while enjoying some of the Caribbean's most beautiful beaches. From rum distillery tours to traditional fish markets, calypso music to colonial architecture, this experience showcases the authentic spirit of Barbados. Perfect for travelers seeking cultural enrichment alongside tropical relaxation.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Arrival & Bridgetown Heritage Tour",
                        itineraryDetails: "Arrive at Grantley Adams International Airport and transfer to your beachfront hotel. Afternoon walking tour of historic Bridgetown, a UNESCO World Heritage site. Visit the Parliament Buildings, National Heroes Square, and colorful local markets."
                    },
                    {
                        itineraryTitle: "Day 2: Rum Heritage & Harrison's Cave",
                        itineraryDetails: "Morning tour of Mount Gay Rum Distillery, the world's oldest rum producer, including tastings and history. Afternoon exploration of Harrison's Cave, traveling through underground limestone caverns with stunning formations."
                    },
                    {
                        itineraryTitle: "Day 3: Beach Day & Water Sports",
                        itineraryDetails: "Full day at Crane Beach, one of the world's most beautiful beaches with pink sand and dramatic cliffs. Options for swimming, snorkeling, boogie boarding, or simply relaxing. Beachfront lunch and sunset cocktails."
                    },
                    {
                        itineraryTitle: "Day 4: Cultural Immersion & Local Music",
                        itineraryDetails: "Morning visit to local fish market and pottery studio to see traditional crafts. Afternoon cooking class learning to prepare flying fish and other Bajan specialties. Evening dinner with live calypso and steel drum music."
                    },
                    {
                        itineraryTitle: "Day 5: Departure",
                        itineraryDetails: "Final breakfast with ocean views. Last-minute shopping at local craft markets for souvenirs and rum. Transfer to airport for departure, taking with you the warmth and culture of Barbados."
                    }
                ],
                inclusions: [
                    {
                        inclusionTitle: "Beachfront Hotel Stay",
                        inclusionDetails: "5 nights in luxury beachfront hotel with ocean views, private balcony, and direct beach access on the beautiful Caribbean coast"
                    },
                    {
                        inclusionTitle: "All Meals & Rum Tastings",
                        inclusionDetails: "Daily breakfast, lunch, and dinner featuring authentic Bajan cuisine, fresh seafood, and tropical fruits, plus rum tastings and cocktails"
                    },
                    {
                        inclusionTitle: "Cultural Tours & Activities",
                        inclusionDetails: "Guided tours of historic Bridgetown, rum distillery, Harrison's Cave, and local markets with knowledgeable cultural guides"
                    },
                    {
                        inclusionTitle: "Cooking Class & Music Experience",
                        inclusionDetails: "Traditional Bajan cooking class with local chef, plus evening entertainment with live calypso and steel drum performances"
                    },
                    {
                        inclusionTitle: "Beach Activities & Water Sports",
                        inclusionDetails: "Access to Crane Beach and other top beaches, with equipment for snorkeling, boogie boarding, and other water sports"
                    },
                    {
                        inclusionTitle: "Airport Transfers & Local Transport",
                        inclusionDetails: "Round-trip airport transfers and comfortable transportation to all activities and attractions throughout your stay"
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
                        accomodationName: 'Caribbean Beachfront Resort',
                        noOfNights: '5',
                        accomodationDesc: "Luxury beachfront resort with colonial Caribbean architecture, private beach access, infinity pool, and panoramic ocean views. Features traditional Bajan design with modern amenities."
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                ],
                addons: [
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                ],

                // Level 3
                totalPackages: {
                    remaining: 60,
                    totalCount: 70
                },

                tourGallery: [
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                ]
            }
        ]
    },

    {
        categoryName: "Family Vacation",
        description: "For the whole crew. From cultural tours to kid-friendly resorts, JAPA makes family travel easy, fun, and unforgettable.",
        categoryThumbnail: 'https://ggsc.s3.us-west-2.amazonaws.com/assets/images/how_to_avoid_the_post-vacation_stress_frenzy_-_abcdef_-_0a21b39134b316e51cdc0dd96c5e6bca3c0093e9_-_abcdef_-_c3aa4369bd53794b17dba2719890b56de8809755.webp',
        packages: [
            // Package 1 - Maldives
            {
                //Level 1
                id: "beach_001",
                name: "Maldives Paradise: 7-Day Overwater Villa Escape",
                duration: { days: 7 },
                packageThumbnail: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&h=600&fit=crop',
                shortDesc: "Experience ultimate luxury in overwater villas with crystal-clear lagoons and world-class diving",
                price: { amount: 2850000, currency: "NGN", priceType: "per person" },
                destination: "Maldives",

                // Level 2
                highlights: ["Overwater Villa", "Snorkeling & Diving", "Spa Treatments", "Sunset Cruises"],
                difficulty: "relaxed",
                groupSize: { min: 2, max: 8 },
                startAndEndLocation: { startsAt: "Malé, Maldives", endsAt: "Malé, Maldives" },
                aboutPackage: "Escape to paradise in the Maldives, where turquoise waters meet pristine white sand beaches. Stay in luxurious overwater villas, enjoy world-class diving and snorkeling, indulge in spa treatments, and witness breathtaking sunsets. This carefully curated experience offers the perfect blend of relaxation, adventure, and luxury for discerning travelers seeking an unforgettable tropical getaway.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Arrival & Overwater Villa Check-in",
                        itineraryDetails: "Arrive at Malé International Airport and take a scenic seaplane transfer to your resort. Check into your overwater villa with direct lagoon access. Enjoy a welcome cocktail and sunset dinner on your private deck overlooking the Indian Ocean."
                    },
                    {
                        itineraryTitle: "Day 2: Snorkeling Adventure & Spa Relaxation",
                        itineraryDetails: "Morning guided snorkeling tour to explore vibrant coral reefs and tropical fish. Return for lunch at the resort's beachfront restaurant. Afternoon at the overwater spa with signature Maldivian treatments and infinity pool relaxation."
                    },
                    {
                        itineraryTitle: "Day 3: Dolphin Watching & Sandbank Picnic",
                        itineraryDetails: "Early morning dolphin watching cruise in traditional dhoni boats. Visit a pristine sandbank for a private picnic lunch. Evening at leisure with optional water sports including kayaking and paddleboarding."
                    },
                    {
                        itineraryTitle: "Day 4: Deep Sea Fishing & Cultural Village Tour",
                        itineraryDetails: "Half-day deep sea fishing excursion with experienced local guides. Fresh catch prepared for lunch by resort chefs. Afternoon visit to a local island to experience Maldivian culture and traditions."
                    },
                    {
                        itineraryTitle: "Day 5: Scuba Diving & Sunset Cruise",
                        itineraryDetails: "Certified diving experience at renowned dive sites with manta rays and reef sharks. Lunch and relaxation time. Evening sunset cruise with champagne and canapés as you watch the sky transform into brilliant colors."
                    },
                    {
                        itineraryTitle: "Day 6: Private Beach Day & Farewell Dinner",
                        itineraryDetails: "Spend the day at your own pace - private beach access, villa amenities, or additional spa treatments. Farewell dinner at the resort's signature restaurant with fresh seafood and international cuisine."
                    },
                    {
                        itineraryTitle: "Day 7: Departure",
                        itineraryDetails: "Final breakfast in your villa. Seaplane transfer back to Malé International Airport for your departure flight. Take with you memories of paradise and the tranquil beauty of the Maldives."
                    }
                ],
                inclusions: [
                    {
                        inclusionTitle: "7 nights in Luxury Overwater villa",
                        inclusionDetails: "7 nights in luxury overwater villa with direct lagoon access, private deck, and glass floor panels for underwater viewing"
                    },
                    {
                        inclusionTitle: "All Meals & Premium Beverages",
                        inclusionDetails: "Daily breakfast, lunch, and dinner at resort restaurants, plus premium alcoholic and non-alcoholic beverages throughout your stay"
                    },
                    {
                        inclusionTitle: "Seaplane Transfers",
                        inclusionDetails: "Round-trip scenic seaplane transfers between Malé Airport and resort, offering stunning aerial views of the atolls"
                    },
                    {
                        inclusionTitle: "Water Sports Equipment",
                        inclusionDetails: "Complimentary use of snorkeling gear, kayaks, paddleboards, and windsurfing equipment for unlimited water adventures"
                    },
                    {
                        inclusionTitle: "Daily Excursions",
                        inclusionDetails: "Guided snorkeling tours, dolphin watching, sandbank visits, fishing trips, and cultural island tours with local guides"
                    },
                    {
                        inclusionTitle: "Spa Credit & Airport Assistance",
                        inclusionDetails: "$200 spa credit per person for treatments, plus VIP airport assistance and dedicated resort representative throughout stay"
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                ],
                addons: [
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                ],

                // Level 3
                totalPackages: {
                    remaining: 60,
                    totalCount: 70
                },

                tourGallery: [
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                ]
            },

            // Package 2 - Santorini
            {
                //Level 1
                id: "beach_002",
                name: "Santorini Sunset: 5-Day Greek Island Romance",
                duration: { days: 5 },
                packageThumbnail: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop',
                shortDesc: "Discover Santorini's dramatic cliffs, volcanic beaches, and world-famous sunsets",
                price: { amount: 1950000, currency: "NGN", priceType: "per person" },
                destination: "Santorini, Greece",

                // Level 2
                highlights: ["Clifftop Hotels", "Volcanic Beaches", "Wine Tasting", "Sunset Views"],
                difficulty: "moderate",
                groupSize: { min: 2, max: 10 },
                startAndEndLocation: { startsAt: "Santorini Airport", endsAt: "Santorini Airport" },
                aboutPackage: "Experience the magic of Santorini with its iconic blue-domed churches, dramatic cliff-top villages, and spectacular sunsets. This romantic getaway combines luxury accommodation with authentic Greek experiences, from wine tasting at local vineyards to exploring unique volcanic beaches. Perfect for couples and small groups seeking a blend of relaxation and cultural discovery.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Arrival & Oia Exploration",
                        itineraryDetails: "Arrive at Santorini Airport and transfer to your clifftop hotel in Oia. Check-in and enjoy welcome drinks overlooking the caldera. Evening stroll through Oia's charming streets, visiting local boutiques and art galleries before dinner at a traditional taverna."
                    },
                    {
                        itineraryTitle: "Day 2: Volcano Tour & Hot Springs",
                        itineraryDetails: "Morning boat excursion to the active volcano island of Nea Kameni. Hike to the crater and learn about the island's geological history. Afternoon relaxation at the natural hot springs of Palea Kameni. Return for sunset viewing from your hotel terrace."
                    },
                    {
                        itineraryTitle: "Day 3: Wine Tasting & Red Beach",
                        itineraryDetails: "Visit three traditional wineries across the island, tasting unique Assyrtiko wines and learning about volcanic soil viticulture. Lunch at a vineyard restaurant with caldera views. Afternoon at the famous Red Beach with its dramatic red volcanic cliffs."
                    },
                    {
                        itineraryTitle: "Day 4: Fira & Traditional Villages",
                        itineraryDetails: "Explore Fira, the island's capital, with its archaeological museum and traditional architecture. Visit the picturesque village of Pyrgos and its medieval castle. Afternoon cooking class learning to prepare traditional Greek dishes with local ingredients."
                    },
                    {
                        itineraryTitle: "Day 5: Departure",
                        itineraryDetails: "Final breakfast with caldera views. Last-minute shopping in Fira for local products and souvenirs. Private transfer to Santorini Airport for departure, taking with you memories of Greece's most romantic island."
                    }
                ],
                inclusions: [
                    {
                        inclusionTitle: "Clifftop Hotel with Caldera Views",
                        inclusionDetails: "5 nights in luxury clifftop accommodation with private balcony, infinity pool access, and breathtaking caldera views"
                    },
                    {
                        inclusionTitle: "Daily Breakfast & 2 Dinners",
                        inclusionDetails: "Daily Greek breakfast with local products, plus 2 traditional dinners at highly-rated tavernas featuring fresh seafood and regional specialties"
                    },
                    {
                        inclusionTitle: "Private Airport Transfers",
                        inclusionDetails: "Round-trip private transfers between Santorini Airport and hotel, with professional drivers and comfortable vehicles"
                    },
                    {
                        inclusionTitle: "Volcano & Hot Springs Tour",
                        inclusionDetails: "Full-day guided boat tour to active volcano, hot springs, and surrounding islands with professional guide and traditional Greek boat"
                    },
                    {
                        inclusionTitle: "Wine Tasting Experience",
                        inclusionDetails: "Visit to three premium wineries with tastings of 12+ local wines, including rare Assyrtiko varieties and traditional Vinsanto dessert wine"
                    },
                    {
                        inclusionTitle: "Cooking Class & Cultural Tours",
                        inclusionDetails: "Traditional Greek cooking class with local chef, plus guided tours of Fira, Pyrgos, and other charming villages with historical insights"
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&h=600&fit=crop',
                        accomodationName: 'Clifftop Suite with Infinity Pool',
                        noOfNights: '5',
                        accomodationDesc: "Luxury suite carved into the cliff face with traditional Cycladic architecture, private balcony, infinity pool access, and unobstructed views of the caldera and famous Santorini sunsets."
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                ],

                addons: [
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                ],

                // Level 3
                totalPackages: {
                    remaining: 60,
                    totalCount: 70
                },

                tourGallery: [
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                ]
            },

            // Package 3 - Seychelles
            {
                //Level 1
                id: "beach_003",
                name: "Seychelles Discovery: 8-Day Island Paradise",
                duration: { days: 8 },
                packageThumbnail: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
                shortDesc: "Explore pristine beaches, unique wildlife, and luxury resorts across multiple Seychelles islands",
                price: { amount: 3200000, currency: "NGN", priceType: "per person" },
                destination: "Seychelles",

                // Level 2
                highlights: ["Three Islands", "Giant Tortoises", "Pristine Beaches", "Snorkeling"],
                difficulty: "easy",
                groupSize: { min: 2, max: 12 },
                startAndEndLocation: { startsAt: "Mahé, Seychelles", endsAt: "Mahé, Seychelles" },
                aboutPackage: "Discover the untouched beauty of Seychelles across three stunning islands. From the granite boulders of La Digue to the pristine beaches of Praslin and the vibrant culture of Mahé, this island-hopping adventure offers encounters with giant tortoises, rare birds, and some of the world's most beautiful beaches. Perfect for nature lovers and beach enthusiasts seeking an authentic tropical experience.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Arrival in Mahé & Victoria Exploration",
                        itineraryDetails: "Arrive at Seychelles International Airport and transfer to your beachfront resort. Afternoon tour of Victoria, the world's smallest capital city, visiting the colorful market, clock tower, and botanical gardens. Welcome dinner featuring Creole cuisine."
                    },
                    {
                        itineraryTitle: "Day 2: Mahé Island Tour & Morne Seychellois",
                        itineraryDetails: "Full-day island tour including Morne Seychellois National Park, tea plantation visit, and craft village. Lunch at a local restaurant with ocean views. Afternoon at Beau Vallon Beach for swimming and water sports."
                    },
                    {
                        itineraryTitle: "Day 3: Ferry to Praslin & Vallée de Mai",
                        itineraryDetails: "Morning ferry to Praslin Island. Check into beachfront accommodation. Afternoon exploration of Vallée de Mai Nature Reserve, home to the famous Coco de Mer palm and rare black parrots. Evening at leisure on Côte d'Or Beach."
                    },
                    {
                        itineraryTitle: "Day 4: Anse Lazio & Praslin Exploration",
                        itineraryDetails: "Visit Anse Lazio, often rated among the world's best beaches, for swimming and snorkeling. Lunch at a beachfront restaurant. Afternoon island tour visiting local villages and learning about Seychellois culture and traditions."
                    },
                    {
                        itineraryTitle: "Day 5: La Digue Island & Giant Tortoises",
                        itineraryDetails: "Day trip to La Digue Island by ferry. Explore the island by bicycle, visiting L'Union Estate to see giant tortoises and traditional coconut processing. Afternoon at Anse Source d'Argent with its famous granite boulders."
                    },
                    {
                        itineraryTitle: "Day 6: Snorkeling & Marine Life",
                        itineraryDetails: "Half-day snorkeling excursion to Curieuse Island Marine Park. Encounter diverse marine life including tropical fish, rays, and possibly sea turtles. Beach barbecue lunch on a deserted beach. Return to Praslin for relaxation."
                    },
                    {
                        itineraryTitle: "Day 7: Return to Mahé & Sunset Cruise",
                        itineraryDetails: "Morning ferry back to Mahé. Check into resort and enjoy beach time. Afternoon at leisure for shopping or spa treatments. Evening sunset cruise with dinner and live music, celebrating your Seychelles adventure."
                    },
                    {
                        itineraryTitle: "Day 8: Departure",
                        itineraryDetails: "Final breakfast with ocean views. Last-minute souvenir shopping at local markets. Private transfer to Seychelles International Airport for departure, carrying memories of paradise islands."
                    }
                ],
                inclusions: [
                    {
                        inclusionTitle: "Multi-Island Accommodation",
                        inclusionDetails: "8 nights in luxury beachfront resorts across Mahé and Praslin islands, all with ocean views and private beach access"
                    },
                    {
                        inclusionTitle: "All Meals & Local Beverages",
                        inclusionDetails: "Daily breakfast, lunch, and dinner featuring fresh seafood and authentic Creole cuisine, plus local beverages and fresh fruit juices"
                    },
                    {
                        inclusionTitle: "Inter-Island Ferry Transfers",
                        inclusionDetails: "Round-trip ferry transfers between Mahé and Praslin, plus day trip to La Digue with comfortable seating and scenic views"
                    },
                    {
                        inclusionTitle: "National Park Entrance Fees",
                        inclusionDetails: "Entry to Vallée de Mai Nature Reserve, Morne Seychellois National Park, and Curieuse Marine Park with certified guides"
                    },
                    {
                        inclusionTitle: "Island Tours & Activities",
                        inclusionDetails: "Guided tours of all three islands, bicycle rental on La Digue, snorkeling equipment, and cultural village visits"
                    },
                    {
                        inclusionTitle: "Sunset Cruise & Airport Transfers",
                        inclusionDetails: "Romantic sunset cruise with dinner and entertainment, plus private airport transfers and 24/7 local support throughout your stay"
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&h=600&fit=crop',
                        accomodationName: 'Beachfront Villa - Mahé',
                        noOfNights: '4',
                        accomodationDesc: "Luxury beachfront villa with private terrace, direct beach access, and tropical garden views. Features modern amenities with traditional Seychellois design elements."
                    },
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
                        accomodationName: 'Ocean View Resort - Praslin',
                        noOfNights: '4',
                        accomodationDesc: "Elegant resort accommodation with panoramic ocean views, private balcony, and access to Côte d'Or Beach. Surrounded by lush tropical vegetation."
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                ],
                addons: [
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                ],

                // Level 3
                totalPackages: {
                    remaining: 60,
                    totalCount: 70
                },

                tourGallery: [
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                ]
            },

            // Package 4 - Costa Rica
            {
                //Level 1
                id: "beach_004",
                name: "Costa Rica Beach & Adventure: 6-Day Eco Paradise",
                duration: { days: 6 },
                packageThumbnail: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800&h=600&fit=crop',
                shortDesc: "Combine pristine Pacific beaches with wildlife adventures and eco-lodge luxury",
                price: { amount: 1650000, currency: "NGN", priceType: "per person" },
                destination: "Guanacaste, Costa Rica",

                // Level 2
                highlights: ["Eco-Lodge Stay", "Wildlife Watching", "Volcano Views", "Beach Activities"],
                difficulty: "moderate",
                groupSize: { min: 4, max: 14 },
                startAndEndLocation: { startsAt: "Liberia, Costa Rica", endsAt: "Liberia, Costa Rica" },
                aboutPackage: "Experience the best of Costa Rica's Pacific coast with this perfect blend of adventure and relaxation. Stay in luxury eco-lodges, spot diverse wildlife including monkeys and exotic birds, explore volcanic landscapes, and enjoy pristine beaches. This sustainable tourism experience showcases Costa Rica's commitment to conservation while providing unforgettable memories in one of the world's most biodiverse countries.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Arrival & Eco-Lodge Check-in",
                        itineraryDetails: "Arrive at Liberia Airport and transfer through scenic countryside to your eco-lodge. Check-in and enjoy welcome drinks overlooking the Pacific Ocean. Evening nature walk with naturalist guide to spot wildlife and learn about local ecosystems."
                    },
                    {
                        itineraryTitle: "Day 2: Wildlife Sanctuary & Beach Time",
                        itineraryDetails: "Morning visit to a wildlife sanctuary to see rescued animals including sloths, monkeys, and colorful birds. Learn about conservation efforts and rehabilitation programs. Afternoon at Tamarindo Beach for swimming, surfing lessons, or simply relaxing on golden sand."
                    },
                    {
                        itineraryTitle: "Day 3: Volcano & Hot Springs Adventure",
                        itineraryDetails: "Full-day excursion to Rincon de la Vieja National Park. Hike through tropical forest to see volcanic activity, waterfalls, and diverse wildlife. Afternoon relaxation at natural hot springs with therapeutic volcanic mud treatments. Return to lodge for dinner."
                    },
                    {
                        itineraryTitle: "Day 4: Canopy Tour & Beach Activities",
                        itineraryDetails: "Morning zip-line canopy tour through the treetops for spectacular views and wildlife spotting. Afternoon at Conchal Beach, known for its unique shell sand. Options for snorkeling, kayaking, or horseback riding along the beach."
                    },
                    {
                        itineraryTitle: "Day 5: Mangrove Tour & Sunset Cruise",
                        itineraryDetails: "Morning boat tour through mangrove estuary to see crocodiles, birds, and marine life. Learn about the importance of mangrove ecosystems. Afternoon at leisure. Evening sunset cruise with dinner and live music while watching for dolphins."
                    },
                    {
                        itineraryTitle: "Day 6: Departure",
                        itineraryDetails: "Final breakfast with ocean views. Optional last-minute activities or souvenir shopping. Transfer to Liberia Airport for departure, taking with you memories of Costa Rica's natural beauty and commitment to conservation."
                    }
                ],
                inclusions: [
                    {
                        inclusionTitle: "Eco-Lodge Accommodation",
                        inclusionDetails: "6 nights in luxury eco-lodge with ocean views, sustainable practices, and integration with natural surroundings"
                    },
                    {
                        inclusionTitle: "All Meals & Fresh Beverages",
                        inclusionDetails: "Daily breakfast, lunch, and dinner featuring organic local ingredients, tropical fruits, and traditional Costa Rican cuisine"
                    },
                    {
                        inclusionTitle: "Airport Transfers & Transportation",
                        inclusionDetails: "Round-trip transfers from Liberia Airport plus comfortable transportation to all activities and attractions"
                    },
                    {
                        inclusionTitle: "Wildlife & Nature Tours",
                        inclusionDetails: "Guided tours to wildlife sanctuary, volcano national park, and mangrove estuary with experienced naturalist guides"
                    },
                    {
                        inclusionTitle: "Adventure Activities",
                        inclusionDetails: "Zip-line canopy tour, nature walks, hot springs access, and choice of beach activities including surfing lessons"
                    },
                    {
                        inclusionTitle: "Sunset Cruise & Park Fees",
                        inclusionDetails: "Romantic sunset cruise with dinner and dolphin watching, plus all national park entrance fees and conservation contributions"
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&h=600&fit=crop',
                        accomodationName: 'Eco-Lodge Ocean View Villa',
                        noOfNights: '6',
                        accomodationDesc: "Sustainable luxury villa with panoramic Pacific Ocean views, private terrace, and integration with tropical forest. Features solar power, rainwater collection, and locally-sourced materials."
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                ],
                addons: [
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                ],

                // Level 3
                totalPackages: {
                    remaining: 60,
                    totalCount: 70
                },

                tourGallery: [
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                ]
            },

            // Package 5 - Barbados
            {
                //Level 1
                id: "beach_005",
                name: "Barbados Cultural Beach: 5-Day Caribbean Heritage",
                duration: { days: 5 },
                packageThumbnail: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=800&h=600&fit=crop',
                shortDesc: "Experience Caribbean culture, rum heritage, and stunning beaches on this vibrant island",
                price: { amount: 1450000, currency: "NGN", priceType: "per person" },
                destination: "Barbados",

                // Level 2
                highlights: ["Rum Distillery", "Cultural Tours", "Caribbean Beaches", "Local Music"],
                difficulty: "easy",
                groupSize: { min: 2, max: 16 },
                startAndEndLocation: { startsAt: "Bridgetown, Barbados", endsAt: "Bridgetown, Barbados" },
                aboutPackage: "Immerse yourself in the rich culture and history of Barbados while enjoying some of the Caribbean's most beautiful beaches. From rum distillery tours to traditional fish markets, calypso music to colonial architecture, this experience showcases the authentic spirit of Barbados. Perfect for travelers seeking cultural enrichment alongside tropical relaxation.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Arrival & Bridgetown Heritage Tour",
                        itineraryDetails: "Arrive at Grantley Adams International Airport and transfer to your beachfront hotel. Afternoon walking tour of historic Bridgetown, a UNESCO World Heritage site. Visit the Parliament Buildings, National Heroes Square, and colorful local markets."
                    },
                    {
                        itineraryTitle: "Day 2: Rum Heritage & Harrison's Cave",
                        itineraryDetails: "Morning tour of Mount Gay Rum Distillery, the world's oldest rum producer, including tastings and history. Afternoon exploration of Harrison's Cave, traveling through underground limestone caverns with stunning formations."
                    },
                    {
                        itineraryTitle: "Day 3: Beach Day & Water Sports",
                        itineraryDetails: "Full day at Crane Beach, one of the world's most beautiful beaches with pink sand and dramatic cliffs. Options for swimming, snorkeling, boogie boarding, or simply relaxing. Beachfront lunch and sunset cocktails."
                    },
                    {
                        itineraryTitle: "Day 4: Cultural Immersion & Local Music",
                        itineraryDetails: "Morning visit to local fish market and pottery studio to see traditional crafts. Afternoon cooking class learning to prepare flying fish and other Bajan specialties. Evening dinner with live calypso and steel drum music."
                    },
                    {
                        itineraryTitle: "Day 5: Departure",
                        itineraryDetails: "Final breakfast with ocean views. Last-minute shopping at local craft markets for souvenirs and rum. Transfer to airport for departure, taking with you the warmth and culture of Barbados."
                    }
                ],
                inclusions: [
                    {
                        inclusionTitle: "Beachfront Hotel Stay",
                        inclusionDetails: "5 nights in luxury beachfront hotel with ocean views, private balcony, and direct beach access on the beautiful Caribbean coast"
                    },
                    {
                        inclusionTitle: "All Meals & Rum Tastings",
                        inclusionDetails: "Daily breakfast, lunch, and dinner featuring authentic Bajan cuisine, fresh seafood, and tropical fruits, plus rum tastings and cocktails"
                    },
                    {
                        inclusionTitle: "Cultural Tours & Activities",
                        inclusionDetails: "Guided tours of historic Bridgetown, rum distillery, Harrison's Cave, and local markets with knowledgeable cultural guides"
                    },
                    {
                        inclusionTitle: "Cooking Class & Music Experience",
                        inclusionDetails: "Traditional Bajan cooking class with local chef, plus evening entertainment with live calypso and steel drum performances"
                    },
                    {
                        inclusionTitle: "Beach Activities & Water Sports",
                        inclusionDetails: "Access to Crane Beach and other top beaches, with equipment for snorkeling, boogie boarding, and other water sports"
                    },
                    {
                        inclusionTitle: "Airport Transfers & Local Transport",
                        inclusionDetails: "Round-trip airport transfers and comfortable transportation to all activities and attractions throughout your stay"
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
                        accomodationName: 'Caribbean Beachfront Resort',
                        noOfNights: '5',
                        accomodationDesc: "Luxury beachfront resort with colonial Caribbean architecture, private beach access, infinity pool, and panoramic ocean views. Features traditional Bajan design with modern amenities."
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                ],
                addons: [
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                ],

                // Level 3
                totalPackages: {
                    remaining: 60,
                    totalCount: 70
                },

                tourGallery: [
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                ]
            }
        ]
    },

    {

        categoryName: "Cheap Vacation",
        description: "Big vibes. Small spend. With JAPA’s budget-friendly packages, you can flex on a budget, because soft life should be accessible.",
        categoryThumbnail: 'https://ggsc.s3.us-west-2.amazonaws.com/assets/images/how_to_avoid_the_post-vacation_stress_frenzy_-_abcdef_-_0a21b39134b316e51cdc0dd96c5e6bca3c0093e9_-_abcdef_-_c3aa4369bd53794b17dba2719890b56de8809755.webp',
        packages: [
            // Package 1 - Maldives
            {
                //Level 1
                id: "beach_001",
                name: "Maldives Paradise: 7-Day Overwater Villa Escape",
                duration: { days: 7 },
                packageThumbnail: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&h=600&fit=crop',
                shortDesc: "Experience ultimate luxury in overwater villas with crystal-clear lagoons and world-class diving",
                price: { amount: 2850000, currency: "NGN", priceType: "per person" },
                destination: "Maldives",

                // Level 2
                highlights: ["Overwater Villa", "Snorkeling & Diving", "Spa Treatments", "Sunset Cruises"],
                difficulty: "relaxed",
                groupSize: { min: 2, max: 8 },
                startAndEndLocation: { startsAt: "Malé, Maldives", endsAt: "Malé, Maldives" },
                aboutPackage: "Escape to paradise in the Maldives, where turquoise waters meet pristine white sand beaches. Stay in luxurious overwater villas, enjoy world-class diving and snorkeling, indulge in spa treatments, and witness breathtaking sunsets. This carefully curated experience offers the perfect blend of relaxation, adventure, and luxury for discerning travelers seeking an unforgettable tropical getaway.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Arrival & Overwater Villa Check-in",
                        itineraryDetails: "Arrive at Malé International Airport and take a scenic seaplane transfer to your resort. Check into your overwater villa with direct lagoon access. Enjoy a welcome cocktail and sunset dinner on your private deck overlooking the Indian Ocean."
                    },
                    {
                        itineraryTitle: "Day 2: Snorkeling Adventure & Spa Relaxation",
                        itineraryDetails: "Morning guided snorkeling tour to explore vibrant coral reefs and tropical fish. Return for lunch at the resort's beachfront restaurant. Afternoon at the overwater spa with signature Maldivian treatments and infinity pool relaxation."
                    },
                    {
                        itineraryTitle: "Day 3: Dolphin Watching & Sandbank Picnic",
                        itineraryDetails: "Early morning dolphin watching cruise in traditional dhoni boats. Visit a pristine sandbank for a private picnic lunch. Evening at leisure with optional water sports including kayaking and paddleboarding."
                    },
                    {
                        itineraryTitle: "Day 4: Deep Sea Fishing & Cultural Village Tour",
                        itineraryDetails: "Half-day deep sea fishing excursion with experienced local guides. Fresh catch prepared for lunch by resort chefs. Afternoon visit to a local island to experience Maldivian culture and traditions."
                    },
                    {
                        itineraryTitle: "Day 5: Scuba Diving & Sunset Cruise",
                        itineraryDetails: "Certified diving experience at renowned dive sites with manta rays and reef sharks. Lunch and relaxation time. Evening sunset cruise with champagne and canapés as you watch the sky transform into brilliant colors."
                    },
                    {
                        itineraryTitle: "Day 6: Private Beach Day & Farewell Dinner",
                        itineraryDetails: "Spend the day at your own pace - private beach access, villa amenities, or additional spa treatments. Farewell dinner at the resort's signature restaurant with fresh seafood and international cuisine."
                    },
                    {
                        itineraryTitle: "Day 7: Departure",
                        itineraryDetails: "Final breakfast in your villa. Seaplane transfer back to Malé International Airport for your departure flight. Take with you memories of paradise and the tranquil beauty of the Maldives."
                    }
                ],
                inclusions: [
                    {
                        inclusionTitle: "7 nights in Luxury Overwater villa",
                        inclusionDetails: "7 nights in luxury overwater villa with direct lagoon access, private deck, and glass floor panels for underwater viewing"
                    },
                    {
                        inclusionTitle: "All Meals & Premium Beverages",
                        inclusionDetails: "Daily breakfast, lunch, and dinner at resort restaurants, plus premium alcoholic and non-alcoholic beverages throughout your stay"
                    },
                    {
                        inclusionTitle: "Seaplane Transfers",
                        inclusionDetails: "Round-trip scenic seaplane transfers between Malé Airport and resort, offering stunning aerial views of the atolls"
                    },
                    {
                        inclusionTitle: "Water Sports Equipment",
                        inclusionDetails: "Complimentary use of snorkeling gear, kayaks, paddleboards, and windsurfing equipment for unlimited water adventures"
                    },
                    {
                        inclusionTitle: "Daily Excursions",
                        inclusionDetails: "Guided snorkeling tours, dolphin watching, sandbank visits, fishing trips, and cultural island tours with local guides"
                    },
                    {
                        inclusionTitle: "Spa Credit & Airport Assistance",
                        inclusionDetails: "$200 spa credit per person for treatments, plus VIP airport assistance and dedicated resort representative throughout stay"
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                ],
                addons: [
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                ],

                // Level 3
                totalPackages: {
                    remaining: 60,
                    totalCount: 70
                },

                tourGallery: [
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                ]
            },

            // Package 2 - Santorini
            {
                //Level 1
                id: "beach_002",
                name: "Santorini Sunset: 5-Day Greek Island Romance",
                duration: { days: 5 },
                packageThumbnail: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop',
                shortDesc: "Discover Santorini's dramatic cliffs, volcanic beaches, and world-famous sunsets",
                price: { amount: 1950000, currency: "NGN", priceType: "per person" },
                destination: "Santorini, Greece",

                // Level 2
                highlights: ["Clifftop Hotels", "Volcanic Beaches", "Wine Tasting", "Sunset Views"],
                difficulty: "moderate",
                groupSize: { min: 2, max: 10 },
                startAndEndLocation: { startsAt: "Santorini Airport", endsAt: "Santorini Airport" },
                aboutPackage: "Experience the magic of Santorini with its iconic blue-domed churches, dramatic cliff-top villages, and spectacular sunsets. This romantic getaway combines luxury accommodation with authentic Greek experiences, from wine tasting at local vineyards to exploring unique volcanic beaches. Perfect for couples and small groups seeking a blend of relaxation and cultural discovery.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Arrival & Oia Exploration",
                        itineraryDetails: "Arrive at Santorini Airport and transfer to your clifftop hotel in Oia. Check-in and enjoy welcome drinks overlooking the caldera. Evening stroll through Oia's charming streets, visiting local boutiques and art galleries before dinner at a traditional taverna."
                    },
                    {
                        itineraryTitle: "Day 2: Volcano Tour & Hot Springs",
                        itineraryDetails: "Morning boat excursion to the active volcano island of Nea Kameni. Hike to the crater and learn about the island's geological history. Afternoon relaxation at the natural hot springs of Palea Kameni. Return for sunset viewing from your hotel terrace."
                    },
                    {
                        itineraryTitle: "Day 3: Wine Tasting & Red Beach",
                        itineraryDetails: "Visit three traditional wineries across the island, tasting unique Assyrtiko wines and learning about volcanic soil viticulture. Lunch at a vineyard restaurant with caldera views. Afternoon at the famous Red Beach with its dramatic red volcanic cliffs."
                    },
                    {
                        itineraryTitle: "Day 4: Fira & Traditional Villages",
                        itineraryDetails: "Explore Fira, the island's capital, with its archaeological museum and traditional architecture. Visit the picturesque village of Pyrgos and its medieval castle. Afternoon cooking class learning to prepare traditional Greek dishes with local ingredients."
                    },
                    {
                        itineraryTitle: "Day 5: Departure",
                        itineraryDetails: "Final breakfast with caldera views. Last-minute shopping in Fira for local products and souvenirs. Private transfer to Santorini Airport for departure, taking with you memories of Greece's most romantic island."
                    }
                ],
                inclusions: [
                    {
                        inclusionTitle: "Clifftop Hotel with Caldera Views",
                        inclusionDetails: "5 nights in luxury clifftop accommodation with private balcony, infinity pool access, and breathtaking caldera views"
                    },
                    {
                        inclusionTitle: "Daily Breakfast & 2 Dinners",
                        inclusionDetails: "Daily Greek breakfast with local products, plus 2 traditional dinners at highly-rated tavernas featuring fresh seafood and regional specialties"
                    },
                    {
                        inclusionTitle: "Private Airport Transfers",
                        inclusionDetails: "Round-trip private transfers between Santorini Airport and hotel, with professional drivers and comfortable vehicles"
                    },
                    {
                        inclusionTitle: "Volcano & Hot Springs Tour",
                        inclusionDetails: "Full-day guided boat tour to active volcano, hot springs, and surrounding islands with professional guide and traditional Greek boat"
                    },
                    {
                        inclusionTitle: "Wine Tasting Experience",
                        inclusionDetails: "Visit to three premium wineries with tastings of 12+ local wines, including rare Assyrtiko varieties and traditional Vinsanto dessert wine"
                    },
                    {
                        inclusionTitle: "Cooking Class & Cultural Tours",
                        inclusionDetails: "Traditional Greek cooking class with local chef, plus guided tours of Fira, Pyrgos, and other charming villages with historical insights"
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&h=600&fit=crop',
                        accomodationName: 'Clifftop Suite with Infinity Pool',
                        noOfNights: '5',
                        accomodationDesc: "Luxury suite carved into the cliff face with traditional Cycladic architecture, private balcony, infinity pool access, and unobstructed views of the caldera and famous Santorini sunsets."
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                ],

                addons: [
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                ],

                // Level 3
                totalPackages: {
                    remaining: 60,
                    totalCount: 70
                },

                tourGallery: [
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                ]
            },

            // Package 3 - Seychelles
            {
                //Level 1
                id: "beach_003",
                name: "Seychelles Discovery: 8-Day Island Paradise",
                duration: { days: 8 },
                packageThumbnail: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
                shortDesc: "Explore pristine beaches, unique wildlife, and luxury resorts across multiple Seychelles islands",
                price: { amount: 3200000, currency: "NGN", priceType: "per person" },
                destination: "Seychelles",

                // Level 2
                highlights: ["Three Islands", "Giant Tortoises", "Pristine Beaches", "Snorkeling"],
                difficulty: "easy",
                groupSize: { min: 2, max: 12 },
                startAndEndLocation: { startsAt: "Mahé, Seychelles", endsAt: "Mahé, Seychelles" },
                aboutPackage: "Discover the untouched beauty of Seychelles across three stunning islands. From the granite boulders of La Digue to the pristine beaches of Praslin and the vibrant culture of Mahé, this island-hopping adventure offers encounters with giant tortoises, rare birds, and some of the world's most beautiful beaches. Perfect for nature lovers and beach enthusiasts seeking an authentic tropical experience.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Arrival in Mahé & Victoria Exploration",
                        itineraryDetails: "Arrive at Seychelles International Airport and transfer to your beachfront resort. Afternoon tour of Victoria, the world's smallest capital city, visiting the colorful market, clock tower, and botanical gardens. Welcome dinner featuring Creole cuisine."
                    },
                    {
                        itineraryTitle: "Day 2: Mahé Island Tour & Morne Seychellois",
                        itineraryDetails: "Full-day island tour including Morne Seychellois National Park, tea plantation visit, and craft village. Lunch at a local restaurant with ocean views. Afternoon at Beau Vallon Beach for swimming and water sports."
                    },
                    {
                        itineraryTitle: "Day 3: Ferry to Praslin & Vallée de Mai",
                        itineraryDetails: "Morning ferry to Praslin Island. Check into beachfront accommodation. Afternoon exploration of Vallée de Mai Nature Reserve, home to the famous Coco de Mer palm and rare black parrots. Evening at leisure on Côte d'Or Beach."
                    },
                    {
                        itineraryTitle: "Day 4: Anse Lazio & Praslin Exploration",
                        itineraryDetails: "Visit Anse Lazio, often rated among the world's best beaches, for swimming and snorkeling. Lunch at a beachfront restaurant. Afternoon island tour visiting local villages and learning about Seychellois culture and traditions."
                    },
                    {
                        itineraryTitle: "Day 5: La Digue Island & Giant Tortoises",
                        itineraryDetails: "Day trip to La Digue Island by ferry. Explore the island by bicycle, visiting L'Union Estate to see giant tortoises and traditional coconut processing. Afternoon at Anse Source d'Argent with its famous granite boulders."
                    },
                    {
                        itineraryTitle: "Day 6: Snorkeling & Marine Life",
                        itineraryDetails: "Half-day snorkeling excursion to Curieuse Island Marine Park. Encounter diverse marine life including tropical fish, rays, and possibly sea turtles. Beach barbecue lunch on a deserted beach. Return to Praslin for relaxation."
                    },
                    {
                        itineraryTitle: "Day 7: Return to Mahé & Sunset Cruise",
                        itineraryDetails: "Morning ferry back to Mahé. Check into resort and enjoy beach time. Afternoon at leisure for shopping or spa treatments. Evening sunset cruise with dinner and live music, celebrating your Seychelles adventure."
                    },
                    {
                        itineraryTitle: "Day 8: Departure",
                        itineraryDetails: "Final breakfast with ocean views. Last-minute souvenir shopping at local markets. Private transfer to Seychelles International Airport for departure, carrying memories of paradise islands."
                    }
                ],
                inclusions: [
                    {
                        inclusionTitle: "Multi-Island Accommodation",
                        inclusionDetails: "8 nights in luxury beachfront resorts across Mahé and Praslin islands, all with ocean views and private beach access"
                    },
                    {
                        inclusionTitle: "All Meals & Local Beverages",
                        inclusionDetails: "Daily breakfast, lunch, and dinner featuring fresh seafood and authentic Creole cuisine, plus local beverages and fresh fruit juices"
                    },
                    {
                        inclusionTitle: "Inter-Island Ferry Transfers",
                        inclusionDetails: "Round-trip ferry transfers between Mahé and Praslin, plus day trip to La Digue with comfortable seating and scenic views"
                    },
                    {
                        inclusionTitle: "National Park Entrance Fees",
                        inclusionDetails: "Entry to Vallée de Mai Nature Reserve, Morne Seychellois National Park, and Curieuse Marine Park with certified guides"
                    },
                    {
                        inclusionTitle: "Island Tours & Activities",
                        inclusionDetails: "Guided tours of all three islands, bicycle rental on La Digue, snorkeling equipment, and cultural village visits"
                    },
                    {
                        inclusionTitle: "Sunset Cruise & Airport Transfers",
                        inclusionDetails: "Romantic sunset cruise with dinner and entertainment, plus private airport transfers and 24/7 local support throughout your stay"
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&h=600&fit=crop',
                        accomodationName: 'Beachfront Villa - Mahé',
                        noOfNights: '4',
                        accomodationDesc: "Luxury beachfront villa with private terrace, direct beach access, and tropical garden views. Features modern amenities with traditional Seychellois design elements."
                    },
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
                        accomodationName: 'Ocean View Resort - Praslin',
                        noOfNights: '4',
                        accomodationDesc: "Elegant resort accommodation with panoramic ocean views, private balcony, and access to Côte d'Or Beach. Surrounded by lush tropical vegetation."
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                ],
                addons: [
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                ],

                // Level 3
                totalPackages: {
                    remaining: 60,
                    totalCount: 70
                },

                tourGallery: [
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                ]
            },

            // Package 4 - Costa Rica
            {
                //Level 1
                id: "beach_004",
                name: "Costa Rica Beach & Adventure: 6-Day Eco Paradise",
                duration: { days: 6 },
                packageThumbnail: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800&h=600&fit=crop',
                shortDesc: "Combine pristine Pacific beaches with wildlife adventures and eco-lodge luxury",
                price: { amount: 1650000, currency: "NGN", priceType: "per person" },
                destination: "Guanacaste, Costa Rica",

                // Level 2
                highlights: ["Eco-Lodge Stay", "Wildlife Watching", "Volcano Views", "Beach Activities"],
                difficulty: "moderate",
                groupSize: { min: 4, max: 14 },
                startAndEndLocation: { startsAt: "Liberia, Costa Rica", endsAt: "Liberia, Costa Rica" },
                aboutPackage: "Experience the best of Costa Rica's Pacific coast with this perfect blend of adventure and relaxation. Stay in luxury eco-lodges, spot diverse wildlife including monkeys and exotic birds, explore volcanic landscapes, and enjoy pristine beaches. This sustainable tourism experience showcases Costa Rica's commitment to conservation while providing unforgettable memories in one of the world's most biodiverse countries.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Arrival & Eco-Lodge Check-in",
                        itineraryDetails: "Arrive at Liberia Airport and transfer through scenic countryside to your eco-lodge. Check-in and enjoy welcome drinks overlooking the Pacific Ocean. Evening nature walk with naturalist guide to spot wildlife and learn about local ecosystems."
                    },
                    {
                        itineraryTitle: "Day 2: Wildlife Sanctuary & Beach Time",
                        itineraryDetails: "Morning visit to a wildlife sanctuary to see rescued animals including sloths, monkeys, and colorful birds. Learn about conservation efforts and rehabilitation programs. Afternoon at Tamarindo Beach for swimming, surfing lessons, or simply relaxing on golden sand."
                    },
                    {
                        itineraryTitle: "Day 3: Volcano & Hot Springs Adventure",
                        itineraryDetails: "Full-day excursion to Rincon de la Vieja National Park. Hike through tropical forest to see volcanic activity, waterfalls, and diverse wildlife. Afternoon relaxation at natural hot springs with therapeutic volcanic mud treatments. Return to lodge for dinner."
                    },
                    {
                        itineraryTitle: "Day 4: Canopy Tour & Beach Activities",
                        itineraryDetails: "Morning zip-line canopy tour through the treetops for spectacular views and wildlife spotting. Afternoon at Conchal Beach, known for its unique shell sand. Options for snorkeling, kayaking, or horseback riding along the beach."
                    },
                    {
                        itineraryTitle: "Day 5: Mangrove Tour & Sunset Cruise",
                        itineraryDetails: "Morning boat tour through mangrove estuary to see crocodiles, birds, and marine life. Learn about the importance of mangrove ecosystems. Afternoon at leisure. Evening sunset cruise with dinner and live music while watching for dolphins."
                    },
                    {
                        itineraryTitle: "Day 6: Departure",
                        itineraryDetails: "Final breakfast with ocean views. Optional last-minute activities or souvenir shopping. Transfer to Liberia Airport for departure, taking with you memories of Costa Rica's natural beauty and commitment to conservation."
                    }
                ],
                inclusions: [
                    {
                        inclusionTitle: "Eco-Lodge Accommodation",
                        inclusionDetails: "6 nights in luxury eco-lodge with ocean views, sustainable practices, and integration with natural surroundings"
                    },
                    {
                        inclusionTitle: "All Meals & Fresh Beverages",
                        inclusionDetails: "Daily breakfast, lunch, and dinner featuring organic local ingredients, tropical fruits, and traditional Costa Rican cuisine"
                    },
                    {
                        inclusionTitle: "Airport Transfers & Transportation",
                        inclusionDetails: "Round-trip transfers from Liberia Airport plus comfortable transportation to all activities and attractions"
                    },
                    {
                        inclusionTitle: "Wildlife & Nature Tours",
                        inclusionDetails: "Guided tours to wildlife sanctuary, volcano national park, and mangrove estuary with experienced naturalist guides"
                    },
                    {
                        inclusionTitle: "Adventure Activities",
                        inclusionDetails: "Zip-line canopy tour, nature walks, hot springs access, and choice of beach activities including surfing lessons"
                    },
                    {
                        inclusionTitle: "Sunset Cruise & Park Fees",
                        inclusionDetails: "Romantic sunset cruise with dinner and dolphin watching, plus all national park entrance fees and conservation contributions"
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&h=600&fit=crop',
                        accomodationName: 'Eco-Lodge Ocean View Villa',
                        noOfNights: '6',
                        accomodationDesc: "Sustainable luxury villa with panoramic Pacific Ocean views, private terrace, and integration with tropical forest. Features solar power, rainwater collection, and locally-sourced materials."
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                ],
                addons: [
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                ],

                // Level 3
                totalPackages: {
                    remaining: 60,
                    totalCount: 70
                },

                tourGallery: [
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                ]
            },

            // Package 5 - Barbados
            {
                //Level 1
                id: "beach_005",
                name: "Barbados Cultural Beach: 5-Day Caribbean Heritage",
                duration: { days: 5 },
                packageThumbnail: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=800&h=600&fit=crop',
                shortDesc: "Experience Caribbean culture, rum heritage, and stunning beaches on this vibrant island",
                price: { amount: 1450000, currency: "NGN", priceType: "per person" },
                destination: "Barbados",

                // Level 2
                highlights: ["Rum Distillery", "Cultural Tours", "Caribbean Beaches", "Local Music"],
                difficulty: "easy",
                groupSize: { min: 2, max: 16 },
                startAndEndLocation: { startsAt: "Bridgetown, Barbados", endsAt: "Bridgetown, Barbados" },
                aboutPackage: "Immerse yourself in the rich culture and history of Barbados while enjoying some of the Caribbean's most beautiful beaches. From rum distillery tours to traditional fish markets, calypso music to colonial architecture, this experience showcases the authentic spirit of Barbados. Perfect for travelers seeking cultural enrichment alongside tropical relaxation.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Arrival & Bridgetown Heritage Tour",
                        itineraryDetails: "Arrive at Grantley Adams International Airport and transfer to your beachfront hotel. Afternoon walking tour of historic Bridgetown, a UNESCO World Heritage site. Visit the Parliament Buildings, National Heroes Square, and colorful local markets."
                    },
                    {
                        itineraryTitle: "Day 2: Rum Heritage & Harrison's Cave",
                        itineraryDetails: "Morning tour of Mount Gay Rum Distillery, the world's oldest rum producer, including tastings and history. Afternoon exploration of Harrison's Cave, traveling through underground limestone caverns with stunning formations."
                    },
                    {
                        itineraryTitle: "Day 3: Beach Day & Water Sports",
                        itineraryDetails: "Full day at Crane Beach, one of the world's most beautiful beaches with pink sand and dramatic cliffs. Options for swimming, snorkeling, boogie boarding, or simply relaxing. Beachfront lunch and sunset cocktails."
                    },
                    {
                        itineraryTitle: "Day 4: Cultural Immersion & Local Music",
                        itineraryDetails: "Morning visit to local fish market and pottery studio to see traditional crafts. Afternoon cooking class learning to prepare flying fish and other Bajan specialties. Evening dinner with live calypso and steel drum music."
                    },
                    {
                        itineraryTitle: "Day 5: Departure",
                        itineraryDetails: "Final breakfast with ocean views. Last-minute shopping at local craft markets for souvenirs and rum. Transfer to airport for departure, taking with you the warmth and culture of Barbados."
                    }
                ],
                inclusions: [
                    {
                        inclusionTitle: "Beachfront Hotel Stay",
                        inclusionDetails: "5 nights in luxury beachfront hotel with ocean views, private balcony, and direct beach access on the beautiful Caribbean coast"
                    },
                    {
                        inclusionTitle: "All Meals & Rum Tastings",
                        inclusionDetails: "Daily breakfast, lunch, and dinner featuring authentic Bajan cuisine, fresh seafood, and tropical fruits, plus rum tastings and cocktails"
                    },
                    {
                        inclusionTitle: "Cultural Tours & Activities",
                        inclusionDetails: "Guided tours of historic Bridgetown, rum distillery, Harrison's Cave, and local markets with knowledgeable cultural guides"
                    },
                    {
                        inclusionTitle: "Cooking Class & Music Experience",
                        inclusionDetails: "Traditional Bajan cooking class with local chef, plus evening entertainment with live calypso and steel drum performances"
                    },
                    {
                        inclusionTitle: "Beach Activities & Water Sports",
                        inclusionDetails: "Access to Crane Beach and other top beaches, with equipment for snorkeling, boogie boarding, and other water sports"
                    },
                    {
                        inclusionTitle: "Airport Transfers & Local Transport",
                        inclusionDetails: "Round-trip airport transfers and comfortable transportation to all activities and attractions throughout your stay"
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
                        accomodationName: 'Caribbean Beachfront Resort',
                        noOfNights: '5',
                        accomodationDesc: "Luxury beachfront resort with colonial Caribbean architecture, private beach access, infinity pool, and panoramic ocean views. Features traditional Bajan design with modern amenities."
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
                        accomodationName: 'Overwater Villa with Lagoon Access',
                        noOfNights: '7',
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views."
                    },
                ],
                addons: [
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                    { addonName: "Mount Batur Sunrise Hike", addonPrice: 70000, },
                ],

                // Level 3
                totalPackages: {
                    remaining: 60,
                    totalCount: 70
                },

                tourGallery: [
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                    "https://imageio.forbes.com/specials-images/imageserve/674ee265e29dc090e63a1ce3/British--tour-guide-expounding-on-the-history-of-London/0x0.jpg?format=jpg&width=960",
                ]
            }
        ]
    },

    {
        categoryName: "Luxury Escapes",
        description: "Premium travel experiences featuring world-class accommodations and unforgettable adventures.",
        categoryThumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        packages: [
            // Package 1 - Bali
            {
                //Level 1
                id: "luxury_001",
                name: "Bali Luxury Retreat: 8-Day Villa Experience",
                duration: { days: 8 },
                packageThumbnail: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=600&fit=crop',
                shortDesc: "Immerse yourself in Balinese culture with private villa stays, temple visits, and spa treatments",
                price: { amount: 2250000, currency: "NGN", priceType: "per person" },
                destination: "Ubud, Bali",

                // Level 2
                highlights: ["Private Villa", "Temple Tours", "Spa & Wellness", "Rice Terrace Views"],
                difficulty: "relaxed",
                groupSize: { min: 2, max: 6 },
                startAndEndLocation: { startsAt: "Ngurah Rai Airport, Bali", endsAt: "Ngurah Rai Airport, Bali" },
                aboutPackage: "Discover the spiritual heart of Bali with this luxury retreat focusing on wellness, culture, and natural beauty. Stay in an exclusive private villa surrounded by lush rice terraces, experience traditional Balinese healing treatments, visit ancient temples, and enjoy farm-to-table dining. This carefully curated journey offers the perfect balance of relaxation and cultural immersion.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Arrival & Villa Welcome",
                        itineraryDetails: "Arrive at Ngurah Rai Airport and transfer to your private villa in Ubud. Check-in and enjoy a traditional Balinese welcome ceremony with flower petals and refreshing drinks. Evening orientation and dinner featuring organic local ingredients."
                    },
                    {
                        itineraryTitle: "Day 2: Temple Discovery & Cultural Immersion",
                        itineraryDetails: "Morning visit to Tirta Empul Temple for a traditional purification ritual. Explore the sacred Monkey Forest Sanctuary. Afternoon silver-making workshop in Celuk village. Evening traditional Kecak fire dance performance."
                    },
                    {
                        itineraryTitle: "Day 3: Rice Terrace Trek & Cooking Class",
                        itineraryDetails: "Sunrise trek through the famous Jatiluwih Rice Terraces. Learn about traditional Balinese agriculture and irrigation systems. Afternoon cooking class using herbs from the villa garden. Prepare and enjoy authentic Balinese dishes."
                    },
                    {
                        itineraryTitle: "Day 4: Wellness & Spa Day",
                        itineraryDetails: "Full day wellness experience with traditional Balinese spa treatments. Morning yoga session overlooking rice fields. Afternoon traditional massage and flower bath. Evening meditation session and healthy organic dinner."
                    },
                    {
                        itineraryTitle: "Day 5: Art Villages & Craft Workshops",
                        itineraryDetails: "Visit the artistic villages of Mas and Batuan. Try your hand at traditional wood carving and painting. Lunch at a local warung. Afternoon visit to Tegallalang Rice Terraces for photography and swing experience."
                    },
                    {
                        itineraryTitle: "Day 6: Volcano Adventure & Hot Springs",
                        itineraryDetails: "Early morning climb of Mount Batur to witness the sunrise over the volcanic landscape. Breakfast with spectacular views. Afternoon relaxation at natural hot springs. Return to villa for dinner and rest."
                    },
                    {
                        itineraryTitle: "Day 7: Market Tour & Farewell Dinner",
                        itineraryDetails: "Morning visit to colorful Ubud Market for spices, textiles, and local crafts. Free time for personal shopping or additional spa treatments. Farewell dinner with live gamelan music and traditional dance."
                    },
                    {
                        itineraryTitle: "Day 8: Departure",
                        itineraryDetails: "Final breakfast with villa views. Last-minute souvenir shopping or relaxation time. Private transfer to Ngurah Rai Airport for departure, carrying memories of Bali's spiritual beauty and warm hospitality."
                    }
                ],
                inclusions: [
                    {
                        inclusionTitle: "8 nights in Private Luxury Villa",
                        inclusionDetails: "8 nights in exclusive private villa with infinity pool, traditional Balinese architecture, and panoramic rice terrace views"
                    },
                    {
                        inclusionTitle: "All Meals & Organic Cuisine",
                        inclusionDetails: "Daily breakfast, lunch, and dinner featuring organic ingredients, traditional Balinese dishes, and international cuisine prepared by private chef"
                    },
                    {
                        inclusionTitle: "Private Airport Transfers",
                        inclusionDetails: "Round-trip private transfers between Ngurah Rai Airport and villa in comfortable air-conditioned vehicles with English-speaking drivers"
                    },
                    {
                        inclusionTitle: "Cultural Activities & Workshops",
                        inclusionDetails: "Temple visits, traditional ceremonies, cooking classes, craft workshops, and cultural performances with experienced local guides"
                    },
                    {
                        inclusionTitle: "Wellness & Spa Treatments",
                        inclusionDetails: "Daily yoga sessions, traditional Balinese massage, flower baths, meditation sessions, and access to villa wellness facilities"
                    },
                    {
                        inclusionTitle: "Adventure Tours & Transportation",
                        inclusionDetails: "Mount Batur sunrise trek, rice terrace tours, art village visits, and all local transportation for scheduled activities"
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
                        accomodationName: 'Traditional Balinese Luxury Villa',
                        noOfNights: '8',
                        accomodationDesc: "Authentic Balinese architecture with modern luxury amenities, private infinity pool, tropical garden, and stunning rice terrace views."
                    },
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
                        accomodationName: 'Jungle View Pavilion',
                        noOfNights: '8',
                        accomodationDesc: "Open-air pavilion with panoramic jungle views, traditional thatched roof, and seamless indoor-outdoor living experience."
                    },
                ],
                addons: [
                    { addonName: "Private Photography Session", addonPrice: 150000, },
                    { addonName: "Traditional Balinese Blessing Ceremony", addonPrice: 95000, },
                    { addonName: "Helicopter Tour of Bali", addonPrice: 450000, },
                ],

                // Level 3
                totalPackages: {
                    remaining: 45,
                    totalCount: 70
                },

                tourGallery: [
                    "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
                ]
            },

            // Package 2 - Swiss Alps
            {
                //Level 1
                id: "luxury_002",
                name: "Swiss Alps Luxury: 6-Day Mountain Retreat",
                duration: { days: 6 },
                packageThumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
                shortDesc: "Experience alpine luxury with mountain lodges, scenic railways, and world-class skiing",
                price: { amount: 3150000, currency: "NGN", priceType: "per person" },
                destination: "Zermatt, Switzerland",

                // Level 2
                highlights: ["Mountain Lodge", "Scenic Railways", "Alpine Skiing", "Matterhorn Views"],
                difficulty: "moderate",
                groupSize: { min: 2, max: 8 },
                startAndEndLocation: { startsAt: "Zurich Airport", endsAt: "Zurich Airport" },
                aboutPackage: "Embrace the majesty of the Swiss Alps with this exclusive mountain retreat. Stay in a luxury alpine lodge with breathtaking Matterhorn views, travel on scenic railways, experience world-class skiing, and indulge in Swiss hospitality. This premium experience combines outdoor adventure with Alpine luxury in one of the world's most spectacular mountain destinations.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Arrival & Mountain Lodge Check-in",
                        itineraryDetails: "Arrive at Zurich Airport and take the scenic train journey to Zermatt. Check into your luxury mountain lodge with panoramic Matterhorn views. Welcome dinner featuring Swiss Alpine cuisine and local wines."
                    },
                    {
                        itineraryTitle: "Day 2: Gornergrat Railway & Mountain Exploration",
                        itineraryDetails: "Morning ride on the famous Gornergrat Railway to 3,089 meters above sea level. Spectacular views of the Matterhorn and surrounding peaks. Afternoon hiking or cable car exploration. Evening at the lodge spa."
                    },
                    {
                        itineraryTitle: "Day 3: Skiing & Winter Sports",
                        itineraryDetails: "Full day of skiing on Zermatt's world-renowned slopes. Professional ski instruction available for all levels. Lunch at a mountain restaurant. Afternoon optional activities include snowshoeing or ice skating."
                    },
                    {
                        itineraryTitle: "Day 4: Glacier Paradise & Alpine Museum",
                        itineraryDetails: "Cable car journey to Matterhorn Glacier Paradise, Europe's highest cable car station. Explore the glacier palace and enjoy 360-degree mountain views. Afternoon visit to the Alpine Museum to learn about mountaineering history."
                    },
                    {
                        itineraryTitle: "Day 5: Village Exploration & Farewell Dinner",
                        itineraryDetails: "Morning stroll through car-free Zermatt village, visiting local shops and cafes. Afternoon at leisure for additional activities or relaxation. Farewell dinner with traditional Swiss entertainment and mountain views."
                    },
                    {
                        itineraryTitle: "Day 6: Departure",
                        itineraryDetails: "Final breakfast with mountain views. Scenic train journey back to Zurich Airport. Last-minute shopping for Swiss chocolates and watches. Departure with memories of Alpine grandeur."
                    }
                ],
                inclusions: [
                    {
                        inclusionTitle: "Luxury Mountain Lodge",
                        inclusionDetails: "6 nights in premium alpine lodge with Matterhorn views, spa facilities, and traditional Swiss hospitality"
                    },
                    {
                        inclusionTitle: "All Meals & Swiss Specialties",
                        inclusionDetails: "Daily breakfast, lunch, and dinner featuring Swiss Alpine cuisine, local cheeses, and fine wines from Swiss vineyards"
                    },
                    {
                        inclusionTitle: "Scenic Train Transfers",
                        inclusionDetails: "Round-trip first-class train transfers between Zurich Airport and Zermatt, including the scenic Gornergrat Railway experience"
                    },
                    {
                        inclusionTitle: "Ski Equipment & Instruction",
                        inclusionDetails: "Full ski equipment rental, lift passes, and professional ski instruction for beginners and intermediate skiers"
                    },
                    {
                        inclusionTitle: "Cable Car & Mountain Access",
                        inclusionDetails: "Access to Matterhorn Glacier Paradise, various cable cars, and mountain railways for spectacular alpine views"
                    },
                    {
                        inclusionTitle: "Spa Access & Local Tours",
                        inclusionDetails: "Daily access to lodge spa facilities, guided village tours, and visits to Alpine Museum with expert local guides"
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop',
                        accomodationName: 'Alpine Luxury Lodge',
                        noOfNights: '6',
                        accomodationDesc: "Traditional Swiss chalet-style lodge with modern luxury amenities, panoramic mountain views, and direct access to ski slopes."
                    },
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
                        accomodationName: 'Matterhorn View Suite',
                        noOfNights: '6',
                        accomodationDesc: "Elegantly appointed suite with floor-to-ceiling windows showcasing the iconic Matterhorn, private balcony, and Alpine decor."
                    },
                ],
                addons: [
                    { addonName: "Private Ski Instructor", addonPrice: 280000, },
                    { addonName: "Helicopter Mountain Tour", addonPrice: 520000, },
                    { addonName: "Swiss Watch Workshop", addonPrice: 185000, },
                ],

                // Level 3
                totalPackages: {
                    remaining: 35,
                    totalCount: 70
                },

                tourGallery: [
                    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=600&fit=crop",
                ]
            },

            // Package 3 - Tokyo
            {
                //Level 1
                id: "luxury_003",
                name: "Tokyo Luxury Discovery: 7-Day Cultural Journey",
                duration: { days: 7 },
                packageThumbnail: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop',
                shortDesc: "Explore Tokyo's blend of tradition and modernity with luxury hotels and exclusive experiences",
                price: { amount: 2850000, currency: "NGN", priceType: "per person" },
                destination: "Tokyo, Japan",

                // Level 2
                highlights: ["Luxury Hotels", "Temple Visits", "Michelin Dining", "Modern Culture"],
                difficulty: "easy",
                groupSize: { min: 2, max: 10 },
                startAndEndLocation: { startsAt: "Haneda Airport, Tokyo", endsAt: "Haneda Airport, Tokyo" },
                aboutPackage: "Experience the fascinating contrasts of Tokyo through this luxury cultural journey. Stay in world-class hotels, visit ancient temples, dine at Michelin-starred restaurants, and explore both traditional and ultra-modern districts. This premium experience offers insider access to Tokyo's hidden gems while ensuring comfort and luxury throughout your stay.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Arrival & Ginza Welcome",
                        itineraryDetails: "Arrive at Haneda Airport and transfer to your luxury hotel in Ginza. Check-in and enjoy welcome tea ceremony. Evening stroll through Ginza's upscale shopping district and dinner at a traditional kaiseki restaurant."
                    },
                    {
                        itineraryTitle: "Day 2: Traditional Tokyo & Temple Tours",
                        itineraryDetails: "Morning visit to Senso-ji Temple in Asakusa, Tokyo's oldest temple. Explore traditional Nakamise shopping street. Afternoon at Meiji Shrine and stroll through Harajuku. Evening sumo wrestling demonstration and dinner."
                    },
                    {
                        itineraryTitle: "Day 3: Tsukiji Market & Culinary Experience",
                        itineraryDetails: "Early morning visit to Tsukiji Outer Market for fresh sushi breakfast. Cooking class learning to prepare traditional Japanese dishes. Afternoon tea ceremony experience. Evening at a Michelin-starred restaurant."
                    },
                    {
                        itineraryTitle: "Day 4: Modern Tokyo & Technology",
                        itineraryDetails: "Explore futuristic Shibuya and iconic crossing. Visit teamLab Borderless digital art museum. Afternoon in Akihabara electronics district. Evening views from Tokyo Skytree and dinner in Roppongi."
                    },
                    {
                        itineraryTitle: "Day 5: Day Trip to Nikko UNESCO Sites",
                        itineraryDetails: "Day trip to Nikko to visit UNESCO World Heritage temples including Toshogu Shrine. Explore beautiful Lake Chuzenji and Kegon Falls. Return to Tokyo for evening at leisure."
                    },
                    {
                        itineraryTitle: "Day 6: Art & Gardens",
                        itineraryDetails: "Morning at the National Museum and traditional East Gardens. Afternoon visit to contemporary art museums in Roppongi. Evening entertainment district tour with private guide."
                    },
                    {
                        itineraryTitle: "Day 7: Departure",
                        itineraryDetails: "Final breakfast with city views. Last-minute shopping in Shibuya or Shinjuku. Transfer to Haneda Airport for departure, carrying memories of Tokyo's incredible cultural diversity."
                    }
                ],
                inclusions: [
                    {
                        inclusionTitle: "Luxury Hotel Accommodation",
                        inclusionDetails: "7 nights in 5-star hotel in central Tokyo with city views, premium amenities, and concierge services"
                    },
                    {
                        inclusionTitle: "Michelin Dining & Culinary Experiences",
                        inclusionDetails: "Daily breakfast plus 4 dinners at Michelin-starred restaurants, cooking classes, and traditional tea ceremonies"
                    },
                    {
                        inclusionTitle: "Private Transportation",
                        inclusionDetails: "Round-trip airport transfers, private vehicle for city tours, and day trip to Nikko with English-speaking driver"
                    },
                    {
                        inclusionTitle: "Cultural Activities & Entertainment",
                        inclusionDetails: "Temple visits, tea ceremonies, sumo demonstration, traditional performances, and museum entrance fees"
                    },
                    {
                        inclusionTitle: "Expert Local Guides",
                        inclusionDetails: "Professional English-speaking guides for all tours, cultural explanations, and insider access to exclusive experiences"
                    },
                    {
                        inclusionTitle: "Technology & Modern Experiences",
                        inclusionDetails: "TeamLab digital art museum, Tokyo Skytree access, and modern district explorations with cultural context"
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
                        accomodationName: 'Ginza Luxury Hotel',
                        noOfNights: '7',
                        accomodationDesc: "Ultra-modern luxury hotel in prestigious Ginza district with panoramic city views, world-class spa, and Michelin-starred dining."
                    },
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
                        accomodationName: 'Executive City Suite',
                        noOfNights: '7',
                        accomodationDesc: "Spacious suite with floor-to-ceiling windows, traditional Japanese design elements, and premium city views."
                    },
                ],
                addons: [
                    { addonName: "Private Sushi Chef Experience", addonPrice: 380000, },
                    { addonName: "Traditional Kimono Rental & Photoshoot", addonPrice: 120000, },
                    { addonName: "Mount Fuji Helicopter Tour", addonPrice: 650000, },
                ],

                // Level 3
                totalPackages: {
                    remaining: 28,
                    totalCount: 70
                },

                tourGallery: [
                    "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=600&fit=crop",
                ]
            },

            // Package 4 - Morocco
            {
                //Level 1
                id: "luxury_004",
                name: "Morocco Imperial Cities: 9-Day Cultural Adventure",
                duration: { days: 9 },
                packageThumbnail: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73aef?w=800&h=600&fit=crop',
                shortDesc: "Journey through Morocco's imperial cities with luxury riads, desert experiences, and cultural immersion",
                price: { amount: 2450000, currency: "NGN", priceType: "per person" },
                destination: "Marrakech, Morocco",

                // Level 2
                highlights: ["Traditional Riads", "Desert Safari", "Medina Tours", "Atlas Mountains"],
                difficulty: "moderate",
                groupSize: { min: 4, max: 12 },
                startAndEndLocation: { startsAt: "Marrakech Airport", endsAt: "Marrakech Airport" },
                aboutPackage: "Discover the magic of Morocco through this comprehensive journey across the imperial cities. Stay in authentic luxury riads, explore ancient medinas, experience desert camping under the stars, and visit the Atlas Mountains. This cultural adventure combines historical exploration with modern luxury in one of Africa's most enchanting destinations.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Arrival in Marrakech",
                        itineraryDetails: "Arrive at Marrakech Airport and transfer to your luxury riad in the medina. Check-in and enjoy traditional mint tea. Evening orientation walk through Jemaa el-Fnaa square with dinner at a rooftop restaurant."
                    },
                    {
                        itineraryTitle: "Day 2: Marrakech Medina & Palaces",
                        itineraryDetails: "Morning tour of Bahia Palace and Saadian Tombs. Explore the vibrant souks with local guide. Afternoon visit to Majorelle Garden and YSL Museum. Evening traditional Moroccan dinner with live music."
                    },
                    {
                        itineraryTitle: "Day 3: Atlas Mountains & Berber Villages",
                        itineraryDetails: "Day trip to Atlas Mountains visiting traditional Berber villages. Scenic drive through mountain passes and valleys. Lunch with local Berber family. Afternoon hiking and stunning mountain views."
                    },
                    {
                        itineraryTitle: "Day 4: Travel to Fes via Meknes",
                        itineraryDetails: "Morning departure to Fes with stop in Meknes, one of Morocco's imperial cities. Visit Bab Mansour gate and Royal Stables. Continue to Fes and check into luxury riad. Evening at leisure."
                    },
                    {
                        itineraryTitle: "Day 5: Fes Medina & Artisans",
                        itineraryDetails: "Full day exploring Fes medina, UNESCO World Heritage site. Visit traditional tanneries, madrasas, and artisan workshops. Learn about leather-making, pottery, and carpet weaving. Dinner at riad."
                    },
                    {
                        itineraryTitle: "Day 6: Desert Journey to Merzouga",
                        itineraryDetails: "Early departure through Middle Atlas Mountains to Sahara Desert. Stop at Ifrane and cedar forests. Afternoon arrival in Merzouga, camel trek into dunes. Overnight in luxury desert camp under stars."
                    },
                    {
                        itineraryTitle: "Day 7: Sunrise & Return to Marrakech",
                        itineraryDetails: "Sunrise over sand dunes and camel trek back. Long scenic drive back to Marrakech through dramatic landscapes. Evening arrival and check-in to riad. Dinner and rest."
                    },
                    {
                        itineraryTitle: "Day 8: Cooking Class & Spa Day",
                        itineraryDetails: "Morning cooking class learning traditional Moroccan cuisine. Prepare tagines, couscous, and pastries. Afternoon spa treatments with argan oil and traditional hammam experience. Farewell dinner."
                    },
                    {
                        itineraryTitle: "Day 9: Departure",
                        itineraryDetails: "Final breakfast at riad. Last-minute shopping in the souks for spices, textiles, and crafts. Transfer to Marrakech Airport for departure, carrying memories of Morocco's rich culture."
                    }
                ],
                inclusions: [
                    {
                        inclusionTitle: "Luxury Riad Accommodation",
                        inclusionDetails: "8 nights in authentic luxury riads with traditional architecture, courtyards, and modern amenities, plus 1 night desert camping"
                    },
                    {
                        inclusionTitle: "All Meals & Traditional Cuisine",
                        inclusionDetails: "Daily breakfast, lunch, and dinner featuring authentic Moroccan cuisine, tagines, couscous, and mint tea"
                    },
                    {
                        inclusionTitle: "Private Transportation",
                        inclusionDetails: "Comfortable air-conditioned vehicle for all transfers and tours with professional English-speaking driver"
                    },
                    {
                        inclusionTitle: "Cultural Tours & Experiences",
                        inclusionDetails: "Guided tours of imperial cities, medinas, palaces, and artisan workshops with expert local guides"
                    },
                    {
                        inclusionTitle: "Desert Safari & Camel Trekking",
                        inclusionDetails: "Camel trek into Sahara dunes, overnight luxury desert camp with traditional entertainment and stargazing"
                    },
                    {
                        inclusionTitle: "Cooking Class & Spa Treatments",
                        inclusionDetails: "Traditional Moroccan cooking class, hammam spa experience, and argan oil treatments at luxury riads"
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=800&h=600&fit=crop',
                        accomodationName: 'Marrakech Luxury Riad',
                        noOfNights: '6',
                        accomodationDesc: "Traditional Moroccan palace with intricate tilework, peaceful courtyard, rooftop terrace, and modern luxury amenities in the heart of the medina."
                    },
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
                        accomodationName: 'Fes Historical Riad',
                        noOfNights: '2',
                        accomodationDesc: "Restored 18th-century riad with authentic architecture, traditional furnishings, and panoramic views of the ancient medina."
                    },
                ],
                addons: [
                    { addonName: "Hot Air Balloon Over Marrakech", addonPrice: 185000, },
                    { addonName: "Private Atlas Mountains Trekking", addonPrice: 220000, },
                    { addonName: "Traditional Moroccan Spa Package", addonPrice: 95000, },
                ],

                // Level 3
                totalPackages: {
                    remaining: 42,
                    totalCount: 70
                },

                tourGallery: [
                    "https://images.unsplash.com/photo-1539650116574-75c0c6d73aef?w=800&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=800&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=600&fit=crop",
                ]
            },

            // Package 5 - New Zealand
            {
                //Level 1
                id: "luxury_005",
                name: "New Zealand Adventure: 10-Day South Island Explorer",
                duration: { days: 10 },
                packageThumbnail: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
                shortDesc: "Experience New Zealand's dramatic landscapes with luxury lodges, adventure activities, and stunning scenery",
                price: { amount: 4250000, currency: "NGN", priceType: "per person" },
                destination: "Queenstown, New Zealand",

                // Level 2
                highlights: ["Luxury Lodges", "Adventure Sports", "Fjord Cruises", "Alpine Scenery"],
                difficulty: "moderate",
                groupSize: { min: 2, max: 8 },
                startAndEndLocation: { startsAt: "Queenstown Airport", endsAt: "Christchurch Airport" },
                aboutPackage: "Discover the breathtaking beauty of New Zealand's South Island through this luxury adventure experience. Stay in world-class lodges with stunning mountain and lake views, participate in thrilling adventure activities, cruise through pristine fjords, and explore dramatic alpine landscapes. This premium journey combines adrenaline-pumping activities with luxury accommodations in one of the world's most spectacular destinations.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Arrival in Queenstown",
                        itineraryDetails: "Arrive at Queenstown Airport and transfer to luxury lakefront lodge. Check-in with panoramic Lake Wakatipu views. Evening welcome dinner featuring New Zealand cuisine and local Central Otago wines."
                    },
                    {
                        itineraryTitle: "Day 2: Queenstown Adventure Activities",
                        itineraryDetails: "Morning bungee jumping at Kawarau Gorge, birthplace of commercial bungee. Afternoon scenic helicopter flight over The Remarkables mountain range. Evening gondola ride and luge experience with dinner at Skyline Restaurant."
                    },
                    {
                        itineraryTitle: "Day 3: Milford Sound Day Trip",
                        itineraryDetails: "Early departure for Milford Sound through spectacular mountain scenery. Full day fjord cruise with waterfalls, seals, and dolphins. Lunch on board with stunning views. Return to Queenstown via scenic route."
                    },
                    {
                        itineraryTitle: "Day 4: Wine Country & Gibbston Valley",
                        itineraryDetails: "Morning wine tasting tour through Central Otago's premier vineyards. Visit Gibbston Valley Winery and underground wine cave. Afternoon AJ Hackett Ledge Swing experience. Evening at leisure."
                    },
                    {
                        itineraryTitle: "Day 5: Travel to Mount Cook",
                        itineraryDetails: "Scenic drive to Mount Cook National Park through Canterbury Plains and Southern Alps. Check into luxury alpine lodge. Afternoon helicopter flight to glacier landing. Evening stargazing session."
                    },
                    {
                        itineraryTitle: "Day 6: Mount Cook Exploration",
                        itineraryDetails: "Morning guided hike to Hooker Valley with views of Mount Cook. Afternoon boat cruise on Tasman Glacier Terminal Lake among icebergs. Evening at lodge with mountain views."
                    },
                    {
                        itineraryTitle: "Day 7: Lake Tekapo & Hot Springs",
                        itineraryDetails: "Morning visit to Lake Tekapo and Church of the Good Shepherd. Afternoon relaxation at Tekapo Springs hot pools with alpine views. Evening lupine flower viewing (seasonal) and dinner."
                    },
                    {
                        itineraryTitle: "Day 8: Arthur's Pass & TranzAlpine Railway",
                        itineraryDetails: "Morning departure on famous TranzAlpine railway through Arthur's Pass. Spectacular mountain and valley views. Afternoon arrival on West Coast, check into luxury eco-lodge. Evening nature walk."
                    },
                    {
                        itineraryTitle: "Day 9: Glaciers & Rainforest",
                        itineraryDetails: "Morning helicopter flight over Franz Josef or Fox Glacier with glacier landing. Afternoon exploring temperate rainforest and coastal areas. Evening farewell dinner with local entertainment."
                    },
                    {
                        itineraryTitle: "Day 10: Departure via Christchurch",
                        itineraryDetails: "Morning flight to Christchurch. City tour including Botanic Gardens and Canterbury Museum. Last-minute shopping for New Zealand souvenirs. Transfer to Christchurch Airport for departure."
                    }
                ],
                inclusions: [
                    {
                        inclusionTitle: "Luxury Lodge Accommodation",
                        inclusionDetails: "10 nights in premium lodges with mountain and lake views, luxury amenities, and world-class hospitality"
                    },
                    {
                        inclusionTitle: "All Meals & New Zealand Cuisine",
                        inclusionDetails: "Daily breakfast, lunch, and dinner featuring fresh New Zealand produce, local wines, and gourmet dining experiences"
                    },
                    {
                        inclusionTitle: "Adventure Activities & Experiences",
                        inclusionDetails: "Bungee jumping, helicopter flights, glacier landings, fjord cruises, and all adventure equipment with professional guides"
                    },
                    {
                        inclusionTitle: "Scenic Transportation",
                        inclusionDetails: "TranzAlpine railway journey, domestic flights, private transfers, and luxury coaches for all scheduled activities"
                    },
                    {
                        inclusionTitle: "Wine Tours & Tastings",
                        inclusionDetails: "Central Otago wine region tours, premium vineyard visits, wine cave experiences, and tastings with local vintners"
                    },
                    {
                        inclusionTitle: "Expert Local Guides",
                        inclusionDetails: "Professional guides for all activities, nature walks, cultural experiences, and adventure sports with safety equipment"
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
                        accomodationName: 'Queenstown Luxury Lodge',
                        noOfNights: '4',
                        accomodationDesc: "Lakefront luxury lodge with panoramic views of Lake Wakatipu and The Remarkables, featuring spa facilities and fine dining."
                    },
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
                        accomodationName: 'Mount Cook Alpine Lodge',
                        noOfNights: '3',
                        accomodationDesc: "Exclusive alpine lodge with Mount Cook views, featuring floor-to-ceiling windows, luxury amenities, and direct access to hiking trails."
                    },
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
                        accomodationName: 'West Coast Eco-Lodge',
                        noOfNights: '3',
                        accomodationDesc: "Sustainable luxury lodge nestled in temperate rainforest with glacier views, featuring eco-friendly design and nature integration."
                    },
                ],
                addons: [
                    { addonName: "Private Helicopter Tour", addonPrice: 750000, },
                    { addonName: "Skydiving Experience", addonPrice: 385000, },
                    { addonName: "Luxury Spa Package", addonPrice: 220000, },
                ],

                // Level 3
                totalPackages: {
                    remaining: 22,
                    totalCount: 70
                },

                tourGallery: [
                    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
                ]
            },

            // Package 6 - Santorini
            {
                //Level 1
                id: "luxury_006",
                name: "Santorini Luxury: 5-Day Greek Island Paradise",
                duration: { days: 5 },
                packageThumbnail: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop',
                shortDesc: "Experience the magic of Santorini with luxury villas, sunset views, and authentic Greek culture",
                price: { amount: 1850000, currency: "NGN", priceType: "per person" },
                destination: "Santorini, Greece",

                // Level 2
                highlights: ["Luxury Villas", "Sunset Views", "Wine Tasting", "Volcanic Tours"],
                difficulty: "easy",
                groupSize: { min: 2, max: 6 },
                startAndEndLocation: { startsAt: "Santorini Airport", endsAt: "Santorini Airport" },
                aboutPackage: "Immerse yourself in the enchanting beauty of Santorini through this luxury Greek island experience. Stay in exclusive cliffside villas with infinity pools, witness legendary sunsets from Oia, explore ancient volcanic sites, and savor world-class wines. This romantic getaway combines stunning natural beauty with Greek hospitality and luxury amenities.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Arrival & Oia Exploration",
                        itineraryDetails: "Arrive at Santorini Airport and transfer to luxury cliffside villa with caldera views. Check-in and welcome Greek coffee. Evening stroll through Oia village and dinner at sunset restaurant with panoramic views."
                    },
                    {
                        itineraryTitle: "Day 2: Volcanic Islands & Hot Springs",
                        itineraryDetails: "Morning boat tour to volcanic islands of Nea Kameni and Palea Kameni. Hike to volcanic crater and swim in natural hot springs. Afternoon at Thirassia island. Evening return and traditional Greek dinner."
                    },
                    {
                        itineraryTitle: "Day 3: Wine Country & Beach Day",
                        itineraryDetails: "Morning wine tasting tour at prestigious Santorini wineries including Santo Wines and Venetsanos. Learn about unique volcanic soil viticulture. Afternoon at Red Beach and Perissa Beach. Evening at villa pool."
                    },
                    {
                        itineraryTitle: "Day 4: Fira & Cultural Exploration",
                        itineraryDetails: "Morning cable car ride to Fira town and visit Archaeological Museum. Explore traditional villages of Pyrgos and Megalochori. Afternoon cooking class learning Greek specialties. Sunset dinner at cliffside restaurant."
                    },
                    {
                        itineraryTitle: "Day 5: Departure",
                        itineraryDetails: "Final breakfast overlooking the caldera. Last-minute shopping in Fira for local products and souvenirs. Transfer to Santorini Airport for departure, carrying memories of Greek island paradise."
                    }
                ],
                inclusions: [
                    {
                        inclusionTitle: "Luxury Cliffside Villa",
                        inclusionDetails: "5 nights in exclusive villa with infinity pool, caldera views, and traditional Cycladic architecture"
                    },
                    {
                        inclusionTitle: "All Meals & Greek Cuisine",
                        inclusionDetails: "Daily breakfast, lunch, and dinner featuring authentic Greek dishes, fresh seafood, and local specialties"
                    },
                    {
                        inclusionTitle: "Wine Tours & Tastings",
                        inclusionDetails: "Visits to premium wineries, volcanic soil wine education, and tastings of Assyrtiko and Vinsanto wines"
                    },
                    {
                        inclusionTitle: "Volcanic Island Tours",
                        inclusionDetails: "Boat tours to volcanic islands, crater hiking, hot springs swimming, and geological site exploration"
                    },
                    {
                        inclusionTitle: "Private Transportation",
                        inclusionDetails: "Round-trip airport transfers, private vehicle for tours, and boat transportation for island excursions"
                    },
                    {
                        inclusionTitle: "Cultural Experiences",
                        inclusionDetails: "Greek cooking classes, traditional village visits, archaeological sites, and local cultural activities"
                    }
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop',
                        accomodationName: 'Caldera Luxury Villa',
                        noOfNights: '5',
                        accomodationDesc: "Exclusive cliffside villa with infinity pool, outdoor jacuzzi, and uninterrupted views of the Aegean Sea and volcanic caldera."
                    },
                ],
                addons: [
                    { addonName: "Private Yacht Charter", addonPrice: 480000, },
                    { addonName: "Helicopter Tour of Cyclades", addonPrice: 320000, },
                    { addonName: "Couples Spa Package", addonPrice: 165000, },
                ],

                // Level 3
                totalPackages: {
                    remaining: 31,
                    totalCount: 70
                },

                tourGallery: [
                    "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
                ]
            }
        ]
    },
];


export default travelPackages;