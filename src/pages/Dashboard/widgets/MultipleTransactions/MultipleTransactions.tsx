import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'components/Button';
import { signAndSendTransactions } from 'helpers';
import { Address, Transaction, useGetAccount, useGetNetworkConfig } from 'lib';
import { ItemsIdentifiersEnum } from 'pages/Dashboard/dashboard.types';

export const MultipleTransactions = () => {
  const { address } = useGetAccount();
  const { network } = useGetNetworkConfig();

  const sendMultipleTransactions = async () => {
    const firstTransaction = new Transaction({
      value: BigInt('10000000000000000'),
      data: Buffer.from('first'),
      sender: new Address(address),
      receiver: new Address(address),
      chainID: network.chainId,
      gasLimit: BigInt('60000000')
    });
    const secondTransaction = new Transaction({
      value: BigInt('20000000000000000'),
      data: Buffer.from('second'),
      sender: new Address(address),
      receiver: new Address(address),
      chainID: network.chainId,
      gasLimit: BigInt('60000000')
    });
    const thirdTransaction = new Transaction({
      value: BigInt('30000000000000000'),
      data: Buffer.from('third'),
      sender: new Address(address),
      receiver: new Address(address),
      chainID: network.chainId,
      gasLimit: BigInt('60000000')
    });
    await signAndSendTransactions({
      transactions: [firstTransaction, secondTransaction, thirdTransaction],
      transactionsDisplayInfo: {
        processingMessage: 'Processing Multiple transactions',
        errorMessage: 'An error has occured during Multiple tx',
        successMessage: 'Multiple transactions successful'
      }
    });
  };

  return (
    <div
      className='flex flex-col gap-6'
      id={ItemsIdentifiersEnum.multipleTransactions}
    >
      <div className='flex flex-col gap-2'>
        <div className='flex justify-start gap-2'>
          <Button
            onClick={sendMultipleTransactions}
            className='inline-block rounded-lg px-3 py-2 text-center hover:no-underline my-0 bg-blue-600 text-white hover:bg-blue-700 mr-0 disabled:bg-gray-200 disabled:text-black disabled:cursor-not-allowed'
          >
            <FontAwesomeIcon icon={faArrowUp} className='mr-1' />
            Send Mulltiple Transactions
          </Button>
        </div>
      </div>
    </div>
  );
};
