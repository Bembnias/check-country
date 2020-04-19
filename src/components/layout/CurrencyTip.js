import React from 'react'

const CurrencyTip = (props) => {
    if (props.type === 'currency') {
        return (
            <div className="siimple-tip siimple-tip--warning">
                If you are searching by currency, you have to fill in form with ISO 4217 currency code like 'usd' <br/>
                All codes are at this webpage: <a href="https://www.xe.com/iso4217.php" className="siimple-link">ISO 4217</a>
            </div>
        )
    } else {
        return null
    }
}

export default CurrencyTip;
