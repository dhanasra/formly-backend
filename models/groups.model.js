const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const _groupsSchema = new Schema({
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
    }
});

const getGroupsModel = () => {
    return mongoose.model("Groups", _groupsSchema, "Groups");
};

module.exports = {
    getGroupsModel
};