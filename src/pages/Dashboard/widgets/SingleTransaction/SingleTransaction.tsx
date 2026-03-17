import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'components/Button';
import { signAndSendTransactions } from 'helpers';
import { Address, Transaction, useGetAccount, useGetNetworkConfig } from 'lib';
import { ItemsIdentifiersEnum } from 'pages/Dashboard/dashboard.types';

export const SingleTransaction = () => {
  const { address } = useGetAccount();
  const { network } = useGetNetworkConfig();

  const sendSingleTransaction = async () => {
    const singleSelfTransaction = new Transaction({
      value: BigInt('100000000000000000'),
      data: Buffer.from('one'),
      sender: new Address(address),
      receiver: new Address(address),
      chainID: network.chainId,
      gasLimit: BigInt('60000000')
    });

    await signAndSendTransactions({
      transactions: [singleSelfTransaction],
      transactionsDisplayInfo: {
        processingMessage: 'Processing Single Tx',
        errorMessage: 'An error has occured during Single Tx',
        successMessage: 'Single Tx successful'
      }
    });
  };

  return (
    <div
      className='flex flex-col gap-6'
      id={ItemsIdentifiersEnum.singleTransaction}
    >
      <div className='flex flex-col gap-2'>
        <div className='flex justify-start gap-2'>
          <Button
            onClick={sendSingleTransaction}
            className='inline-block rounded-lg px-3 py-2 text-center hover:no-underline my-0 bg-blue-600 text-white hover:bg-blue-700 mr-0 disabled:bg-gray-200 disabled:text-black disabled:cursor-not-allowed'
          >
            <FontAwesomeIcon icon={faArrowUp} className='mr-1' />
            Send Single Transaction
          </Button>
        </div>
      </div>
    </div>
  );
};
