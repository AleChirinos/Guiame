import ClientInterface from "../models/ClientInterface";
import { API } from "./instance";

export const getClients = async () => {
  return await API.get("/clients");
};

export const addClient = async (client: ClientInterface) => {
  return await API.post("/clients", client);
};

export const getClientById = async (id: number) => {
  return await API.get(`/clients/${id}`);
};
export const updateClient = async (client: ClientInterface) => {
  return await API.put(`/clients/${client.id}`,client);
};
