import classNames from 'classnames';
import { contractAddress } from 'config';
import { useEffect, useState } from 'react';
import { WidgetType } from 'types/widget.types';
import { DashboardHeader, LeftPanel, Widget } from './components';
import styles from './dashboard.styles';
import {
  BalanceTransaction,
  BatchTransactions,
  DataOnlyTransaction,
  LargeMultipleTransactions,
  MultipleTransactions,
  NativeAuth,
  SignMessage,
  SingleTransaction,
  Transactions,
  WalletConnectPing
} from './widgets';

const dashboardWidgets: WidgetType[] = [
  {
    title: 'Balance Transaction',
    widget: BalanceTransaction,
    description: 'Balance Transaction',
    reference: 'https://docs.multiversx.com/sdk-and-tools/sdk-dapp/#account'
  },
  {
    title: 'Single Transaction',
    widget: SingleTransaction,
    description: 'Single Transaction',
    reference: 'https://docs.multiversx.com/sdk-and-tools/sdk-dapp/#account'
  },
  {
    title: 'Data Transaction',
    widget: DataOnlyTransaction,
    description: 'Data Transaction',
    reference: 'https://docs.multiversx.com/sdk-and-tools/sdk-dapp/#account'
  },
  {
    title: 'Multiple Transactions',
    widget: MultipleTransactions,
    description: 'Multiple Transactions',
    reference: 'https://docs.multiversx.com/sdk-and-tools/sdk-dapp/#account'
  },
  {
    title: '(Large) Multiple Transactions',
    widget: LargeMultipleTransactions,
    description: '(Large) Multiple Transactions',
    reference: 'https://docs.multiversx.com/sdk-and-tools/sdk-dapp/#account'
  },

  {
    title: 'WalletConnect Ping',
    widget: WalletConnectPing,
    description: 'WalletConnect Ping',
    reference: 'https://docs.multiversx.com/sdk-and-tools/sdk-dapp/#account'
  },
  // {
  //   title: 'Ping & Pong (Manual)',
  //   widget: PingPongRaw,
  //   description:
  //     'Smart Contract interactions using manually formulated transactions',
  //   reference:
  //     'https://docs.multiversx.com/sdk-and-tools/indices/es-index-transactions/'
  // },
  // {
  //   title: 'Ping & Pong (ABI)',
  //   widget: PingPongAbi,
  //   description:
  //     'Smart Contract interactions using the ABI generated transactions',
  //   reference:
  //     'https://docs.multiversx.com/sdk-and-tools/sdk-js/sdk-js-cookbook/#using-interaction-when-the-abi-is-available'
  // },
  // {
  //   title: 'Ping & Pong (Backend)',
  //   widget: PingPongService,
  //   description:
  //     'Smart Contract interactions using the backend generated transactions',
  //   reference: 'https://github.com/multiversx/mx-ping-pong-service'
  // },
  {
    title: 'Sign message',
    widget: SignMessage,
    description: 'Message signing using the connected account',
    reference: 'https://docs.multiversx.com/sdk-and-tools/sdk-dapp/#account-1'
  },
  {
    title: 'Native auth',
    widget: NativeAuth,
    description:
      'A secure authentication token can be used to interact with the backend',
    reference: 'https://github.com/multiversx/mx-sdk-js-native-auth-server'
  },
  {
    title: 'Batch Transactions',
    widget: BatchTransactions,
    description:
      'For complex scenarios transactions can be sent in the desired group/sequence',
    reference:
      'https://github.com/multiversx/mx-sdk-dapp#sending-transactions-synchronously-in-batches'
  },
  {
    title: 'Transactions (All)',
    widget: () => <Transactions identifier='transactions-all' />,
    description: 'List transactions for the connected account',
    reference:
      'https://api.multiversx.com/#/accounts/AccountController_getAccountTransactions'
  },
  {
    title: 'Transactions (Ping & Pong)',
    widget: (props) => (
      <Transactions identifier='transactions-ping-pong' {...props} />
    ),
    props: { receiver: contractAddress },
    description: 'List transactions filtered for a given Smart Contract',
    reference:
      'https://api.multiversx.com/#/accounts/AccountController_getAccountTransactions'
  }
];

export const Dashboard = () => {
  const [isMobilePanelOpen, setIsMobilePanelOpen] = useState(false);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <div className={styles.dashboardContainer}>
      <div
        className={classNames(
          styles.mobilePanelContainer,
          styles.desktopPanelContainer
        )}
      >
        <LeftPanel
          isOpen={isMobilePanelOpen}
          setIsOpen={setIsMobilePanelOpen}
        />
      </div>

      <div
        style={{ backgroundImage: 'url(/background.svg)' }}
        className={classNames(styles.dashboardContent, {
          [styles.dashboardContentMobilePanelOpen]: isMobilePanelOpen
        })}
      >
        <DashboardHeader />

        <div className={styles.dashboardWidgets}>
          {dashboardWidgets.map((element) => (
            <Widget key={element.title} {...element} />
          ))}
        </div>
      </div>
    </div>
  );
};
