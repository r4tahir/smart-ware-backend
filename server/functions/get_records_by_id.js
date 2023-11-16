const dbo = require(".././db/conn");
const ObjectId = require("mongodb").ObjectId;

exports.handler = async (event, context) => {
  try {
    const db_connect = await dbo.getDb("employees");
    const myquery = { _id: ObjectId(event.queryStringParameters.id) };
    const result = await db_connect.collection("records").findOne(myquery);
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
