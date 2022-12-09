import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../lib/axios";
import Pointdetail from "./Point-detail";
import Productdetail from "./Product-detail";

const PointOrProduct = () => {
  const { id } = useParams();
  const [byPoint, setByPoint] = useState();
  const handleGetProduct = async () => {
    try {
      const res = await axios.get(`/products/${id}`);
      if (res.data.product.byPoint) {
        setByPoint(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetProduct();
  }, []);

  return !byPoint ? <Productdetail id={id} /> : <Pointdetail id={id} />;
};

export default PointOrProduct;
