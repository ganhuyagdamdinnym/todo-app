"use client";
import { TodoType } from "./todoTypes";
import { useEffect, useState } from "react";
import axios from "axios";

// const Fetch = async () => {
//   const [data, setData] = useState<TodoType[]>();
//   console.log("hihihio");
//   try {
//     const url = "http://localhost:8080/api";
//     const res = await axios.get(url);
//     setData(res.allData);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const FetchData = () => {
//   const test = "hiasfs";
//   useEffect(() => {
//     console.log(test);
//   }, []);
// };

export const invoices: TodoType[] = [
  // {
  //   title: "INV001",
  //   status: false,
  //   team: "$250.00",
  //   Action: "Credit Card",
  // },
  // {
  //   title: "INV002",
  //   status: false,
  //   team: "$150.00",
  //   Action: "PayPal",
  // },
  // {
  //   title: "INV003",
  //   status: false,
  //   team: "$350.00",
  //   Action: "Bank Transfer",
  // },
  // {
  //   title: "INV004",
  //   status: false,
  //   team: "$450.00",
  //   Action: "Credit Card",
  // },
  // {
  //   title: "INV005",
  //   status: false,
  //   team: "uu",
  //   Action: "PayPal",
  // },
  // {
  //   title: "INV006",
  //   status: false,
  //   team: "$200.00",
  //   Action: "Bank Transfer",
  // },
  // {
  //   title: "INV007",
  //   status: true,
  //   team: "$300.00",
  //   Action: "Credit Card",
  // },
];
