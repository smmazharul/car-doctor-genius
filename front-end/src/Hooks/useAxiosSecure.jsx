import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const axiosSecure = axios.create({
  baseURL: "https://car-doctor-back-end.onrender.com",
  withCredentials: true,
});

const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, err => {
            console.log(err.response)
            if (err.response.status === 401 || err.response.status === 403) {
                logOut()
                  .then(() => {
                      toast.success("Unauthorized user logout please login");
                      navigate('/login')
                  })
                  .catch((err) => console.log(err));
            }
        })
    },[])
    return axiosSecure;
};

export default useAxiosSecure;