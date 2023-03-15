
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type, location) {
  let total = 0;

  location === 'from payments' && console.log({
    allPayments,
  }, 'from payments');

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {

  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}

function appendDeleteBtn(tr){
  let deleteTd = document.createElement('td');
  deleteTd.innerText = 'X';

  tr.append(deleteTd);
  deleteTd.addEventListener('click', function(){
    removeElement(tr);
  })
 
}

function removeElement(tr){
 tr.remove();
};
