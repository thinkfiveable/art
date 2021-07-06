/* eslint-disable import/no-anonymous-default-export */
const AirtablePlus = require("airtable-plus");

const airtable = new AirtablePlus({
  baseID: process.env.AIRTABLE_BASE_ID,
  apiKey: process.env.AIRTABLE_API_KEY,
  tableName: process.env.AIRTABLE_TABLE_NAME,
  transform: (res) => {
    return res.fields;
  },
});

export default async (req, res) => {
  const readRes = await airtable.read();
  res.json(readRes);
};
