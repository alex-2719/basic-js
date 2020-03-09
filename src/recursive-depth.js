module.exports = class DepthCalculator {
    calculateDepth( arr) {
        let self = this;
        if (Array.isArray(arr)){
            return arr.reduce(function (prev, item){
                let calc = self.calculateDepth(item);
                return (prev > calc) ? prev : (1 + calc);
            },1);
        }
        else {
            return 0;
        }
    }
};
