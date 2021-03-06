function createArray(...dims: number[]): any[] {
    var arr = new Array(dims[0] || 0),
        i = dims[0];

    if (dims.length > 1) {
        var nextDims = Array.prototype.slice.call(dims, 1);
        while (i--) arr[dims[0] - 1 - i] = createArray.apply(this, nextDims);
    }

    return arr;
}