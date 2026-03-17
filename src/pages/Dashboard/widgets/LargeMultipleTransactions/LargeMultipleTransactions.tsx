import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'components/Button';
import { signAndSendTransactions } from 'helpers';
import { Address, Transaction, useGetAccount, useGetNetworkConfig } from 'lib';
import { ItemsIdentifiersEnum } from 'pages/Dashboard/dashboard.types';

export const LargeMultipleTransactions = () => {
  const { address } = useGetAccount();
  const { network } = useGetNetworkConfig();

  const sendLargeMultipleTransactions = async () => {
    const firstTransaction = new Transaction({
      value: BigInt('1000000000000000'),
      data: Buffer.from('first'),
      sender: new Address(address),
      receiver: new Address(address),
      chainID: network.chainId,
      gasLimit: BigInt('60000000')
    });
    const secondTransaction = new Transaction({
      value: BigInt('2000000000000000'),
      data: Buffer.from('second'),
      sender: new Address(address),
      receiver: new Address(address),
      chainID: network.chainId,
      gasLimit: BigInt('60000000')
    });
    const thirdTransaction = new Transaction({
      value: BigInt('3000000000000000'),
      data: Buffer.from('third'),
      sender: new Address(address),
      receiver: new Address(address),
      chainID: network.chainId,
      gasLimit: BigInt('60000000')
    });
    const fourthTransaction = new Transaction({
      value: BigInt('4000000000000000'),
      data: Buffer.from('fourth'),
      sender: new Address(address),
      receiver: new Address(address),
      chainID: network.chainId,
      gasLimit: BigInt('60000000')
    });
    const fifthTransaction = new Transaction({
      value: BigInt('500000000000000'),
      data: Buffer.from('fifth'),
      sender: new Address(address),
      receiver: new Address(address),
      chainID: network.chainId,
      gasLimit: BigInt('60000000')
    });
    const sixthTransaction = new Transaction({
      value: BigInt('60000000000000'),
      data: Buffer.from('sixth'),
      sender: new Address(address),
      receiver: new Address(address),
      chainID: network.chainId,
      gasLimit: BigInt('60000000')
    });
    const seventhTransaction = new Transaction({
      value: BigInt('7000000000000'),
      data: Buffer.from('seventh'),
      sender: new Address(address),
      receiver: new Address(address),
      chainID: network.chainId,
      gasLimit: BigInt('60000000')
    });
    const eighthTransaction = new Transaction({
      value: BigInt('80000000000000'),
      data: Buffer.from('eighth'),
      sender: new Address(address),
      receiver: new Address(address),
      chainID: network.chainId,
      gasLimit: BigInt('60000000')
    });
    const ninthTransaction = new Transaction({
      value: BigInt('9000000000000'),
      data: Buffer.from('ninth'),
      sender: new Address(address),
      receiver: new Address(address),
      chainID: network.chainId,
      gasLimit: BigInt('60000000')
    });
    const tenthTransaction = new Transaction({
      value: BigInt('1000000000000'),
      data: Buffer.from('tenth'),
      sender: new Address(address),
      receiver: new Address(address),
      chainID: network.chainId,
      gasLimit: BigInt('60000000')
    });
    const eleventhTransaction = new Transaction({
      value: BigInt('1100000000000'),
      data: Buffer.from('eleventh'),
      sender: new Address(address),
      receiver: new Address(address),
      chainID: network.chainId,
      gasLimit: BigInt('60000000')
    });
    const twelfthTransaction = new Transaction({
      value: BigInt('12000000000000'),
      data: Buffer.from('twelfth'),
      sender: new Address(address),
      receiver: new Address(address),
      chainID: network.chainId,
      gasLimit: BigInt('60000000')
    });
    const thirteenthTransaction = new Transaction({
      value: BigInt('1300000000000'),
      data: Buffer.from('lucky thirteenth'),
      sender: new Address(address),
      receiver: new Address(address),
      chainID: network.chainId,
      gasLimit: BigInt('60000000')
    });

    await signAndSendTransactions({
      transactions: [
        firstTransaction,
        secondTransaction,
        thirdTransaction,
        fourthTransaction,
        fifthTransaction,
        sixthTransaction,
        seventhTransaction,
        eighthTransaction,
        ninthTransaction,
        tenthTransaction,
        eleventhTransaction,
        twelfthTransaction,
        thirteenthTransaction
      ],
      transactionsDisplayInfo: {
        processingMessage: 'Processing(Large) Multiple transactions',
        errorMessage: 'An error has occured during(Large) Multiple tx',
        successMessage: '(Large) Multiple transactions successful'
      }
    });
  };

  return (
    <div
      className='flex flex-col gap-6'
      id={ItemsIdentifiersEnum.largeMultipleTransaction}
    >
      <div className='flex flex-col gap-2'>
        <div className='flex justify-start gap-2'>
          <Button
            onClick={sendLargeMultipleTransactions}
            className='inline-block rounded-lg px-3 py-2 text-center hover:no-underline my-0 bg-blue-600 text-white hover:bg-blue-700 mr-0 disabled:bg-gray-200 disabled:text-black disabled:cursor-not-allowed'
          >
            <FontAwesomeIcon icon={faArrowUp} className='mr-1' />
            Send (Large) Mulltiple Transactions
          </Button>
        </div>
      </div>
    </div>
  );
};
