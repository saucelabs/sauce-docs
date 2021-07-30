---
id: testing-graphql
title: Testing GraphQL
sidebar_label: Testing GraphQL
keywords:
    - api-testing
    - how-to
    - graphql
---

GraphQL is a fantastic tool for creating versatile, eminently flexible servers. With API Fortress, testing GraphQL queries is as easy as testing regular REST endpoints.

API Fortress provides a demonstration GraphQL environment at: [GraphServerlet](https://graphserverlet.herokuapp.com/graphql)

The query and mutation below are formatted for this environment.

## Testing a Query

If the server has GraphicQL enabled, creating your queries through that tool and then copying the generated URLs into an API Fortress GET component is an acceptable process. **However, this process does not lend itself to either readability or replicability. The preferred method is passing the query as a POST body.**

If we're sending a query request to our GraphQL server, we would format our POST body as follows:

```json
{
 "query": "query (\$id: Int!) { course(id: \$id) { id, title, author, description, topic, url }}", 
 "variables": { "id": 1} 
}
```

The above object says the following: we are querying for a specific course by ID, and wish our response body to contain the ID, Title, Author, Description, Topic, and URL of that entry. If we send this body as a POST to our test GraphQL environment, our response will look like this:

```json
{
 "data": {
   "course": {
   "id": 1,
   "title": "The Complete Node.js Developer Course",
   "author": "Andrew Mead, Rob Percival",
   "description": "Learn Node.js by building real-world applications with     
    Node, Express, MongoDB, Mocha, and more!",
   "topic": "Node.js",
   "url": "https://codingthesmartway.com/courses/nodejs/"
    }
  }
}
```

Since our response is a JSON body, API Fortress is fully capable of automatically generating a test to validate future responses from this query.

## Testing a Mutation

A mutation is a GraphQL operation that makes a change to the data being provided. Whereas a GraphQL Query that performs a READ, a Mutation performs a CREATE, UPDATE, or DELETE, rounding out our CRUD operations.

A Mutation is also passed as a POST body to the GraphQL endpoint in question:

```json
{
 "query": "mutation (\$id: Int!, \$topic: String!) { updateCourseTopic(id: \$id, topic: \$topic) { title, topic }}", 
 "variables": { "id": 1, "topic" : "Ruby" } 
}
```

This Mutation is executing the 'updateCourseTopic' operation on the database entry with the ID of 1 and changing its 'topic' value to 'Ruby'. Note the 'mutation' keyword in place of the 'query' keyword from the Query example. This Mutation would return the following response from our test GraphQL environment:

```json
{
 "data": {
    "updateCourseTopic": {
    "title": "The Complete Node.js Developer Course",
    "topic": "Ruby"
    }
  }
}
```

Again, as this is a valid JSON response body, API Fortress is able to generate a test automatically to validate its schema in the future.
