
Had to use Vite to setup the project as React updated to 19.0.0 but some of its dependencies were still not updated causing install issues when using npm for install.

In order to be able to run the project, do the following:

*I had some setup issues and had to update my node version to 22.13.0, I'd recommend have at least 17 version to not have issues with dependencies.*

npm i
npm run dev
should be able to access the application at localhost:5173

-- notes



I've added a .env.dist file to be used in order to access the graphql_uri, should be enough to just create a .env file in the root project and add the VITE_GRAPHQL_URI value there

to run the tests, from root dir, just run npm test or npm test -- -u