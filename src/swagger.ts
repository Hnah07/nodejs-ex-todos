import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Todo IPA",
            version: "0.0.0",
            description: "Simple Todo API",

        },
        servers:[
            process.env.NODE_ENV !== "production" 
            ? {    
                url:"http://localhost:3000/api",
                description:"Development server"
            }
            :
            {
                url:"https://nodejs-ex-todos.onrender.com/api",
                description:"Production server"
            },
        ],
        components: {
            schemas:{
                Todo: {
                    type: "object",
                    properties: {
                        _id: { type: "string" },
                        title: { type: "string" },
                        completed: { type: "boolean" },
                        createdAt: { type: "string" },
                        updatedAt: { type: "string" },
                    },
                },
                Error: {
                    type: "object",
                    properties: {
                        message: { type: "string" },
                    },
                },
            }
        },
        Tags: [
            {
                name: "Todos",
                description: "Todo management"
            }
        ]
    },
    apis: ["**/*.ts"],
};

export const specs = swaggerJSDoc(options);