## Getting started

The stack is built using [vue-cli webpack](https://github.com/vuejs-templates/webpack) so to get started all you have to do is:


Frontend
``` bash
# Clone this repository
> git clone https://github.com/kyokidG/CharityApp.git
# Navigate in it
> cd CharityApp
# Install dependencies for frontend
> yarn install
# Install dependencies for backend
> cd backend && npm install && cd ..
# Run database migrations
> cd backend && npm run db:migrate && cd ..
# Load some dummy data in the database (optional)
> cd backend && npm run db:load && cd ..
# serve the backend
> cd backend && npm start
# open another terminal in the project root folder and serve the frontend with hot reload at localhost:8080
> yarn serve
```

## Frontend


Current arbitrary choices are:
- Vuex modules for store
- Vue-axios for ajax requests
- 'rwv' as prefix for components

## Backend
