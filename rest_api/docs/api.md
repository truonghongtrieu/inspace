## Sample curl requests

### Actors
- Create an actor with movies
```
curl --location --request POST 'localhost:3000/actors' \
--header 'Content-Type: application/json' \
--data-raw '{
    "firstName": "John",
    "lastName": "Smith",
    "movieIds": [1, 2, 3]
}'
```

- Get all actors
```
curl --location --request GET 'localhost:3000/actors'
```

- Get one actor
```
curl --location --request GET 'localhost:3000/actors/{id}'
```

- Update actor
```
curl --location --request PUT 'localhost:3000/actors/1' \
--header 'Content-Type: application/json' \
--data-raw '{
    "firstName": "John 2",
    "lastName": "Smith 2"
}'
```

- Delete actor
```
curl --location --request DELETE 'localhost:3000/actors/1'
```



### Movies
- Create a movie
```
curl --location --request POST 'localhost:3000/movies' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title": "A great title",
    "description": "A cool description"
}'
```

- Get all movies
```
curl --location --request GET 'localhost:3000/movies'
```

- Get one movie
```
curl --location --request GET 'localhost:3000/movies/{id}'
```

- Update movie
```
curl --location --request PUT 'localhost:3000/movies/1' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title": "A great title 2",
    "description": "A cool description 2"
}'
```

- Delete movie
```
curl --location --request DELETE 'localhost:3000/movies/1'
```