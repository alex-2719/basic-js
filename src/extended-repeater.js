let checkStr = (strValue, separator) =>{return typeof(strValue) !== 'undefined' ? strValue : separator};

module.exports = function repeater( str, options ) {
    str = "" + str;
    let repeatTimes = options.repeatTimes || 0;
    let separator = "" + checkStr(options.separator, '+');
    let additionRepeatTimes = options.additionRepeatTimes || 0;
    let additionSeparator = "" + checkStr(options.additionSeparator, "|");
    let addition = "" + checkStr(options.addition,"");
    let result = [];
    for (i = 0; i < repeatTimes ; i++){
        let additionalArr = [];
        for(j = 0 ; j < additionRepeatTimes ; j++){
            additionalArr.push(addition);
        }
        if (additionalArr.length == 0 && addition != ""){
            additionalArr.push(addition);
        }

        result.push (str + additionalArr.join(additionSeparator));
    }
    return result.length != 0 ? result.join(separator) : str + (addition != "" ? addition : "");

};
