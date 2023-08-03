# Map-Visualization
This is a small project which aims to implement map visualization using SvelteKit and Leaflet. 
There are two sub folders of the project, one is `svelte` which uses `Leaflet` as a map rendering library. The other is a simple setup of a backend server using `Postgres` image from `Docker`.

## Svelte

### Installation

```bash
$ npm install
```

### Running the app

```bash

$ npm run dev

```

### Testing

Even though a postgres server is implemented under `backend-postgres/src` , for simplicity & time constraint, the leaflet map uses static data from `db.json` file available at `src/data`. 
The main logic lives under `src/lib/Leaflet.svelte`. [Please note that to give a moving vehicle effect, I made use of setInterval and life-cycle hooks].

The app would be available at `http://localhost:5173`.
By default, the map shows the locations of a vehicle but to take user-input, navigate to `http://localhost:5173/vehicleRoutes/[vehicleId]` and it will update the pointers accordingly.


## Backend - Postgres
This folder aims to establish an express server using a postgres docker image. 

### Installation

```bash
$ npm install
```

### Running the app

```bash

$ npm run build
$ docker compose up

```

### Testing
Once the docker image is up and running, the migrations written under `src/db/migrations/sql` will be executed which will populate the db.
To verify the postgres db, type the following commands :

```bash
$ docker ps (copy the container ID of postgres)
$ docker exec -it <containerID> /bin/sh
$ psql -U <DB_USER> <DB_NAME>  (see example.env file)
```

The endpoint `/getVehiclesData` is implemented to establish a connection with Db and return a response based on that. Please see `index.ts`.
