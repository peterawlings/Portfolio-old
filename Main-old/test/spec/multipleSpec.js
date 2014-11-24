describe('Multiple instance module', function() {
    var $m1, $m2;

    beforeEach(function() {
        setFixtures('<div id="multiple1">\
            <span class="count"></span>\
            <button class="updateThis">Update this</button>\
            <button class="updateAll">Update all</button>\
        </div>\
        <div id="multiple2">\
            <span class="count"></span>\
            <button class="updateThis">Update this</button>\
            <button class="updateAll">Update all</button>\
        </div>');
        $m1 = $('#multiple1');
        $m2 = $('#multiple2');
    });
    afterEach(function() {
        $m1 = undefined;
        $m2 = undefined;
    });

    it('should only initialise on target element', function() {
        rm.multiple.create($m1, 5);
        expect($m1).toContainText('Count');
        expect($m2).not.toContainText('Count');
    });

    it('should increase count by 1 when increment function called', function() {
        var m1 = rm.multiple.create($m1, 5);
        m1.increment();
        expect(m1.getCount()).toEqual(6);
    });

    it('should increase count by 1 when "Update this" clicked', function() {
        var m1 = rm.multiple.create($m1, 5);
        $('.updateThis', $m1).trigger('click');
        expect(m1.getCount()).toEqual(6);
    });

    it('should only update the current instance when "Update this" clicked', function() {
        var m1 = rm.multiple.create($m1, 5);
        var m2 = rm.multiple.create($m2, 7);
        $('.updateThis', $m1).trigger('click');
        expect(m1.getCount()).toEqual(6);
        expect(m2.getCount()).toEqual(7);
    });

    it('should keep visible count in sync with internal count', function() {
        var m1 = rm.multiple.create($m1, 5);
        m1.increment();
        $('.updateThis', $m1).trigger('click');
        expect(m1.getCount()).toEqual(7);
        expect($m1).toContainText('Count: 7');
    });

    it('should respond to "updateAll" event', function() {
        var m1 = rm.multiple.create($m1, 5);
        $.publish('updateAll');
        expect(m1.getCount()).toEqual(6);
    });

    it('should publish "updateAll" when "Update all" clicked', function() {
        rm.multiple.create($m1, 5);
        spyOn($, 'publish');
        $('.updateAll', $m1).trigger('click');
        expect($.publish).toHaveBeenCalledWith('updateAll');
    });

    it('should update all modules when "Update all" clicked', function() {
        var m1 = rm.multiple.create($m1, 5);
        var m2 = rm.multiple.create($m2, 7);
        $('.updateAll', $m1).trigger('click');
        $('.updateAll', $m2).trigger('click');
        expect(m1.getCount()).toEqual(7);
        expect(m2.getCount()).toEqual(9);
    });
});