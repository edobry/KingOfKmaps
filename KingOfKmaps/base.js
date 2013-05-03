function createArray() {
    var dims = [];
    for (var _i = 0; _i < (arguments.length - 0); _i++) {
        dims[_i] = arguments[_i + 0];
    }
    var arr = new Array(dims[0] || 0), i = dims[0];
    if(dims.length > 1) {
        var nextDims = Array.prototype.slice.call(dims, 1);
        while(i--) {
            arr[dims[0] - 1 - i] = createArray.apply(this, nextDims);
        }
    }
    return arr;
}
