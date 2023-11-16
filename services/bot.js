const { GenericResponse } = require("../dtos/response/generic");

exports.get = async (req, res) => {
    let response = new GenericResponse({status: "alive"});
        res.status(200).json(response);
}

exports.reply = async (req, res) => {
    try{
        let response = new GenericResponse({status: "success"});
        res.status(200).json(response);
    }catch(err){
        let response = new GenericResponse();
        response.addError(err.message)
        res.status(403).json(response);
    }
}