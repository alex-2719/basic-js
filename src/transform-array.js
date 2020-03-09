module.exports = function transform( arr ) {
    if (Array.isArray(arr)){
        let array = new Array();
        arr.forEach(function(item, index){
            if (item === "--discard-next"){
                if ((arr.length -1) > index){
                    arr.splice(index,1);
                }
            } else if (item === "--discard-prev"){
                if (index > 0 ){
                    array.pop();
                }
            } else if (item === "--double-next"){
                if ((arr.length -1) > index){
                    array.push(arr[ index + 1]);
                }
            } else if (item === "--double-prev"){
                if (index > 0 ){
                    array.push(arr[index -1]);
                }
            }else {
                array.push(item);
            }
        });
        return array;
    }
    else {
        throw new Error();
    }
};
