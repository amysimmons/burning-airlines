Plane.destroy_all
Flight.destroy_all

p1 = Plane.create(name: "747", rows: 26, columns: 6)
p2 = Plane.create(name: "756", rows: 28, columns: 8)
p3 = Plane.create(name: "767", rows: 29, columns: 9)
p4 = Plane.create(name: "789", rows: 22, columns: 6)
p5 = Plane.create(name: "348", rows: 24, columns: 4)

f1 = Flight.create(flight_number: 17, origin:"SYD", destination:"BNE", date: 2014)
f2 = Flight.create(flight_number: 45, origin:"LAX", destination:"SFO", date: 2014)
f3 = Flight.create(flight_number: 70, origin:"SFO", destination:"JFK", date: 2014)
f4 = Flight.create(flight_number: 27, origin:"SYD", destination:"IST", date: 2014)
f5 = Flight.create(flight_number: 88, origin:"SYD", destination:"LHR", date: 2014)
f6 = Flight.create(flight_number: 88, origin:"SYD", destination:"BNE", date: 2014)
f7 = Flight.create(flight_number: 45, origin:"SYD", destination:"IST", date: 2014)

p1.flights << f1
p2.flights << f2 << f7
p3.flights << f3
p4.flights << f4
p5.flights << f5 << f6