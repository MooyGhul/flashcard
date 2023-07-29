import express, { Express, Request, Response } from 'express';
const app: Express = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req: Request, res: Response ) => {
    res.send( "Express + TypeScript Server!" );
} );

// start the Express server
app.listen( port, () => {
    console.log( `⚡️[ts-server]: Server is running at http://localhost:${port}` );
} );