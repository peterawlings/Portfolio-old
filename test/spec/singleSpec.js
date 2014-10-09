describe('Single instance module', function() {
    beforeEach(function() {
        setFixtures('<div id="single"></div>');
    });

    it('should update the text of #single', function() {
        var el = $('#single');
        rm.single.init();
        expect(el).toHaveText('Initialised single module');
    });

    // not passing in a function will flag it in the results as unimplemented
    it('will do more cool stuff in the future');
});