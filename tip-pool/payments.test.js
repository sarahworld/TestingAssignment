describe("Payments test with test setup and tear down", function() {
    beforeEach(function() {
        billAmtInput.value = 1000;
        tipAmtInput.value = 200;
    });

    
    afterEach(function() {
        billAmtInput.value = 0;
        tipAmtInput.value = 0;
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        // allPayments = {};
    });

    it('should add payment on submitPaymentInfo()', function() {
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('1000');
        expect(allPayments['payment1'].tipAmt).toEqual('200');
        // expect(allPayments['payment1'].tipPercent).toEqual(20);
    })

    it('should append in payment table on appendPaymentTable()', function() {

        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;

        appendPaymentTable(curPayment);
        const curPaymentRow = document.querySelectorAll("#paymentTable tbody tr td");

        expect(curPaymentRow.length).toEqual(4);
        expect(curPaymentRow[0].innerText).toBe('$1000');
        expect(curPaymentRow[1].innerText).toBe('$200');
        expect(curPaymentRow[2].innerText).toBe('20%');
        expect(curPaymentRow[3].innerText).toBe('X');
    });
    
    it('should add values in current payment table on createCurPayment()', function(){
        
        expect(createCurPayment()).toEqual({billAmt:'1000',tipAmt:'200',tipPercent:20});

    })

    

    it('should update Summary on updateSummary()', function(){
        //TODO:
        console.log({
            billAmt:billAmtInput.value,
            tipAmt:tipAmtInput.value,
        }, 'from test');
        updateSummary('from test');
        const curSummaryRow = document.querySelectorAll("#summaryTable tbody tr td");
        console.log({
            curSummaryRow,
        }, 'from test');
        expect(curSummaryRow.length).toEqual(3)
        expect(curSummaryRow[0].innerText).toBe('$1000');
        expect(curSummaryRow[1].innerText).toBe('$200');
        expect(curSummaryRow[2].innerText).toBe('20%');

    });

});

