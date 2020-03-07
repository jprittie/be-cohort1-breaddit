const fs = require("fs");
const { promisify } = require("util");

const breadData = require("../../../db/bread.data.json");

const writeFile = promisify(fs.writeFile);

const listBreads = (req, res) => {
  return res.json({
    data: breadData
  });
};

const postBread = async (req, res) => {
  const id = breadData.length + 1;
  const newBreadData = [ ...breadData, { id, ...req.body }]

  await writeFile("db/bread.data.json", JSON.stringify(newBreadData));
  res.status(201);
  return res.json({
    id,
    ...req.body
  });
}


module.exports = {
  listBreads,
  postBread
}
