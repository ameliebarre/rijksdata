import { GET } from "@/api/apiHelpers";
import { Collection } from "@/interfaces/collection";

const API_KEY = import.meta.env.VITE_API_KEY;
const RESULTS_PER_PAGE = 10;

const fetchCollection = (
  pageParam: number,
  searchedValue: string,
): Promise<Collection> =>
  GET({
    url: `/collection?key=${API_KEY}&ps=${RESULTS_PER_PAGE}&p=${pageParam}&q=${searchedValue}`,
  });

export default fetchCollection;
