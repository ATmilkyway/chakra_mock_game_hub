import apiClient from "@/services/apiClient";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
