
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount:1000,rate:2.5,years:3})).toEqual('28.86');
  expect(calculateMonthlyPayment({amount:5000,rate:5.5,years:8})).toEqual('64.50');
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount:1000,rate:2.5,years:3})).toMatch(/^\d+\.\d\d$/);
  expect(calculateMonthlyPayment({amount:7000,rate:8.5,years:7})).toMatch(/^\d+\.\d\d$/);
});

/// etc
