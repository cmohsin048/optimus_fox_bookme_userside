const express = require("express");
const Router = express.Router();
const { registration, login } = require("../controler/usercontroler");
const AuthenticateUser = require("../MIddlewear/Usermiddlewear");
const { fetchRoutes } = require("../controler/Routescontroler");
const { getAllCities } = require("../controler/Citycontroler");
const { getallcompanies } = require("../controler/Companycontroler");

Router.route("/register").post(registration);
Router.route("/login").post(login, AuthenticateUser);
Router.get("/cities", getAllCities);
Router.post("/search", fetchRoutes);
Router.get("/companies", getallcompanies);

module.exports = Router;
