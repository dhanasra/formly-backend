const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const _formFieldsSchema = new Schema({
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
    linkName: {
        type: String,
        required: true
    },
    items: {
        type: Object,
        default: null
    },
    props: {
        type: Object,
        default: []
    }
});

const getFormFieldsModel = () => {
    return mongoose.model("FormFields", _formFieldsSchema, "FormFields");
};

module.exports = {
    getFormFieldsModel
};