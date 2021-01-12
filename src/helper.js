function helper(id) {
    id = id.toString();
    if(id.length >= 3) {
        return id;
    }
    const x = '0'.repeat(3 - id.length) + id;
    return x;
}

export default helper;