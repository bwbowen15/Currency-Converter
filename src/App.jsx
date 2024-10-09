import { useState } from 'react'
import InputBox from './compenents/InputBox'
import useConversion from './hooks/useConversion'
import './App.css'

function App() {
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('ADA')
  const [amount, setAmount] = useState(0);
  const [conversion, setConversion] = useState(0)

  const curInfo = useConversion(from)
  const choices = Object.keys(curInfo)

  return (
    <>
    <div className='border border-black p-3 m-3 '>
      <div>
      <h1 className='text-black font-mono'>Currency Converter</h1>
      {/*here is the box for the input of the amount and the currency you want to convert from*/}
      <InputBox
      label = "Amount"
      currency={choices}
      onCurrencyChange={(cur) => setFrom(cur)}
      onAmountChange={(amount) => setAmount(amount)}
      selectedCurrency={from}
      />
    </div>
    <div>
      {/*here is the box to choose what you want to convert to and shows the conversion.. This value box can not be typed in*/ }
    <InputBox
    label = "Conversion"
    disableAmount = {true}
    currency={choices}
    onCurrencyChange={(cur) => setTo(cur)}
    selectedCurrency={to}
    amount = {amount * curInfo[to]}
    />
    </div>
    </div>
    </>
  )
}
export default App
