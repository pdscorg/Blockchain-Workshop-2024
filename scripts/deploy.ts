import hre from "hardhat";

const _name = 'PDSCoin';
const _symbol = 'PDSC';
const _decimals = 2;
const _totalSupply = 5000;

async function deploy(){
    const Erc20 = await hre.ethers.getContractFactory("ERC20");
    const erc = await Erc20.deploy(_name, _symbol, _decimals, _totalSupply);
    const tx = erc.deploymentTransaction();
    const receipt = await tx?.wait();
    console.log(receipt);
    const address = erc.getAddress();
    return address
}

deploy().then((a)=>{
    console.log(a);
})
