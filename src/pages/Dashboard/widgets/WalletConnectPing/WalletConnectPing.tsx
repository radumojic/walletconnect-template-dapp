import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'components/Button';
import { getAccountProvider, ProviderTypeEnum } from 'lib';
import { ItemsIdentifiersEnum } from 'pages/Dashboard/dashboard.types';

export const WalletConnectPing = () => {
  const provider = getAccountProvider();

  const isSigningWithWalletConnectV2 =
    provider.getType() === ProviderTypeEnum.walletConnect;

  const pingWalletConnect = async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response = await provider?.ping?.();
    alert(response ? 'Pinged Ok' : 'No Ping');
  };

  if (!isSigningWithWalletConnectV2) {
    return <></>;
  }

  return (
    <div
      className='flex flex-col gap-6'
      id={ItemsIdentifiersEnum.walletConnectPing}
    >
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
