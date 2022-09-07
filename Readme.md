## Ejemplo DAO

# Estructura
- Routes
- Controllers
- Models
- Daos

# Storages soportados
- Memory: Funciona por default.
- Mongo DB: Agregar connection string en `.env`.

# Start up
- Correr `npm i`, luego `npm run dev`.

# Endpoints soportados
* GET /product. Devuelve todos los productos en la db.
* POST /product. Agrega un product a la db. Espera recibi name y cost en body como application/json. Curl de ejemplo:
```bash
curl -H Content-Type: application/json http://localhost:5000/product -d {"name":"Product", "cost":20}
```