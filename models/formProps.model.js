const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const _formPropsSchema = new Schema({
    index: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true
    },
    group: {
        type: String,
        required: true
    }
});

const getFormPropsModel = () => {
    return mongoose.model("FormProps", _formPropsSchema, "FormProps");
};

module.exports = {
    getFormPropsModel
};