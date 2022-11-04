import { Request, Response } from "express";
import { QueryResult } from "pg";
import { pool } from "../database";

export const getVisitor = async (request: Request, response: Response) => {
  try {
    const queryResult: QueryResult = await pool.query("SELECT * FROM visitor");
    return response.status(200).json(queryResult.rows);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error);
      return response.status(500).json("Failed to retrieve user from DB");
    } else {
      console.log(error);
      return response.status(500).json("Unexpected error has occured");
    }
  }
};

export const insertVisitor = async (
  request: Request,
  response: Response
): Promise<Response> => {
  try {
    await pool.query(
      "INSERT INTO visitor (id, share, email) VALUES (1, false, null)",
      []
    );
    return response.json("Visitor's id was updated");
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error);
      return response.status(500).json("Failed to insert user into DB");
    } else {
      console.log(error);
      return response.status(500).json("Unexpected error has occured");
    }
  }
};

export const updateVisitorEmail = async (
  request: Request,
  response: Response
): Promise<Response> => {
  try {
    const { id, email } = request.body;
    await pool.query("UPDATE visitor SET email = $2 WHERE id = $1", [
      id,
      email,
    ]);
    return response.json("Visitor's email was updated");
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error);
      return response.status(500).json("Failed to update visitor's email");
    } else {
      console.log(error);
      return response.status(500).json("Unexpected error has occured");
    }
  }
};

export const updateVisitorShareStatus = async (
  request: Request,
  response: Response
): Promise<Response> => {
  try {
    const { id } = request.body;
    await pool.query("UPDATE visitor SET share = NOT share WHERE id = $1", [
      id,
    ]);
    return response.json("Visitor's share status was updated");
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error);
      return response
        .status(500)
        .json("Failed to update visitor's share status");
    } else {
      console.log(error);
      return response.status(500).json("Unexpected error has occured");
    }
  }
};
