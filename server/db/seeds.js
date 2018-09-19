use bucket_list;
db.dropDatabase();

db.activities.insertMany([
    {
        name: "Skydiving",
        location: "Romania",
        price: "500"
    },
    {
        name: "Whalewatching",
        location: "Iceland",
        price: "300"
    },
    {
        name: "Blow the whale horn of the guy who has the whale horn",
        location: "South Africa",
        price: "5000"
    }
])