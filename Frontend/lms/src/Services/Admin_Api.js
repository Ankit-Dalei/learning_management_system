/* eslint-disable no-useless-concat */
import axios from 'axios';
const backendPort = process.env.REACT_APP_BACKEND_PORT;

const BASE_URL = `http://localhost:${backendPort}/cutm/management`;

export const AddManagement = (management) => axios.post(BASE_URL,management);
export const GetManagement = () => axios.get(BASE_URL); 
export const UpdateManagement = (management,managementId) => axios.put(BASE_URL+`/${managementId}`+managementId,management);
export const DeleteManagement = (managementId) => axios.delete(BASE_URL+"/"+`${managementId}`);
export const GetManagementById = (managementId) => axios.get(BASE_URL+"/managementid"+`/${managementId}`);
export const GetManagementByEmail = (email) => axios.get(BASE_URL+"/managementbyemail"+`/${email}`);