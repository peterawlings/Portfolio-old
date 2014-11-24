describe('Utilities', function() {
    describe('reverseString', function() {
        it('should return undefined if the input is undefined', function() {
            expect(rm.utilities.reverseString(undefined)).not.toBeDefined();
            expect(rm.utilities.reverseString(null)).not.toBeDefined();
        });
        it ('should return undefined if the input is not a string', function() {
            expect(rm.utilities.reverseString(5)).not.toBeDefined();
            expect(rm.utilities.reverseString([1, 2, 3])).not.toBeDefined();
            expect(rm.utilities.reverseString({test: 'test'})).not.toBeDefined();

        });
        it('should be able to reverse a string', function() {
            expect(rm.utilities.reverseString('test')).toEqual('tset');
            expect(rm.utilities.reverseString('This is a test')).toEqual('tset a si sihT');
        });
    });
});