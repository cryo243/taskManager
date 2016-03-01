(function() {
	'use strict';

	describe('user service', function() {
		var user;
		var $httpBackend;
		var $log;
		var endpoint;

		beforeEach(module('tangent'));
		beforeEach(inject(function(_user_, _$httpBackend_, _$log_, _endpoint_) {
			user = _user_;
			$httpBackend = _$httpBackend_;
			$log = _$log_;
			endpoint = _endpoint_;
		}));

		it('should be registered', function() {
			expect(user).not.toEqual(null);
		});

		describe('authenticate function', function() {
			var credentials = null;
			beforeEach(function() {
				credentials = {
					username: 'user', password: 'pass'
				};
			});
			it('should have an  authenticate method defined', function() {
				expect(user.authenticate).not.toEqual(null);
			});

			it('should return data', function() {
				var data = null;
				$httpBackend.when('POST', endpoint.userEndpoint.host + endpoint.userEndpoint.url).respond(200, [
					{token: 'value'}
				]);

				user.authenticate(credentials).then(function(fetchedData) {
					data = fetchedData;
				});
				$httpBackend.flush();
				expect(data).toEqual(jasmine.any(Array));
				expect(data.length === 1).toBeTruthy();
				expect(data[0]).toEqual(jasmine.any(Object));
			});

			it('should log an error', function() {
				$httpBackend.when('POST', endpoint.userEndpoint.host + endpoint.userEndpoint.url).respond(500);
				user.authenticate(credentials);
				$httpBackend.flush();
				expect($log.error.logs).toEqual(jasmine.stringMatching('XHR Failed to get stuff'));
			});
		});
	});
})();
