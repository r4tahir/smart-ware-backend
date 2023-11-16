const dbo = require(".././db/conn"); // Adjust the path based on your file structure
const { handler: apiHandler } = require("./api");

exports.handler = async (event, context) => {
  try {
    // Invoke the handler from api.js to establish the MongoDB connection
    const apiResult = await apiHandler(event, context);

    // Ensure the database connection was successful
    if (apiResult.statusCode === 200) {
      const db_connect = await dbo.getDb("employees");
      const result = await db_connect.collection("records").find({}).toArray();
      
      return {
        statusCode: 200,
        body: JSON.stringify(result),
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
