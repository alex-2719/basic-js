const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  if (typeof sampleActivity !== 'string' || 
      sampleActivity === undefined ||
       isNaN(Number.parseFloat(sampleActivity)) ||
        (Number.parseFloat(sampleActivity) <= 0)){
    return false;
  }else {
    let t = Math.log(MODERN_ACTIVITY/(Number.parseFloat(sampleActivity))) / (0.693 / HALF_LIFE_PERIOD);
    return Math.ceil(t) > 0 ? Math.ceil(t) : false;
  }
};