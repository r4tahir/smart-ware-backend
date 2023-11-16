const dbo = require(".././db/conn"); // Adjust the path based on your file structure

exports.handler = async (event, context) => {
  try {
    const db_connect = await dbo.getDb("employees");
    const result = await db_connect.collection("records").find({}).toArray();
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
