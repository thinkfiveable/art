/* eslint-disable import/no-anonymous-default-export */
const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);

const table = base(process.env.AIRTABLE_TABLE_NAME);

const minifyRecords = (records) => {
  return records.map((record) => getMinifiedRecord(record));
};

const getMinifiedRecord = (record) => {
  return {
    id: record.id,
    fields: record.fields,
  };
};

export default async (req, res) => {
  const records = await table.select({}).firstPage();

  const minifiedRecords = minifyRecords(records);

  res.statusCode = 200;
  res.json(minifiedRecords);
};
