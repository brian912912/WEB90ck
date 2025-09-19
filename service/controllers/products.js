import productsModel from "../models/products.js";
import Joi from "joi";

export const createProduct = async (req, res) => {
  try {
    console.log("body", req.body);
    const { name, price, quantity } = req.body;

    const newProduct = await productsModel.create({
      name,
      price,
      quantity,
      image: "img",
      createdBy: req.userId,
    });
    return res.status(201).json({
      product: newProduct,
      message: "Tao san pham thanh cong",
      isSuccess: true,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await productsModel.find();
    return res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await productsModel.findById(req.params.id);
    return res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const updateProduct = async (req, res) => {
  try{
    const {id} = req.params
    const {name,price,quantity} = req.body
    const product = await productsModel.findByIdAndUpdate(id,{name,price,quantity},{new:true})
  }
  catch(error){
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const deleteProduct = async (req, res) => {
  try{
    const {id} = req.params
    await productsModel.findByIdAndDelete(id)
    return res.status(200).json({ message: "Xoa san pham thanh cong" });
  }
  catch(error){
    res.status(500).json({ message: "Internal server error", error });
  }
};

