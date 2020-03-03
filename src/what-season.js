module.exports = function getSeason( date ) {
  let seasons = ["winter", "spring", "summer", "autumn"]
  if (typeof(date) === "object" && date instanceof Date){
      let currentDate = new Date(
        date.getFullYear(), date.getMonth(), date.getDate(),
        date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()
      );
      if (currentDate.toString() === date.toString()){
        let mounth = (date.getMonth()+1);
        return Math.trunc(mounth / 3) === 4 ? seasons[0] : seasons[Math.trunc(mounth / 3)] ;
      }
      else {
        throw new Error();
      }
  }
  else {
    if (typeof(date) === 'undefined'){
      return 'Unable to determine the time of year!';
    }
    throw new Error();
  }
};


  
