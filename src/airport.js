'use strict';

class Airport{
  constructor() {
    this._hanger = [];
  }
  planes() {
    return this._hanger;
  };

  clearForLanding(plane) {
    this._hanger.push(plane);
  };
  clearForTakeOff(plane) {
    if (this.isStormy()) {
      throw new Error('cannot take off due to a storm');
    }
    this._hanger = [];
  }

  isStormy() {
    return false;
  };
};
