import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const _name = 'PDSCoin';
const _symbol = 'PDSC';
const _decimals = 2;
const _totalSupply = 5000;


const ERC20Module = buildModule("ERC20Module", (m) => {
    const name = m.getParameter("name", _name);
    const symbol = m.getParameter("symbol", _symbol);
    const decimals = m.getParameter("decimals", _decimals);
    const totalSupply = m.getParameter("totalSupply", _totalSupply)

    const erc20 = m.contract("ERC20", [name, symbol, decimals, totalSupply]);

    return { erc20 };
});

export default ERC20Module;
