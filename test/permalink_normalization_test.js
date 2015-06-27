'use strict';

var expect = require('chai').expect

describe('permalink normalize', function() {
    var Plugin = {};
    Plugin.config = {};
    Plugin.config.permalink_normalization = {};
    Plugin.normalize = require('../lib/permalink_normalization');
    var decomposition = 'パピプペポばびぶべぼ';
    var composition = 'パピプペポばびぶべぼ';

    describe('filter permalink_normalization', function() {
        context('when type is nfc', function() {
            beforeEach(function(done) {
                Plugin.config.permalink_normalization.type = 'nfc';
                done();
            });
            it('normalize permalink', function() {
                expect(Plugin.normalize(composition)).to.equal(decomposition);
            });
        });

        context('when type is nfd', function() {
            beforeEach(function(done) {
                Plugin.config.permalink_normalization.type = 'nfd';
                done();
            });
            it('normalize permalink', function() {
                expect(Plugin.normalize(decomposition)).to.equal(composition);
            });
        });

        context('when type is nfkc', function() {
            beforeEach(function(done) {
                Plugin.config.permalink_normalization.type = 'nfkc';
                done();
            });
            it('normalize permalink', function() {
                expect(Plugin.normalize(composition)).to.equal(decomposition);
            });
        });

        context('when type is nfkd', function() {
            beforeEach(function(done) {
                Plugin.config.permalink_normalization.type = 'nfkd';
                done();
            });
            it('normalize permalink', function() {
                expect(Plugin.normalize(decomposition)).to.equal(composition);
            });
        });
    });

});