// Test rhd-search-result component

describe('Search Result', function() {
    var wc,
        result = { fields: { sys_title: ['Test Title'] } };

    beforeEach(function() {
        document.body.insertBefore(document.createElement('rhdp-search-result'), document.body.firstChild);
        wc = document.body.firstChild;
    });

    afterEach(function() {
        document.body.removeChild(document.body.firstChild);
    })

    it('should display a title', function() {
        wc.set('result', result);
        expect(wc.title).toEqual('Test Title');
    });
});