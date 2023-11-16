const dbo = require(".././db/conn");
const { handler: apiHandler } = require("./api");

exports.handler = async (event, context) => {
  try {
    // Invoke the handler from api.js to establish the MongoDB connection
    const apiResult = await apiHandler(event, context);

    // Ensure the database connection was successful
    if (apiResult.statusCode === 200) {
      const db_connect = await dbo.getDb("employees");

      // Logic for adding a record
      const recordToAdd = {
        // Your record details here
      };
      const result = await db_connect.collection("records").insertOne(recordToAdd);

      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Record added successfully" }),
      };
    } else {
      // Return an error response if the connection failed
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to connect to MongoDB" }),
      };
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
