import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fileuploads = createAsyncThunk(
  "file/fileuploads",
  async (payload) => {
   console.log(payload)
    
    const data = await axios.post("http://localhost:8080/filecloudinary", payload);
    return data;
  }
);
