import axiosInstance from "./axiosInstance";

interface RequestParams<T> {
  url: string;
  data?: T;
  params?: T,
}

export const GET = async <T>({ url, params }: RequestParams<T>) => {
  try {
    const res = await axiosInstance.get(url, { params });
    return res.data;
  } catch (err) {
    return err;
  };
};

export const POST = async <T>({ url, data, params }: RequestParams<T>) => {
  try {
    const res = await axiosInstance.post(url, data, { params });
    return res.data;
  } catch (err) {
    return err;
  };
};