---
sidebar_position: 1
title: GraphQL API
---

# Star Wars GraphQL API

## Endpoint

```bash
https://swapi-graphql.netlify.app/.netlify/functions/index
```

---

# Open GraphQL Playground

<a
  href="https://studio.apollographql.com/sandbox/explorer"
  target="_blank"
>
Open Apollo Sandbox
</a>

Use this endpoint inside Apollo Sandbox:

```bash
https://swapi-graphql.netlify.app/.netlify/functions/index
```

---

# Example Query

```graphql
query GetFilm {
  film(filmID: 1) {
    title
    director
    releaseDate
  }
}
```

# Example Response

```json
{
  "data": {
    "film": {
      "title": "A New Hope",
      "director": "George Lucas",
      "releaseDate": "1977-05-25"
    }
  }
}
```