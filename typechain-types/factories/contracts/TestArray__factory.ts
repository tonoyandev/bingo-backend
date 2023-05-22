/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { TestArray, TestArrayInterface } from "../../contracts/TestArray";

const _abi = [
  {
    anonymous: false,
    inputs: [],
    name: "Winners",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "playerAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "start",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "end",
            type: "uint256",
          },
        ],
        internalType: "struct TestArray.Player[]",
        name: "playersData",
        type: "tuple[]",
      },
    ],
    name: "addPlayer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_randomWords",
        type: "uint256[]",
      },
    ],
    name: "receivePlayersAndPickWinner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526001805463ffffffff19168117905534801561001f57600080fd5b506105e68061002f6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80633a339cc01461003b57806360f2eec414610050575b600080fd5b61004e6100493660046103c6565b610063565b005b61004e61005e36600461043b565b610153565b6000805260026020527fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077b54620f424010156100d75760405162461bcd60e51b815260206004820152601060248201526f08adcdeeaced040d2e640cadcdeeaced60831b604482015260640160405180910390fd5b60005b8181101561014e5760015463ffffffff16600090815260026020526040902083838381811061010b5761010b61049e565b83546001810185556000948552602090942060609091029290920192600302909101905061013982826104b4565b505080806101469061050a565b9150506100da565b505050565b60005b63ffffffff81168211156101f9576000620f424084848463ffffffff168181106101825761018261049e565b905060200201356101939190610539565b61019e90600161054d565b905060006101e2620f424086868663ffffffff168181106101c1576101c161049e565b905060200201356101d29190610539565b6101dd90600161054d565b610227565b9050505080806101f190610566565b915050610156565b506040517f9951a417c46ecc9ab5bfb7320e1246709a6308208a3cb3c219dc369b923fdef590600090a15050565b6001805463ffffffff1660009081526002602052604081205490918291829161024f91610589565b90505b8082116103bd5760006002610267838561054d565b61027290600161054d565b61027c919061059c565b60015463ffffffff166000908152600260205260409020805491925090829081106102a9576102a961049e565b9060005260206000209060030201600101548510158015610304575060015463ffffffff1660009081526002602052604090208054829081106102ee576102ee61049e565b9060005260206000209060030201600201548511155b156103555760015463ffffffff1660009081526002602052604090208054829081106103325761033261049e565b60009182526020909120600390910201546001600160a01b031695945050505050565b60015463ffffffff16600090815260026020526040902080548290811061037e5761037e61049e565b9060005260206000209060030201600101548510156103a9576103a2600182610589565b91506103b7565b6103b481600161054d565b92505b50610252565b50309392505050565b600080602083850312156103d957600080fd5b823567ffffffffffffffff808211156103f157600080fd5b818501915085601f83011261040557600080fd5b81358181111561041457600080fd5b86602060608302850101111561042957600080fd5b60209290920196919550909350505050565b6000806020838503121561044e57600080fd5b823567ffffffffffffffff8082111561046657600080fd5b818501915085601f83011261047a57600080fd5b81358181111561048957600080fd5b8660208260051b850101111561042957600080fd5b634e487b7160e01b600052603260045260246000fd5b81356001600160a01b0381168082146104cc57600080fd5b82546001600160a01b0319161782555060208201356001820155604090910135600290910155565b634e487b7160e01b600052601160045260246000fd5b60006001820161051c5761051c6104f4565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008261054857610548610523565b500690565b80820180821115610560576105606104f4565b92915050565b600063ffffffff80831681810361057f5761057f6104f4565b6001019392505050565b81810381811115610560576105606104f4565b6000826105ab576105ab610523565b50049056fea2646970667358221220f389fa50b33b9f54ae0e13d7056e1a0ae23f7473ed3f3adbcf07c6abfa81662364736f6c63430008130033";

type TestArrayConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestArrayConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestArray__factory extends ContractFactory {
  constructor(...args: TestArrayConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestArray> {
    return super.deploy(overrides || {}) as Promise<TestArray>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestArray {
    return super.attach(address) as TestArray;
  }
  override connect(signer: Signer): TestArray__factory {
    return super.connect(signer) as TestArray__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestArrayInterface {
    return new utils.Interface(_abi) as TestArrayInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestArray {
    return new Contract(address, _abi, signerOrProvider) as TestArray;
  }
}
