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
                        inclusionTitle: "Overwater Villa Accommodation",
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
                        accomodationDesc: "Luxurious overwater villa featuring glass floor panels, private deck with direct lagoon access, outdoor bathroom, and stunning ocean views. Each villa includes modern amenities and traditional Maldivian design elements."
                    }
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
                ]
            }
        ]
    },

    {
        categoryName: "All-Inclusive Vacation",
        description: "Our all-inclusive getaways mean zero stress, full enjoyment. You just pack vibes, we’ll handle the rest.",
        categoryThumbnail: 'https://ggsc.s3.us-west-2.amazonaws.com/assets/images/how_to_avoid_the_post-vacation_stress_frenzy_-_abcdef_-_0a21b39134b316e51cdc0dd96c5e6bca3c0093e9_-_abcdef_-_c3aa4369bd53794b17dba2719890b56de8809755.webp',
        packages: [
            // Package here
            {
                //Level 1
                id: "adv_001",
                name: "Bali Bliss: 7-Day Tropical Escape",
                duration: { days: 14 },
                packageThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                shortDesc: "Discover the magic of Bali with scenic beaches, luxury spas, and temple tours",
                price: { amount: 1500000, currency: "NGN", priceType: "per person" },
                destination: "Bali, Indonesia",

                // Level 2
                highlights: ["Everest Base Camp", "Sherpa Villages", "Mountain Views"],
                difficulty: "challenging",
                groupSize: { min: 2, max: 12 },
                startAndEndLocation: { startsAt: "Bali, Indonesia", endsAt: "Bali, Indonesia" },
                aboutPackage: "Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler. Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                ],
                inclusions: [
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                ],

                //Add reviews and ratings here
            },
            // Package here
            {
                //Level 1
                id: "adv_001",
                name: "Bali Bliss: 7-Day Tropical Escape",
                duration: { days: 14 },
                packageThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                shortDesc: "Discover the magic of Bali with scenic beaches, luxury spas, and temple tours",
                price: { amount: 1500000, currency: "NGN", priceType: "per person" },
                destination: "Bali, Indonesia",

                // Level 2
                highlights: ["Everest Base Camp", "Sherpa Villages", "Mountain Views"],
                difficulty: "challenging",
                groupSize: { min: 2, max: 12 },
                startAndEndLocation: { startsAt: "Bali, Indonesia", endsAt: "Bali, Indonesia" },
                aboutPackage: "Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler. Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                ],
                inclusions: [
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                ],

                //Add reviews and ratings here
            },
            // Package here
            {
                //Level 1
                id: "adv_001",
                name: "Bali Bliss: 7-Day Tropical Escape",
                duration: { days: 14 },
                packageThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                shortDesc: "Discover the magic of Bali with scenic beaches, luxury spas, and temple tours",
                price: { amount: 1500000, currency: "NGN", priceType: "per person" },
                destination: "Bali, Indonesia",

                // Level 2
                highlights: ["Everest Base Camp", "Sherpa Villages", "Mountain Views"],
                difficulty: "challenging",
                groupSize: { min: 2, max: 12 },
                startAndEndLocation: { startsAt: "Bali, Indonesia", endsAt: "Bali, Indonesia" },
                aboutPackage: "Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler. Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                ],
                inclusions: [
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                ],

                //Add reviews and ratings here
            },
            // Package here
            {
                //Level 1
                id: "adv_001",
                name: "Bali Bliss: 7-Day Tropical Escape",
                duration: { days: 14 },
                packageThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                shortDesc: "Discover the magic of Bali with scenic beaches, luxury spas, and temple tours",
                price: { amount: 1500000, currency: "NGN", priceType: "per person" },
                destination: "Bali, Indonesia",

                // Level 2
                highlights: ["Everest Base Camp", "Sherpa Villages", "Mountain Views"],
                difficulty: "challenging",
                groupSize: { min: 2, max: 12 },
                startAndEndLocation: { startsAt: "Bali, Indonesia", endsAt: "Bali, Indonesia" },
                aboutPackage: "Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler. Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                ],
                inclusions: [
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                ],

                //Add reviews and ratings here
            },
            // Package here
            {
                //Level 1
                id: "adv_001",
                name: "Bali Bliss: 7-Day Tropical Escape",
                duration: { days: 14 },
                packageThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                shortDesc: "Discover the magic of Bali with scenic beaches, luxury spas, and temple tours",
                price: { amount: 1500000, currency: "NGN", priceType: "per person" },
                destination: "Bali, Indonesia",

                // Level 2
                highlights: ["Everest Base Camp", "Sherpa Villages", "Mountain Views"],
                difficulty: "challenging",
                groupSize: { min: 2, max: 12 },
                startAndEndLocation: { startsAt: "Bali, Indonesia", endsAt: "Bali, Indonesia" },
                aboutPackage: "Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler. Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                ],
                inclusions: [
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                ],

                //Add reviews and ratings here
            },
        ]
    },

    {
        categoryName: "Romantic Getwaways",
        description: "Plan baecations, honeymoons, or dreamy spa weekends. Wherever love is calling, JAPA gets you there in style.",
        categoryThumbnail: 'https://ggsc.s3.us-west-2.amazonaws.com/assets/images/how_to_avoid_the_post-vacation_stress_frenzy_-_abcdef_-_0a21b39134b316e51cdc0dd96c5e6bca3c0093e9_-_abcdef_-_c3aa4369bd53794b17dba2719890b56de8809755.webp',
        packages: [
            // Package here
            {
                //Level 1
                id: "adv_001",
                name: "Bali Bliss: 7-Day Tropical Escape",
                duration: { days: 14 },
                packageThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                shortDesc: "Discover the magic of Bali with scenic beaches, luxury spas, and temple tours",
                price: { amount: 1500000, currency: "NGN", priceType: "per person" },
                destination: "Bali, Indonesia",

                // Level 2
                highlights: ["Everest Base Camp", "Sherpa Villages", "Mountain Views"],
                difficulty: "challenging",
                groupSize: { min: 2, max: 12 },
                startAndEndLocation: { startsAt: "Bali, Indonesia", endsAt: "Bali, Indonesia" },
                aboutPackage: "Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler. Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                ],
                inclusions: [
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                ],

                //Add reviews and ratings here
            },
            // Package here
            {
                //Level 1
                id: "adv_001",
                name: "Bali Bliss: 7-Day Tropical Escape",
                duration: { days: 14 },
                packageThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                shortDesc: "Discover the magic of Bali with scenic beaches, luxury spas, and temple tours",
                price: { amount: 1500000, currency: "NGN", priceType: "per person" },
                destination: "Bali, Indonesia",

                // Level 2
                highlights: ["Everest Base Camp", "Sherpa Villages", "Mountain Views"],
                difficulty: "challenging",
                groupSize: { min: 2, max: 12 },
                startAndEndLocation: { startsAt: "Bali, Indonesia", endsAt: "Bali, Indonesia" },
                aboutPackage: "Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler. Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                ],
                inclusions: [
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                ],

                //Add reviews and ratings here
            },
            // Package here
            {
                //Level 1
                id: "adv_001",
                name: "Bali Bliss: 7-Day Tropical Escape",
                duration: { days: 14 },
                packageThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                shortDesc: "Discover the magic of Bali with scenic beaches, luxury spas, and temple tours",
                price: { amount: 1500000, currency: "NGN", priceType: "per person" },
                destination: "Bali, Indonesia",

                // Level 2
                highlights: ["Everest Base Camp", "Sherpa Villages", "Mountain Views"],
                difficulty: "challenging",
                groupSize: { min: 2, max: 12 },
                startAndEndLocation: { startsAt: "Bali, Indonesia", endsAt: "Bali, Indonesia" },
                aboutPackage: "Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler. Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                ],
                inclusions: [
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                ],

                //Add reviews and ratings here
            },
            // Package here
            {
                //Level 1
                id: "adv_001",
                name: "Bali Bliss: 7-Day Tropical Escape",
                duration: { days: 14 },
                packageThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                shortDesc: "Discover the magic of Bali with scenic beaches, luxury spas, and temple tours",
                price: { amount: 1500000, currency: "NGN", priceType: "per person" },
                destination: "Bali, Indonesia",

                // Level 2
                highlights: ["Everest Base Camp", "Sherpa Villages", "Mountain Views"],
                difficulty: "challenging",
                groupSize: { min: 2, max: 12 },
                startAndEndLocation: { startsAt: "Bali, Indonesia", endsAt: "Bali, Indonesia" },
                aboutPackage: "Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler. Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                ],
                inclusions: [
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                ],

                //Add reviews and ratings here
            },
            // Package here
            {
                //Level 1
                id: "adv_001",
                name: "Bali Bliss: 7-Day Tropical Escape",
                duration: { days: 14 },
                packageThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                shortDesc: "Discover the magic of Bali with scenic beaches, luxury spas, and temple tours",
                price: { amount: 1500000, currency: "NGN", priceType: "per person" },
                destination: "Bali, Indonesia",

                // Level 2
                highlights: ["Everest Base Camp", "Sherpa Villages", "Mountain Views"],
                difficulty: "challenging",
                groupSize: { min: 2, max: 12 },
                startAndEndLocation: { startsAt: "Bali, Indonesia", endsAt: "Bali, Indonesia" },
                aboutPackage: "Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler. Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                ],
                inclusions: [
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                ],

                //Add reviews and ratings here
            },
        ]
    },

    {
        categoryName: "Family Vacation",
        description: "For the whole crew. From cultural tours to kid-friendly resorts, JAPA makes family travel easy, fun, and unforgettable.",
        categoryThumbnail: 'https://ggsc.s3.us-west-2.amazonaws.com/assets/images/how_to_avoid_the_post-vacation_stress_frenzy_-_abcdef_-_0a21b39134b316e51cdc0dd96c5e6bca3c0093e9_-_abcdef_-_c3aa4369bd53794b17dba2719890b56de8809755.webp',
        packages: [
            // Package here
            {
                //Level 1
                id: "adv_001",
                name: "Bali Bliss: 7-Day Tropical Escape",
                duration: { days: 14 },
                packageThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                shortDesc: "Discover the magic of Bali with scenic beaches, luxury spas, and temple tours",
                price: { amount: 1500000, currency: "NGN", priceType: "per person" },
                destination: "Bali, Indonesia",

                // Level 2
                highlights: ["Everest Base Camp", "Sherpa Villages", "Mountain Views"],
                difficulty: "challenging",
                groupSize: { min: 2, max: 12 },
                startAndEndLocation: { startsAt: "Bali, Indonesia", endsAt: "Bali, Indonesia" },
                aboutPackage: "Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler. Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                ],
                inclusions: [
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                ],

                //Add reviews and ratings here
            },
            // Package here
            {
                //Level 1
                id: "adv_001",
                name: "Bali Bliss: 7-Day Tropical Escape",
                duration: { days: 14 },
                packageThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                shortDesc: "Discover the magic of Bali with scenic beaches, luxury spas, and temple tours",
                price: { amount: 1500000, currency: "NGN", priceType: "per person" },
                destination: "Bali, Indonesia",

                // Level 2
                highlights: ["Everest Base Camp", "Sherpa Villages", "Mountain Views"],
                difficulty: "challenging",
                groupSize: { min: 2, max: 12 },
                startAndEndLocation: { startsAt: "Bali, Indonesia", endsAt: "Bali, Indonesia" },
                aboutPackage: "Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler. Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                ],
                inclusions: [
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                ],

                //Add reviews and ratings here
            },
            // Package here
            {
                //Level 1
                id: "adv_001",
                name: "Bali Bliss: 7-Day Tropical Escape",
                duration: { days: 14 },
                packageThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                shortDesc: "Discover the magic of Bali with scenic beaches, luxury spas, and temple tours",
                price: { amount: 1500000, currency: "NGN", priceType: "per person" },
                destination: "Bali, Indonesia",

                // Level 2
                highlights: ["Everest Base Camp", "Sherpa Villages", "Mountain Views"],
                difficulty: "challenging",
                groupSize: { min: 2, max: 12 },
                startAndEndLocation: { startsAt: "Bali, Indonesia", endsAt: "Bali, Indonesia" },
                aboutPackage: "Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler. Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                ],
                inclusions: [
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                ],

                //Add reviews and ratings here
            },
            // Package here
            {
                //Level 1
                id: "adv_001",
                name: "Bali Bliss: 7-Day Tropical Escape",
                duration: { days: 14 },
                packageThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                shortDesc: "Discover the magic of Bali with scenic beaches, luxury spas, and temple tours",
                price: { amount: 1500000, currency: "NGN", priceType: "per person" },
                destination: "Bali, Indonesia",

                // Level 2
                highlights: ["Everest Base Camp", "Sherpa Villages", "Mountain Views"],
                difficulty: "challenging",
                groupSize: { min: 2, max: 12 },
                startAndEndLocation: { startsAt: "Bali, Indonesia", endsAt: "Bali, Indonesia" },
                aboutPackage: "Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler. Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                ],
                inclusions: [
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                ],

                //Add reviews and ratings here
            },
            // Package here
            {
                //Level 1
                id: "adv_001",
                name: "Bali Bliss: 7-Day Tropical Escape",
                duration: { days: 14 },
                packageThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                shortDesc: "Discover the magic of Bali with scenic beaches, luxury spas, and temple tours",
                price: { amount: 1500000, currency: "NGN", priceType: "per person" },
                destination: "Bali, Indonesia",

                // Level 2
                highlights: ["Everest Base Camp", "Sherpa Villages", "Mountain Views"],
                difficulty: "challenging",
                groupSize: { min: 2, max: 12 },
                startAndEndLocation: { startsAt: "Bali, Indonesia", endsAt: "Bali, Indonesia" },
                aboutPackage: "Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler. Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                ],
                inclusions: [
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                ],

                //Add reviews and ratings here
            },
        ]
    },

    {
        categoryName: "Cheap Vacation",
        description: "Big vibes. Small spend. With JAPA’s budget-friendly packages, you can flex on a budget, because soft life should be accessible.",
        categoryThumbnail: 'https://ggsc.s3.us-west-2.amazonaws.com/assets/images/how_to_avoid_the_post-vacation_stress_frenzy_-_abcdef_-_0a21b39134b316e51cdc0dd96c5e6bca3c0093e9_-_abcdef_-_c3aa4369bd53794b17dba2719890b56de8809755.webp',
        packages: [
            // Package here
            {
                //Level 1
                id: "adv_001",
                name: "Bali Bliss: 7-Day Tropical Escape",
                duration: { days: 14 },
                packageThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                shortDesc: "Discover the magic of Bali with scenic beaches, luxury spas, and temple tours",
                price: { amount: 1500000, currency: "NGN", priceType: "per person" },
                destination: "Bali, Indonesia",

                // Level 2
                highlights: ["Everest Base Camp", "Sherpa Villages", "Mountain Views"],
                difficulty: "challenging",
                groupSize: { min: 2, max: 12 },
                startAndEndLocation: { startsAt: "Bali, Indonesia", endsAt: "Bali, Indonesia" },
                aboutPackage: "Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler. Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                ],
                inclusions: [
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                ],

                //Add reviews and ratings here
            },
            // Package here
            {
                //Level 1
                id: "adv_001",
                name: "Bali Bliss: 7-Day Tropical Escape",
                duration: { days: 14 },
                packageThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                shortDesc: "Discover the magic of Bali with scenic beaches, luxury spas, and temple tours",
                price: { amount: 1500000, currency: "NGN", priceType: "per person" },
                destination: "Bali, Indonesia",

                // Level 2
                highlights: ["Everest Base Camp", "Sherpa Villages", "Mountain Views"],
                difficulty: "challenging",
                groupSize: { min: 2, max: 12 },
                startAndEndLocation: { startsAt: "Bali, Indonesia", endsAt: "Bali, Indonesia" },
                aboutPackage: "Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler. Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                ],
                inclusions: [
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                ],

                //Add reviews and ratings here
            },
            // Package here
            {
                //Level 1
                id: "adv_001",
                name: "Bali Bliss: 7-Day Tropical Escape",
                duration: { days: 14 },
                packageThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                shortDesc: "Discover the magic of Bali with scenic beaches, luxury spas, and temple tours",
                price: { amount: 1500000, currency: "NGN", priceType: "per person" },
                destination: "Bali, Indonesia",

                // Level 2
                highlights: ["Everest Base Camp", "Sherpa Villages", "Mountain Views"],
                difficulty: "challenging",
                groupSize: { min: 2, max: 12 },
                startAndEndLocation: { startsAt: "Bali, Indonesia", endsAt: "Bali, Indonesia" },
                aboutPackage: "Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler. Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                ],
                inclusions: [
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                ],

                //Add reviews and ratings here
            },
            // Package here
            {
                //Level 1
                id: "adv_001",
                name: "Bali Bliss: 7-Day Tropical Escape",
                duration: { days: 14 },
                packageThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                shortDesc: "Discover the magic of Bali with scenic beaches, luxury spas, and temple tours",
                price: { amount: 1500000, currency: "NGN", priceType: "per person" },
                destination: "Bali, Indonesia",

                // Level 2
                highlights: ["Everest Base Camp", "Sherpa Villages", "Mountain Views"],
                difficulty: "challenging",
                groupSize: { min: 2, max: 12 },
                startAndEndLocation: { startsAt: "Bali, Indonesia", endsAt: "Bali, Indonesia" },
                aboutPackage: "Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler. Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                ],
                inclusions: [
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                ],

                //Add reviews and ratings here
            },
            // Package here
            {
                //Level 1
                id: "adv_001",
                name: "Bali Bliss: 7-Day Tropical Escape",
                duration: { days: 14 },
                packageThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                shortDesc: "Discover the magic of Bali with scenic beaches, luxury spas, and temple tours",
                price: { amount: 1500000, currency: "NGN", priceType: "per person" },
                destination: "Bali, Indonesia",

                // Level 2
                highlights: ["Everest Base Camp", "Sherpa Villages", "Mountain Views"],
                difficulty: "challenging",
                groupSize: { min: 2, max: 12 },
                startAndEndLocation: { startsAt: "Bali, Indonesia", endsAt: "Bali, Indonesia" },
                aboutPackage: "Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler. Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                ],
                inclusions: [
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                ],

                //Add reviews and ratings here
            },
        ]
    },

    {
        categoryName: "Last-Minute Vacation",
        description: "Need to JAPA ASAP? Whether it’s a quick romantic escape or a spontaneous squad trip, we’ve got fire last-minute deals ready to go.",
        categoryThumbnail: 'https://ggsc.s3.us-west-2.amazonaws.com/assets/images/how_to_avoid_the_post-vacation_stress_frenzy_-_abcdef_-_0a21b39134b316e51cdc0dd96c5e6bca3c0093e9_-_abcdef_-_c3aa4369bd53794b17dba2719890b56de8809755.webp',
        packages: [
            // Package here
            {
                //Level 1
                id: "adv_001",
                name: "Bali Bliss: 7-Day Tropical Escape",
                duration: { days: 14 },
                packageThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                shortDesc: "Discover the magic of Bali with scenic beaches, luxury spas, and temple tours",
                price: { amount: 1500000, currency: "NGN", priceType: "per person" },
                destination: "Bali, Indonesia",

                // Level 2
                highlights: ["Everest Base Camp", "Sherpa Villages", "Mountain Views"],
                difficulty: "challenging",
                groupSize: { min: 2, max: 12 },
                startAndEndLocation: { startsAt: "Bali, Indonesia", endsAt: "Bali, Indonesia" },
                aboutPackage: "Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler. Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                ],
                inclusions: [
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                ],

                //Add reviews and ratings here
            },
            // Package here
            {
                //Level 1
                id: "adv_001",
                name: "Bali Bliss: 7-Day Tropical Escape",
                duration: { days: 14 },
                packageThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                shortDesc: "Discover the magic of Bali with scenic beaches, luxury spas, and temple tours",
                price: { amount: 1500000, currency: "NGN", priceType: "per person" },
                destination: "Bali, Indonesia",

                // Level 2
                highlights: ["Everest Base Camp", "Sherpa Villages", "Mountain Views"],
                difficulty: "challenging",
                groupSize: { min: 2, max: 12 },
                startAndEndLocation: { startsAt: "Bali, Indonesia", endsAt: "Bali, Indonesia" },
                aboutPackage: "Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler. Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                ],
                inclusions: [
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                ],

                //Add reviews and ratings here
            },
            // Package here
            {
                //Level 1
                id: "adv_001",
                name: "Bali Bliss: 7-Day Tropical Escape",
                duration: { days: 14 },
                packageThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                shortDesc: "Discover the magic of Bali with scenic beaches, luxury spas, and temple tours",
                price: { amount: 1500000, currency: "NGN", priceType: "per person" },
                destination: "Bali, Indonesia",

                // Level 2
                highlights: ["Everest Base Camp", "Sherpa Villages", "Mountain Views"],
                difficulty: "challenging",
                groupSize: { min: 2, max: 12 },
                startAndEndLocation: { startsAt: "Bali, Indonesia", endsAt: "Bali, Indonesia" },
                aboutPackage: "Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler. Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                ],
                inclusions: [
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                ],

                //Add reviews and ratings here
            },
            // Package here
            {
                //Level 1
                id: "adv_001",
                name: "Bali Bliss: 7-Day Tropical Escape",
                duration: { days: 14 },
                packageThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                shortDesc: "Discover the magic of Bali with scenic beaches, luxury spas, and temple tours",
                price: { amount: 1500000, currency: "NGN", priceType: "per person" },
                destination: "Bali, Indonesia",

                // Level 2
                highlights: ["Everest Base Camp", "Sherpa Villages", "Mountain Views"],
                difficulty: "challenging",
                groupSize: { min: 2, max: 12 },
                startAndEndLocation: { startsAt: "Bali, Indonesia", endsAt: "Bali, Indonesia" },
                aboutPackage: "Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler. Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                ],
                inclusions: [
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                ],

                //Add reviews and ratings here
            },
            // Package here
            {
                //Level 1
                id: "adv_001",
                name: "Bali Bliss: 7-Day Tropical Escape",
                duration: { days: 14 },
                packageThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                shortDesc: "Discover the magic of Bali with scenic beaches, luxury spas, and temple tours",
                price: { amount: 1500000, currency: "NGN", priceType: "per person" },
                destination: "Bali, Indonesia",

                // Level 2
                highlights: ["Everest Base Camp", "Sherpa Villages", "Mountain Views"],
                difficulty: "challenging",
                groupSize: { min: 2, max: 12 },
                startAndEndLocation: { startsAt: "Bali, Indonesia", endsAt: "Bali, Indonesia" },
                aboutPackage: "Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler. Discover Bali like never before — from tranquil temples and terraced rice fields to vibrant beach clubs and healing spa rituals. This carefully curated journey blends local culture, adventure, and indulgent comfort for the soul-seeking traveler.",
                itinerary: [
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                    {
                        itineraryTitle: "Day 1: Welcome to Bali – Airport Transfer & Sunset Dinner",
                        itineraryDetails: "Arrive at Denpasar International Airport and be welcomed with fresh frangipani garlands and a cool drink. You'll be escorted to your eco-luxury villa in Ubud. Unwind by your private plunge pool or explore the nearby artisan village. In the evening, join the group for a welcome dinner overlooking lush rice paddies."
                    },
                ],
                inclusions: [
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                    {
                        inclusionTitle: "Daily Breakfast + 3 Dinners",
                        inclusionDetails: "No hassle, no haggling — private airport pickup and drop-off are included, ensuring a smooth start and end to your adventure"
                    },
                ],
                accomodation: [
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                    {
                        accomodationThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&s',
                        accomodationName: 'Kamandalu Resort – Ubud',
                        noOfNights: '3',
                        accomodationDesc: "An eco-chic hideaway overlooking lush rice terraces. Each villa features a private outdoor bath and infinity pool."
                    },
                ],

                //Add reviews and ratings here
            },
        ]
    },
];


export default travelPackages;