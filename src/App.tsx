import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Layout } from 'components';
import {
  apiTimeout,
  environment,
  sampleAuthenticatedDomains
  // walletConnectV2ProjectId
} from 'config';
import {
  AxiosInterceptorContext, // using this is optional
  DappProvider,
  NotificationModal,
  SignTransactionsModals,
  TransactionsToastList
  // uncomment this to use the custom transaction tracker
  // TransactionsTracker
} from 'lib';
import { RouteNamesEnum } from 'localConstants';
import { PageNotFound } from 'pages';
import { routes } from 'routes';
import { BatchTransactionsContextProvider } from 'wrappers';

const walletConnectV2ProjectId = import.meta.env.VITE_APP_PROJECT_ID;
const walletConnectV2RelayAddresses = [import.meta.env.VITE_APP_RELAY_URL];
const walletConnectDeepLink = import.meta.env.VITE_APP_DEEPLINK_URL ?? '';

const AppContent = () => {
  return (
    <DappProvider
      environment={environment}
      customNetworkConfig={{
        name: 'customConfig',
        apiTimeout,
        walletConnectV2ProjectId,
        //        walletConnectV2RelayAddresses,
        walletConnectDeepLink,
        walletConnectV2Options: {
          logger: 'debug'
        }
      }}
      dappConfig={{
        shouldUseWebViewProvider: true,
        logoutRoute: RouteNamesEnum.unlock
      }}
      customComponents={{
        transactionTracker: {
          // uncomment this to use the custom transaction tracker
          // component: TransactionsTracker,
          props: {
            onSuccess: (sessionId: string) => {
              console.log(`Session ${sessionId} successfully completed`);
            },
            onFail: (sessionId: string, errorMessage: string) => {
              console.log(`Session ${sessionId} failed. ${errorMessage ?? ''}`);
            }
          }
        }
      }}
    >
      <AxiosInterceptorContext.Listener>
        <Layout>
          <TransactionsToastList />
          <NotificationModal />
          <SignTransactionsModals />
          <Routes>
            {routes.map((route) => (
              <Route
                path={route.path}
                key={`route-key-'${route.path}`}
                element={<route.component />}
              />
            ))}
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Layout>
      </AxiosInterceptorContext.Listener>
    </DappProvider>
  );
};

export const App = () => {
  return (
    <AxiosInterceptorContext.Provider>
      <AxiosInterceptorContext.Interceptor
        authenticatedDomains={sampleAuthenticatedDomains}
      >
        <Router>
          <BatchTransactionsContextProvider>
            <AppContent />
          </BatchTransactionsContextProvider>
        </Router>
      </AxiosInterceptorContext.Interceptor>
    </AxiosInterceptorContext.Provider>
  );
};
