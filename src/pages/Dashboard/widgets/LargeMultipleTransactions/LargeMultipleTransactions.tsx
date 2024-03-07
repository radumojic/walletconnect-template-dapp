import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'components/Button';
import { refreshAccount, sendTransactions } from 'helpers';
import { useGetAccountInfo } from 'hooks';

export const LargeMultipleTransactions = () => {
  const { address } = useGetAccountInfo();

  const sendLargeMultipleTransactions = async () => {
    const firstTransaction = {
      value: '1000000000000000',
      data: 'first',
      receiver: address,
      gasLimit: '60000000'
    };
    const secondTransaction = {
      value: '2000000000000000',
      data: 'second',
      receiver: address,
      gasLimit: '60000000'
    };
    const thirdTransaction = {
      value: '3000000000000000',
      data: 'third',
      receiver: address,
      gasLimit: '60000000'
    };
    const fourthTransaction = {
      value: '4000000000000000',
      data: 'fourth',
      receiver: address,
      gasLimit: '60000000'
    };
    const fifthTransaction = {
      value: '500000000000000',
      data: 'fifth',
      receiver: address,
      gasLimit: '60000000'
    };
    const sixthTransaction = {
      value: '60000000000000',
      data: 'sixth',
      receiver: address,
      gasLimit: '60000000'
    };
    const seventhTransaction = {
      value: '7000000000000',
      data: 'seventh',
      receiver: address,
      gasLimit: '60000000'
    };
    const eighthTransaction = {
      value: '80000000000000',
      data: 'eighth',
      receiver: address,
      gasLimit: '60000000'
    };
    const ninthTransaction = {
      value: '9000000000000',
      data: 'ninth',
      receiver: address,
      gasLimit: '60000000'
    };
    const tenthTransaction = {
      value: '1000000000000',
      data: 'tenth',
      receiver: address,
      gasLimit: '60000000'
    };
    const eleventhTransaction = {
      value: '1100000000000',
      data: 'eleventh',
      receiver: address,
      gasLimit: '60000000'
    };
    const twelfthTransaction = {
      value: '12000000000000',
      data: 'twelfth',
      receiver: address,
      gasLimit: '60000000'
    };
    const thirteenthTransaction = {
      value: '1300000000000',
      data: 'lucky thirteenth',
      receiver: address,
      gasLimit: '60000000'
    };

    await refreshAccount();
    await sendTransactions({
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
      },
      redirectAfterSign: false
    });
  };

  return (
    <div className='flex flex-col gap-6'>
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
