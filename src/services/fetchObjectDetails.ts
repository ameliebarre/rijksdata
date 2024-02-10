import { GET } from "@/api/apiHelpers";
import { ArtObjectDetails } from "@/interfaces/object";

const API_KEY = import.meta.env.VITE_API_KEY;

const fetchObjectDetails = (objectNumber: string): Promise<ArtObjectDetails> =>
  GET({
    url: `/collection/${objectNumber}?key=${API_KEY}`,
  });

export default fetchObjectDetails;
