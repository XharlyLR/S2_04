S2_04.restaurants.find();

S2_04.restaurants.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 });

S2_04.restaurants.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 });

S2_04.restaurants.find({}, { restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1, _id: 0 });

S2_04.restaurants.find({ borough: "Bronx" });

S2_04.restaurants.find({ borough: "Bronx" }).limit(5);

S2_04.restaurants.find({ borough: "Bronx" }).skip(5).limit(5);

S2_04.restaurants.find({ "grades.score": { $gt: 90 } });

S2_04.restaurants.find({"grades.score": { $gt: 80, $lt: 100 } });

S2_04.restaurants.find({ 'address.coord.0': { $lt: -95.754168 } });

S2_04.restaurants.find({ $and : [ { cuisine: { $ne: "American " } }, {"grades.score": { $gt: 70 } }, { "address.coord.0":  { $lt: -65.754168 } } ] });

S2_04.restaurants.find({ cuisine: { $ne: "American " }, "grades.score": { $gt: 70 }, "address.coord.1": { $lt: -65.754168 } });

S2_04.restaurants.find({ cuisine: { $ne: "American " }, "grades.grade": "A", borough: { $ne: "Brooklyn" } }).sort( {cuisine: -1} );

S2_04.restaurants.find({name: {$regex: "^Wil" } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 });

S2_04.restaurants.find({name: {$regex: "ces$" } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 });

S2_04.restaurants.find({name: {$regex: "Reg" } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 });

S2_04.restaurants.find({ borough: "Bronx", cuisine: {$in:  ["American ", "Chinese"]}});