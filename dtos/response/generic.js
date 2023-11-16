class GenericResponse {
    constructor(result = null){
        this.success = true;
        this.error = []
        this.result = result
    }

    addError(err){
        this.error.push(err)
        this.success = false;
    }

    addResult(data){
        this.result = data;
    }
}

module.exports.GenericResponse = GenericResponse;