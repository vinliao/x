// This is an example of using fetch to do CRUD to a table in airtable
// Why do this? It's _extremely fast_ for prototyping a product.

// No server, no postgres. Just hit the endpoint and forget about it.

// Some important notes and links:
// 1. access the airtable api on airtable.com/api
// 2. get token from airtable.com/account
// 3. before doing crud, setup the table with GUI
// 4. decapitalize table name and base; replace space with dash
// 5. free plan allows unlimited bases and 1200 records per base
// 6. this thing runs on deno, but fetch is available everywhere

const apiKey = "redacted_value" as string;
const endpoint =
  "https://api.airtable.com/v0/appBE9WjxyvZUOxry/table-1" as string;

const postData = {
  "records": [
    {
      "fields": {
        "name": "Richard 2",
        "email": "fromcurl@notreal.com",
      },
    },
    {
      "fields": {
        "name": "another richard",
        "email": "richard@notreal.com",
      },
    },
  ],
};

const updateData = {
  "records": [
    {
      "id": "recobITnrBRbOV2lG",
      "fields": {
        "name": "update data",
        "email": "fromcurl@update.com",
      },
    }
  ],
};

const post = async (data: object = {}) => {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  const responseJson = await response.json();
  console.log(responseJson);
}

const update = async (data: object = {}) => {
  const response = await fetch(endpoint, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  const responseJson = await response.json();
  console.log(responseJson);
}

const get = async () => {
  const response = await fetch(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
  });

  const responseJson = await response.json();
  console.log(responseJson);
}