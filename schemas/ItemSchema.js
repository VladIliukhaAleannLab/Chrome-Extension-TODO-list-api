const ItemSchema = {
    text: String,
    id: String,
    createDate: Date,
    updateDate: Date,
    info: String,
    type: String,
    user: String,
    isAdminCreate: Boolean
};

module.exports = ItemSchema;