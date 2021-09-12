// w TDD pierwsze piszemy test
const phoneNumber = require('./custom.function');

describe("Validating phone number", () => {
    //fixtures
    const validNumber = {
        phone: "500300200",
        directional: "+48"
    }
    const invalidNumber = {
        phone: "abccddss"
    }
    const invalidNumberLength = {
        phone: "500300",
        directional: "+48"
    }
    const invalidNumberObject = 'aaa'

    // tests keyword is it or test
    it('should return true if valid number with directional number is provided', () => {
        expect(phoneNumber.valid(validNumber)).toBe(true);
    });
    it('should return false if phone dosn\'t have directional number', ()=> {
        expect(phoneNumber.valid(invalidNumber)).toBe(false);
    });
    it('should return false if phone Number is not digit', () => {
        expect(phoneNumber.valid(invalidNumber)).toBe(false);
    });
    it('should return false on invalid length', () => {
        expect(phoneNumber.valid(invalidNumberLength)).toBe(false);
    });
    it('should return false if phoneNumber is not an object', () => {
        expect(phoneNumber.valid(invalidNumberObject)).toBe(false);
    });
})