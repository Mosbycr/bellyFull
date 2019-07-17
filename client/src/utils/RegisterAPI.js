import axios from "axios";

export default {
    getRegister: function() {
        return axios.get("/api/register");
    },
    getRegisterById: function(id) {
        return axios.get("/api/register" + id);
    },
    deleteRegister: function(id) {
        return axios.delete("/api/register/" + id);

    },
    saveRegister: function(registerData) {
        return axios.post("/api/register", registerData);
    }
};