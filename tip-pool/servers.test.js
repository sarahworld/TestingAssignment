describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should update the server table by adding a row on updateServerTable()', function (){
    submitServerInfo();
    updateServerTable();

    let curRow = document.querySelectorAll("#serverTable tbody tr td");
    expect(curRow.length).toEqual(3);
    expect(curRow[0].textContent).toEqual('Alice');
    expect(curRow[1].textContent).toEqual('$0.00');
    expect(curRow[2].textContent).toEqual('X');
  })
  

  afterEach(function() {
    // teardown logic
  serverId = 0;
  serverTbody.innerHTML = '';
  allServers = {};
   
  });
});
