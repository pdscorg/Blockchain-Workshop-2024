import hre from "hardhat"

const address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
async function main() {

    const [owner, otherAccount] = await hre.ethers.getSigners();
    const ERC20 = await hre.ethers.getContractFactory("ERC20");
    const erc20 = ERC20.attach(address);
    const amount = 1000;
    const tx = await erc20.getFunction("transfer")(otherAccount.address, amount);

    console.log("Transaction hash: ", tx.hash);
    const receipt = await tx.wait();
    console.log("Transaction was mined in block: ", receipt.blockNumber);
    const ownerBalance = await erc20.getFunction("balanceOf")(owner.address);
    const otherAccountBalance = await erc20.getFunction("balanceOf")(otherAccount.address);
    console.log("Owner balance: ", ownerBalance);
    console.log("Other account balance: ", otherAccountBalance);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});