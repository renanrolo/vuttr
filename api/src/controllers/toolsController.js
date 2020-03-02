const Tools = require('../models/tools')

module.exports = {
    async index(request, response) {
        const tools = await Tools.find();
        return response.json(tools);
    },

    async store(request, response) {
        const tool = new Tools({ ...request.body })
        await tool.save((err, insertedTool) => {
            console.log("toolsController.store.err", err)
            if (err) {
                return response.status(400).json(err)
            }
            return response.json(insertedTool)
        });
    },

    async destroy(request, response) {
        const tool = await Tools.find({ _id: request.body.id });

        if (!tool) {
            return resposnse
                .status(400)
                .json("Tool not found!")
        }

        Tools.deleteOne({ _id: tool._id }, function (err) {
            if (err) return handleError(err);
            console.log("Tools.deleteOne.err", err)
        })

        return response.json("deleted");
    },

}