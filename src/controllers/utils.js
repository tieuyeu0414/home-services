function pagination(query, defaultSize){
    let limit = defaultSize;
    let page = 0 + (Number(query.page ? query.page : 1) - 1) * limit;
    return {limit, page};
}

module.exports = {
    pagination
};