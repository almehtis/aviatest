"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateVisitorShareStatus = exports.updateVisitorEmail = exports.insertVisitor = exports.getVisitor = void 0;
const database_1 = require("../database");
const getVisitor = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryResult = yield database_1.pool.query("SELECT * FROM visitor");
        return response.status(200).json(queryResult.rows);
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error);
            return response.status(500).json("Failed to retrieve user from DB");
        }
        else {
            console.log(error);
            return response.status(500).json("Unexpected error has occured");
        }
    }
});
exports.getVisitor = getVisitor;
const insertVisitor = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield database_1.pool.query("INSERT INTO visitor (id, share, email) VALUES (1, false, null)", []);
        return response.json("Visitor's id was updated");
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error);
            return response.status(500).json("Failed to insert user into DB");
        }
        else {
            console.log(error);
            return response.status(500).json("Unexpected error has occured");
        }
    }
});
exports.insertVisitor = insertVisitor;
const updateVisitorEmail = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, email } = request.body;
        yield database_1.pool.query("UPDATE visitor SET email = $2 WHERE id = $1", [
            id,
            email,
        ]);
        return response.json("Visitor's email was updated");
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error);
            return response.status(500).json("Failed to update visitor's email");
        }
        else {
            console.log(error);
            return response.status(500).json("Unexpected error has occured");
        }
    }
});
exports.updateVisitorEmail = updateVisitorEmail;
const updateVisitorShareStatus = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = request.body;
        yield database_1.pool.query("UPDATE visitor SET share = NOT share WHERE id = $1", [
            id,
        ]);
        return response.json("Visitor's share status was updated");
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error);
            return response
                .status(500)
                .json("Failed to update visitor's share status");
        }
        else {
            console.log(error);
            return response.status(500).json("Unexpected error has occured");
        }
    }
});
exports.updateVisitorShareStatus = updateVisitorShareStatus;
