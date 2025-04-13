import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import router from "./routes";

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Swagger setup
const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Property Bidding API',
        version: '1.0.0',
        description: 'API for managing property bids',
      },
      servers: [
        {
          url: 'http://localhost:3000/api',
          description: 'Local server',
        },
      ],
      components: {
        schemas: {
          BidSummary: {
            type: 'object',
            properties: {
              your_bids: {
                type: 'object',
                properties: {
                  outbid: { type: 'number' },
                  active: { type: 'number' },
                  winning: { type: 'number' }
                }
              },
              your_bid_amounts: {
                type: 'object',
                properties: {
                  outbid: { type: 'number' },
                  active: { type: 'number' },
                  winning: { type: 'number' }
                }
              }
            }
          },
          PropertyListing: {
            type: 'object',
            properties: {
              address: { type: 'string' },
              currentWinningBid: { type: 'number' },
              lastBidDifference: { type: 'number' },
              images: {
                type: 'array',
                items: { type: 'string' }
              }
            }
          }
        }
      }
    },
    apis: ['./src/routes/*.ts'], // Path to your route files
  };
  
  const swaggerSpec = swaggerJsdoc(swaggerOptions);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use("/api", router);

export default app;
