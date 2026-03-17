import './styles/tailwind.css';
import './styles/style.css';

import { environment } from 'config';
import { ICustomProvider, InitAppType } from './lib';
import { InMemoryProvider } from './provider/inMemoryProvider';

const providers: ICustomProvider[] = [
  {
    name: 'In Memory Provider',
    type: 'inMemoryProvider',
    iconUrl: `${window.location.origin}/multiversx-white.svg`,
    constructor: async (options) => new InMemoryProvider(options)
  }
];

(window as any).multiversx = {};
// Option 1: Add providers using the `window.providers` array
(window as any).multiversx.providers = providers;

const walletConnectV2ProjectId = import.meta.env.VITE_APP_PROJECT_ID;
// const walletConnectV2RelayAddresses = [import.meta.env.VITE_APP_RELAY_URL];
const walletConnectDeepLink = import.meta.env.VITE_APP_DEEPLINK_URL ?? '';

export const config: InitAppType = {
  storage: { getStorageCallback: () => sessionStorage },
  dAppConfig: {
    nativeAuth: true,
    environment: environment,
    theme: 'mvx:dark-theme',
    providers: {
      walletConnect: {
        walletConnectV2ProjectId,
        //        walletConnectV2RelayAddresses,
        walletConnectDeepLink,
        walletConnectV2Options: {
          logger: 'debug'
        }
      }
    }
  }

  // Option 2: Add providers using the config `customProviders` array
  // customProviders: [providers]
};
