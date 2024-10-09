import { useId } from "react";
import React from "react";

const InputBox = ({label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currency = [],
    selectedCurrency = "USD",
    disableAmount = false,
    
    }
) => {

        const id = useId();
    return(
        <>
            <div className="w-1/2 border border-black p-2 m-2 rounded-md">
                <div className="block text-sm font-medium leading-6 text-gray-900">
                <label
                htmlFor="currency"
                >
                    {label}
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                    disabled={disableAmount}
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id={id}
                type="number"
                placeholder='Amount'
                value={amount}
                onChange={(e) => {onAmountChange && onAmountChange(Number(e.target.value))}}>

                </input>
                <div className="absolute inset-y-0 right-0 flex items-center">
                <label htmlFor="currency" className="sr-only">
                     Currency
                 </label>
                <select
                className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                value={selectedCurrency}
                onChange={(e) => {onCurrencyChange && onCurrencyChange(e.target.value)}}>
                    {currency.map((currency) => (<option key={currency} value={currency}>{currency}</option>))}
                </select>
                </div>
                </div>

               
            </div>
            </div>
        </>

    )
}

export default InputBox;