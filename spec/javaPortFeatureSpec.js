'use strict';

describe('Feature:', function() {
  var airport;
  var plane;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  describe('under normal conditions', function() {
    beforeEach(function() {
      spyOn(Math, 'random').and.returnValue(0);
    });

      it('planes can be told to land at an airport', function() {
        plane.land(airport);
        expect(airport.planes()).toContain(plane);
      });

      // As an air traffic controller
      // To get passengers to a destination
      // I want to instruct a plane to take off from
      //   an airport and confirm that it is no longer in the airport

      it('planes can be told to take off from an airport and confirm it has left', function() {
        plane.land(airport);
        plane.takeoff(airport);
        expect(airport.planes()).not.toContain(plane);
      });
  });

  // As an air traffic controller
  // To ensure safety
  // I want to prevent takeoff when weather is stormy

  it('stops planes taking off when the weather is stormy', function () {
    plane.land(airport);
    spyOn(Math, 'random').and.returnValue(1);
    expect(function() { plane.takeoff(airport)}).toThrowError('cannot take off due to a storm');
    expect(airport.planes()).toContain(plane);
  });

  // As an air traffic controller
  // To ensure safety
  // I want to prevent landing when weather is stormy

  it('stops planes landing when the weather is stormy', function () {
    spyOn(Math, 'random').and.returnValue(1);
    expect(function() { plane.land(airport)}).toThrowError('cannot land due to a storm');
    expect(airport.planes()).not.toContain(plane);
  });
});
