Plane.destroy_all
Flight.destroy_all

# Create plane data
p1 = Plane.create(name: "747", rows: 26, columns: 6)
p2 = Plane.create(name: "756", rows: 28, columns: 8)
p3 = Plane.create(name: "767", rows: 29, columns: 9)
p4 = Plane.create(name: "789", rows: 22, columns: 6)
p5 = Plane.create(name: "348", rows: 24, columns: 4)

# Create flight data
f1 = Flight.create(flight_number: 17, origin:"SYD", destination:"BNE", date: 2014)
f2 = Flight.create(flight_number: 45, origin:"LAX", destination:"SFO", date: 2014)
f3 = Flight.create(flight_number: 70, origin:"SFO", destination:"JFK", date: 2014)
f4 = Flight.create(flight_number: 27, origin:"SYD", destination:"IST", date: 2014)
f5 = Flight.create(flight_number: 88, origin:"SYD", destination:"LHR", date: 2014)
f6 = Flight.create(flight_number: 88, origin:"SYD", destination:"BNE", date: 2014)
f7 = Flight.create(flight_number: 45, origin:"SYD", destination:"IST", date: 2014)

# associate planes with flights
p1.flights << f1
p2.flights << f2 << f7
p3.flights << f3
p4.flights << f4
p5.flights << f5 << f6


# Create users
u1 = User.create(name: 'May');
u2 = User.create(name: 'Amy');
u3 = User.create(name: 'Faryar');
u4 = User.create(name: 'JJ');
u5 = User.create(name: 'QQ');

# Create reservation
r1 = Reservation.create(flight_id: f1.id, user_id: u1.id, seat: 'x1');
r2 = Reservation.create(flight_id: f1.id, user_id: u2.id, seat: 'v1');
r3 = Reservation.create(flight_id: f1.id, user_id: u3.id, seat: 's1');
r4 = Reservation.create(flight_id: f1.id, user_id: u4.id, seat: 'r1');
r5 = Reservation.create(flight_id: f2.id, user_id: u5.id, seat: 'p1');





