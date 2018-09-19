use bucket_list;
db.dropDatabase();

db.activities.insertMany([
    {
        name: "Skydiving",
        location: "Romania",
        done: "true"
    },
    {
        name: "Whalewatching",
        location: "Iceland",
        done: "false"
    },
    {
        name: "Blow the whale horn of the guy who has the whale horn",
        location: "South Africa",
        done: "true"
    }
])