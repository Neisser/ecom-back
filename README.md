
# Ecoms

Ecoms is a dummy project for neero test.


## Authors

- [@neisser](https://www.github.com/neisser)


## Deployment

To deploy this project first create a .env file and add a database with a mongo conection string:

```bash
  DB_SRV=[mongo conection string]
```
then
```bash
  yarn install
```
finally
```bash
  yarn dev
```


## API Reference

#### Register new users

```http
  POST /api/users/register
```

| Body Parameter | Type     | Description                 |
| :-------- | :------- | :-------------------------       |
| `email` | `string` | **Required**. User's email         |
| `password` | `string` | **Required**. User's password   |
| `picture` | `string` | **Required**. User's picture url |
| `name` | `string` | **Required**. User's name           |

#### Login users

```http
  POST /api/users/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email` | `string` | **Required**. User's email          |
| `password` | `string` | **Required**. User's password    |



