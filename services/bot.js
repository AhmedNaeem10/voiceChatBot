const { GenericResponse } = require("../dtos/response/generic");
const { openai } = require("./openai");

exports.get = async (req, res) => {
    let response = new GenericResponse({ status: "alive" });
    res.status(200).json(response);
}

exports.reply = async (req, res) => {
    try {
        const message = req.body.message;
        const completion = await openai.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: req.body.message,
                },
            ],
            model: "gpt-3.5-turbo-1106",
        });
        const reply = completion.choices[0].message.content;
        // const reply = "hello world!";
        let response = new GenericResponse(reply);
        res.status(200).json(response);
    } catch (err) {
        let response = new GenericResponse();
        response.addError(err.message)
        res.status(400).json(response);
    }
}