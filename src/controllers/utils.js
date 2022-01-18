function pagination(query, defaultSize){
    let limit = defaultSize;
    let offset = 0 + (Number(query.offset ? query.offset : 1) - 1) * limit;
    return {limit, offset};
}

module.exports = {
    pagination
};