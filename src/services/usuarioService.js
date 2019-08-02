const config = require('../../settings/config');
const axios = require('axios');
const apiUrl = config.variables.apiUrl;

exports.getUserById = async (id) => {
    const response = await axios.get(apiUrl + '/usuario/' + id.toString());
    return response.data.result[0];
};

exports.getUsers = async () => {
    const response = await axios.get(apiUrl + '/usuario');
    return response.data.result;
};

exports.updateUser = async () => {
    
};
