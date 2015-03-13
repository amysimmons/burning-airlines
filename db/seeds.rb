plane1 = Plane.create(name: "747", rows: 26, columns: 6)
plane2 = Plane.create(name: "756", rows: 28, columns: 8)
plane3 = Plane.create(name: "767", rows: 29, columns: 9)
plane4 = Plane.create(name: "789", rows: 22, columns: 6)
plane5 = Plane.create(name: "348", rows: 24, columns: 4)


Flight.create(flight_number: 17, origin:"SYD", destination:"BNE", date: 2014, plane_id:plane1.id)
Flight.create(flight_number: 45, origin:"LAX", destination:"SFO", date: 2014, plane_id:plane2.id)
Flight.create(flight_number: 70, origin:"SFO", destination:"JFK", date: 2014, plane_id:plane3.id)
Flight.create(flight_number: 27, origin:"SYD", destination:"IST", date: 2014, plane_id:plane4.id)
Flight.create(flight_number: 88, origin:"SYD", destination:"LHR", date: 2014, plane_id:plane5.id)