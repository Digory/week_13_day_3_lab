use bucket_list;
db.dropDatabase();

db.activities.insertMany([
    {
        name: "Skydiving",
        location: "Romania",
        price: "500",
        done: true
    },
    {
        name: "Whalewatching",
        location: "Iceland",
        price: "300",
        done: false
    },
    {
        name: "Blow the whale horn of the guy who has the whale horn",
        location: "South Africa",
        price: "5000",
        done: true
    }
])