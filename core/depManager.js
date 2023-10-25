// DB
const USER = require("../models/user.model");
const FORM_FIELDS = require("../models/formFields.model");
const FORM_PROPS = require("../models/formProps.model");
const GROUPS = require("../models/groups.model");

const depManager = {
  // DB
  USER,
  FORM_FIELDS,
  FORM_PROPS,
  GROUPS
};

module.exports = depManager;
