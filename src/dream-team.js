module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)){
    let result =  members.reduce(function(prev,item){
      if (typeof(item) ==='string'){
        let trimStr = item.trim();
        return prev+trimStr[0].toUpperCase();
      }
      else {
        return prev;
      }
    },'');
    return result === '' ? false : result.split('').sort().join('');
  }
  else {
    return false;
  }
};
