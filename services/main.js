const responser = require("../core/responser");
const depManager = require("../core/depManager");
const { generateTokens } = require("./token");

async function fetchData(req, res){
    try{
        
        const userId = req.userId;
        const [user, fields, properties, groups] = await Promise.all([
            depManager.USER.getUserModel().findById(userId),
            depManager.FORM_FIELDS.getFormFieldsModel().find(),
            depManager.FORM_PROPS.getFormPropsModel().find(),
            depManager.GROUPS.getGroupsModel().find()
        ]);
        
        const formConfigs = {fields, properties, groups};

        if(!user){
            return responser.success(res, null, "MAIN_E001");
        }
        
        const credentials = generateTokens(userId);
        return responser.success(res, {user, formConfigs, credentials}, "MAIN_S001");

    }catch(error){
        return responser.error(res, error);
    }
}

module.exports = {
    fetchData
}