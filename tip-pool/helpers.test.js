describe('tests for helpers with setup and tear down', function(){
    beforeEach(function(){
        billAmtInput.value = '1000';
        tipAmtInput.value = '200';

        submitPaymentInfo();
    });

    it('should sum total bill amount on sumPaymentTotal(type)', function(){
        // expect(sumPaymentTotal('tipAmt')).toEqual(200);
        expect(sumPaymentTotal('billAmt')).toEqual(1000);

        billAmtInput.value = '500';
        tipAmtInput.value = '100';

        submitPaymentInfo();

        expect(sumPaymentTotal('billAmt')).toEqual(1500);
    });

    
    it('should sum total tip amount on sumPaymentTotal(type)', function(){
        expect(sumPaymentTotal('tipAmt')).toEqual(200);
    
        billAmtInput.value = '500';
        tipAmtInput.value = '100';

        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(300);

    });
    
    it('should calculate tip percent based on bill & tip amounts calculateTipPercent(billAmt, tipAmt)', function(){
        expect(calculateTipPercent(1000, 200)).toEqual(20);
        expect(calculateTipPercent(800, 400)).toEqual(50);
        expect(calculateTipPercent(100, 7)).toEqual(7);
    });

    it('should append a row on appendTd(tr, value)', function(){
        let row = document.createElement('tr');
        appendTd(row, '500');

        expect(row.children.length).toEqual(1)
        expect(row.firstChild.textContent).toEqual('500')
    });

    it('should delete a row on appendDeleteBtn(tr)', function(){
        let row = document.createElement('tr');
        appendDeleteBtn(row);

        expect(row.children.length).toEqual(1)
        expect(row.firstChild.textContent).toEqual('X')
    });


    afterEach(function(){
        billAmtInput.value = "";
        tipAmtInput.value = "";
        allPayments = {};
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';

    
    });
})

