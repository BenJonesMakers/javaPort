'use strict';

describe('Weather', function(){
  var weather;

  beforeEach(function(){
    weather = new Weather();
  });

  it('sometimes gives stormy weather', function(){
    spyOn(Math, 'random').and.returnValue(1);
    expect(weather.isStormy()).toBeTruthy();
  });

  it('mostly gives clear weather', function(){
    spyOn(Math, 'random').and.returnValue(0);
    expect(weather.isStormy()).toBeFalsy();
  });
});
