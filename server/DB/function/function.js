function extractValues(obj) {
    const values = [];
    for (const key in obj) {
        if (key.startsWith("ingredients")) {
            obj[key] !== "" && values.push(obj[key]);
            delete obj[key];
        }
    }
    return values;
}

function checkFields(obj, fields) {
    for (const field of fields) {
        if (obj[field] === "") {
            throw new Error(`Field '${field}' does not exist in object`);
        }
    }
}

module.exports={extractValues,checkFields}