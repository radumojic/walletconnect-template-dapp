import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGetAccountProvider } from '@multiversx/sdk-dapp/hooks/account/useGetAccountProvider';
import { getProviderType } from '@multiversx/sdk-dapp/providers/utils';
import { LoginMethodsEnum } from '@multiversx/sdk-dapp/types';
import { Button } from 'components/Button';

export const WalletConnectPing = () => {
  const { provider } = useGetAccountProvider();
  const providerType = getProviderType(provider);

  const isSigningWithWalletConnectV2 =
    providerType === LoginMethodsEnum.walletconnectv2;

  const pingWalletConnect = async () => {
    const response = await provider?.ping?.();
    alert(response ? 'Pinged Ok' : 'No Ping');
  };

  if (!isSigningWithWalletConnectV2) {
    return <></>;
  }

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-2'>
        <div className='flex justify-start gap-2'>
          <Button
            onClick={pingWalletConnect}
            className='inline-block rounded-lg px-3 py-2 text-center hover:no-underline my-0 bg-blue-600 text-white hover:bg-blue-700 mr-0 disabled:bg-gray-200 disabled:text-black disabled:cursor-not-allowed'
          >
            <FontAwesomeIcon icon={faArrowUp} className='mr-1' />
            Ping WC Connection
          </Button>
        </div>
      </div>
    </div>
  );
};
