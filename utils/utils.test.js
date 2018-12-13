const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

  describe('#add', () => {
    it('Should add two numbers', () => {
      let res = utils.add(9, 2);

      expect(res).toBe(11).toBeA('number');
      // if(res !== 11) {
      //   throw new Error(`Expected 11, but got ${res}`);
      // }
    });

    it('Should async add two numbers', (done) => {
      utils.asyncAdd(7, 4, (sum) => {
        expect(sum).toBe(11).toBeA('number');
        done();
      });
    });
  });

  describe('#square', () => {
    it('Should square a number', () => {
      let res = utils.square(6);

      expect(res).toBe(36).toBeA('number');
    });

    it('Should async square a number', (done) => {
      utils.asyncSquare(3, (square) => {
        expect(square).toBe(9).toBeA('number');
        done();
      });
    });
  });

  describe('#names', () => {
    it('Should verify first and last names are set', () => {
      let user = {location: 'New York', age: 36};
      let res = utils.setName(user, 'Drin Kaziu');

      expect(res).toInclude({
        firstName: 'Drin',
        lastName: 'Kaziu'
      }).toBeA('object');
    });
  });
});
