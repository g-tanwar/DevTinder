const { MongoClient } = require("mongodb")

const url = "mongodb+srv://tanwar_g:8PMsJ3gKz263Q5Vg@devtinder.4nzsnpt.mongodb.net/" 

const client = new MongoClient(url)

const dbName = "HelloWorld";

async function main(){

    await client.connect();
    console.log("Connected Successfully to server");
    db = client.db(dbName);
    const collection = db.collection("User");

    // Creating an User

    const data = {
        first_name: "Subi",
        last_name: "Tanwar",
        city: "Pune",
        phone_number:"96759103836"
    }

    const insertResult = await collection.insertMany([data]);
    console.log("Inserted documents =>", insertResult);



    // Read the document

    const finalResult = await collection.find({}).toArray();
    console.log('Found documents =>', finalResult);
    

    // counting documents

    const countResult = await collection.estimatedDocumentCount({});
    console.log("Total number of Documents =>", countResult);

    
    // Finding Specific 

    return "done.";

}

main()
 .then(console.log)
 .catch(console.error)
 .finally(() => client.close());