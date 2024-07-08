import hre from "hardhat"

const address = "0x87151e9B1FC7e22bf0c413d5ef366dD5D5DF01fb";
const amount = 1000;
async function main() {

    const [owner, otherAccount] = await hre.ethers.getSigners();
    console.log("Owner address: ", owner.address, "Other account address: ", otherAccount.address);
    const erc20 = await hre.ethers.getContractAt("ERC20", address);
    // const erc20 = ERC20.attach(address);

    const tx = await erc20.transfer(otherAccount.address, amount);

    console.log("Transaction hash: ", tx.hash);
    const receipt = await tx.wait();
    console.log("Transaction was mined in block: ", receipt?.blockNumber);
    const ownerBalance = await erc20.balanceOf(owner.address);
    const otherAccountBalance = await erc20.balanceOf(otherAccount.address);
    console.log("Owner balance: ", ownerBalance);
    console.log("Other account balance: ", otherAccountBalance);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});