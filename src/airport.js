'use strict';

class Airport{
  constructor(weather) {
    this._weather = typeof weather !== 'undefined' ? weather : new Weather();
    this._hanger = [];
  }
  planes() {
    return this._hanger;
  };

  clearForLanding(plane) {
    if (this._weather.isStormy()) {
      throw new Error('cannot land due to a storm');
    }
    this._hanger.push(plane);
  };
  
  clearForTakeOff(plane) {
    if (this._weather.isStormy()) {
      throw new Error('cannot take off due to a storm');
    }
    this._hanger = [];
  }

};
