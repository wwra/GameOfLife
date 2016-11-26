const util = {
    LIFE_AMOUNT  : 50,
    POINT_SIZE   : 10,
    GenerateArray: function (length) {
        let arr = new Array(length);
        for (let i = 0; i < length; ++i) {
            arr[i] = new Array(length);
        }
        return arr;
    },
    CANVAS:'#GameOfLife',
    LBL_COUNTER  : '#count'
};

export default util;