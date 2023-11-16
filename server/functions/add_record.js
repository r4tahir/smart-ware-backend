const dbo = require(".././db/conn");

exports.handler = async (event, context) => {
  try {
    const db_connect = await dbo.getDb("employees");
    const { name, position, level } = JSON.parse(event.body);
    const myobj = { name, position, level };
    const result = await db_connect.collection("records").insertOne(myobj);
    return {
      statusCode: 200,
      body: JSON.stringify(result.ops),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};