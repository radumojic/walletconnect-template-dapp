import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'components/Button';
import { refreshAccount, sendTransactions } from 'helpers';
import { useGetAccountInfo } from 'hooks';

export const SingleTransaction = () => {
  const { address } = useGetAccountInfo();

  const sendSingleTransaction = async () => {
    const singleSelfTransaction = {
      value: '100000000000000000',
      data: 'one',
      receiver: address,
      gasLimit: '60000000'
    };
    await refreshAccount();
    await sendTransactions({
      transactions: singleSelfTransaction,
      transactionsDisplayInfo: {
        processingMessage: 'Processing Single Tx',
        errorMessage: 'An error has occured during Single Tx',
        successMessage: 'Single Tx successful'
      },
      redirectAfterSign: false
    });
  };

  return (
    <div className='flex flex-col gap-6'>
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
