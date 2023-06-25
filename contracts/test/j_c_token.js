const JCToken = artifacts.require("JCToken");

contract('JCToken', ([creator, bob, cain]) => {
  const NAME = 'JCToken';
  const SYMBOL = 'JCTK';
  const TOTAL_SUPPLY = web3.utils.toWei("2000");
  var contractInstance;

  beforeEach(async function () {
    contractInstance = await JCToken.deployed();
  });

  describe("Validade JCToken", async () => {
    
    it('has a total supply = 2000', async function () {
      let supply = (await contractInstance.totalSupply()).toString();
      assert.equal(supply, TOTAL_SUPPLY.toString());
    });

    it('has a name', async function () {
      assert.equal((await contractInstance.name()), NAME);
    });

    it('has a symbol', async function () {
      assert.equal((await contractInstance.symbol()), SYMBOL);
    });

    it('creator has 1000 tokens', async function () {
      let balance = await contractInstance.balanceOf(creator);
      let balanceWei = web3.utils.fromWei(balance);
      assert.equal(balanceWei, "1000");
    });

    // it('bob has 1000 tokens', async function () {
    //   let balance = await contractInstance.balanceOf(bob);
    //   let balanceWei = web3.utils.fromWei(balance);
    //   assert.equal(balanceWei, "1000");
    // });
  });
});