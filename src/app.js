import express from "express";
const app=express()

app.use(express.json()); // Example: Middleware for JSON parsing

export {app}