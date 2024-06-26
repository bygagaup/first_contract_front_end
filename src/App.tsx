import "./App.css";
import {TonConnectButton} from "@tonconnect/ui-react";
import {useMainContract} from "./hooks/useMainContract";
import {useTonConnect} from "./hooks/useTonConnect";
import {fromNano} from "@ton/core";
import WebApp from '@twa-dev/sdk';


function App() {
    const {
        contract_address,
        counter_value,
        // recent_sender,
        // owner_address,
        contract_balance,
        sendIncrement,
        sendDeposit,
        sendWithdrawalRequest
    } = useMainContract();

    const {connected} = useTonConnect()

    const showAlert = () => {
      WebApp.showAlert("Hey there!");
    };

    const showColorScheme = () => {
        WebApp.showAlert(WebApp.colorScheme);
    };
    return (
        <div>
            <div>
                <TonConnectButton/>
            </div>
            <div>
                <div className='Card'>
                    <b>{WebApp.platform}</b>
                    <br/>
                    <b>{WebApp.colorScheme}</b>
                    <br/>
                    <b>Our contract Address</b>
                    <div className='Hint'>{contract_address?.slice(0, 30) + "..."}</div>
                    <b>Our contract Balance</b>
                    {contract_balance && (
                        <div className='Hint'>{fromNano(contract_balance)}</div>
                    )}
                </div>

                <div className='Card'>
                    <b>Counter Value</b>
                    <div>{counter_value ?? "Loading..."}</div>
                </div>

                {connected && (
                    <a
                        onClick={() => {
                            showAlert();
                        }}
                    >
                        Show Alert
                    </a>
                )}
                <br/>

                {connected && (
                    <a
                        onClick={() => {
                            showColorScheme();
                        }}
                    >
                        Show Color Scheme
                    </a>
                )}
                <br/>

                {connected && (
                    <a
                        onClick={() => {
                            sendIncrement();
                        }}
                    >
                        Increment by 5
                    </a>
                )}
                <br/>
                {connected && (
                    <a
                        onClick={() => {
                            sendDeposit();
                        }}
                    >
                        send deposite 1 ton
                    </a>
                )}
                <br/>
                {connected && (
                    <a
                        onClick={() => {
                            sendWithdrawalRequest();
                        }}
                    >
                        send WithdrawalRequest 0.5 ton
                    </a>
                )}

            </div>
        </div>
    );
}

export default App;