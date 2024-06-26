import { Brand } from "../models/models.js";
import ApiError from "../errors/ApiError.js";

export const create = async (req, res) => {
  const { name } = req.body;
  const brand = await Brand.create({ name });
  return res.json(brand);
};

export const getAll = async (req, res) => {
  const brands = await Brand.findAll();
  return res.json(brands);
};
