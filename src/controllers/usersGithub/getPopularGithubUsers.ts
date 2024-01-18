import { Request, Response } from "express";
import axios from "axios";
export const getPopularGithubUsers = async (req: Request, res: Response) => {
  try {
    const { page, user } = req.query;
    const findUser = user ?? "google";
    const totalRepo = page ?? 10;
    const apiUrl = `https://api.github.com/users/${findUser}/repos?sort=stars&per_page=${totalRepo}`;

    const responseApi = await axios.get(apiUrl);
    const responseData = responseApi.data;
    res.status(200).json(responseData);
  } catch (error) {
    res
      .status(500)
      .json(`Falló servidor al consultar usuarios populares, error: ${error}`);
  }
};
