const dbo = require(".././db/conn");
const ObjectId = require("mongodb").ObjectId;

exports.handler = async (event, context) => {
  try {
    const db_connect = await dbo.getDb("employees");
    const myquery = { _id: ObjectId(event.queryStringParameters.id) };
    const { name, position, level } = JSON.parse(event.body);
    const newvalues = { $set: { name, position, level } };
    const result = await db_connect
      .collection("records")
      .updateOne(myquery, newvalues);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Record updated successfully" }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
