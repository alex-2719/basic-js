module.exports = function countCats( matrix ) {
  if (Array.isArray(matrix)){
    if (matrix.length !=0){
      return matrix.reduce(function(prev, item){
          if (Array.isArray(item)){
            return  prev + countCats(item);
          }
          else {
            return (item === '^^' && item.length === 2) ? prev+1 : prev;
          }
        },0);
    }
    else {
      return 0;
    } 
  }
  else {
    return 0;
  }
};
