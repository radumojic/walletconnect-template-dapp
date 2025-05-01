import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'components/Button';
import { refreshAccount, sendTransactions } from 'lib';
import { useGetAccountInfo } from 'lib';

export const MultipleTransactions = () => {
  const { address } = useGetAccountInfo();

  const sendMultipleTransactions = async () => {
    const firstTransaction = {
      value: '10000000000000000',
      data: 'first',
      receiver: address,
      gasLimit: '60000000'
    };
    const secondTransaction = {
      value: '20000000000000000',
      data: 'second',
      receiver: address,
      gasLimit: '60000000'
    };
    const thirdTransaction = {
      value: '30000000000000000',
      data: 'third',
      receiver: address,
      gasLimit: '60000000'
    };
    await refreshAccount();
    await sendTransactions({
      transactions: [firstTransaction, secondTransaction, thirdTransaction],
      transactionsDisplayInfo: {
        processingMessage: 'Processing Multiple transactions',
        errorMessage: 'An error has occured during Multiple tx',
        successMessage: 'Multiple transactions successful'
      },
      redirectAfterSign: false
    });
  };

  return (
    <div className='flex flex-col gap-6'>
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
