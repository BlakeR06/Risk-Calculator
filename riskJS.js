const calculateButton = document.getElementById('calculateButton')

calculateButton.addEventListener('click', function() {
    const buyingPower = parseFloat(document.getElementById('buyingPower').value)
    const riskPercent = parseFloat(document.getElementById('riskPercent').value)
    const sharePrice = parseFloat(document.getElementById('sharePrice').value)
    const stopLoss = parseFloat(document.getElementById('stopLoss').value)

    const amountOfSharesDisplay = document.getElementById('amountOfSharesDisplay')
    const takeProfitDisplay = document.getElementById('takeProfitDisplay')

    if (buyingPower && riskPercent && sharePrice && stopLoss) {
        const actualRiskPercent = riskPercent / 100
        const risk = buyingPower * actualRiskPercent
        const stopLossDistance = sharePrice - stopLoss
        const numberOfShares = risk / stopLossDistance

        const rewardPerShare = stopLossDistance * 2.5
        const takeProfit = sharePrice + rewardPerShare

        amountOfSharesDisplay.textContent = 'Amount of Shares: ' + Math.floor(numberOfShares)
        takeProfitDisplay.textContent = 'Take Profit: ' + takeProfit.toFixed(2)
    }
})
