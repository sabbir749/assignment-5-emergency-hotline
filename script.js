function getId(id) {
    const getId = document.getElementById(id);
    return getId;
}
function getClass(className) {
    const getId = document.getElementsByClassName(className);
    return getId;
}


getId('card-container').addEventListener('click', function (e) {
    if (e.target.className.includes('heart')) {
        getId('heart-number').innerText++;
    }
})


const callButtons = getClass('phone-btn');
for (const callBtn of callButtons) {
    callBtn.addEventListener('click', function () {
        const cardTitle = callBtn.parentNode.parentNode.children[1].innerText
        const cardNumber = callBtn.parentNode.parentNode.children[3].innerText

        const coin = Number(getId('coin').innerText);

        if (coin < 20) {
            alert("❌ You don't have sufficient coin. You need minimum 20 coins to make a call");
        } else {

            const totalCoin = coin - 20;
            getId('coin').innerText = totalCoin;
            alert('📞 Calling ' + cardTitle + ' ' + cardNumber + '...')

            let callHistory = getId('history');
            callHistory.innerHTML += `
   <div class="flex justify-between items-center bg-[#fafafa] rounded-lg px-2 py-4 text-[15px] mb-3">
                    <div>
                        <h1 class="font-semibold">${cardTitle}</h1>
                        <p class="text-[#5c5c5c] text-[14px]">${cardNumber}</p>
                    </div>
                    <div class="text-[14px]">${new Date().toLocaleTimeString("en-US")}</div>
                </div>
`

        }

    })

}

getId('btn-clear').addEventListener('click', function () {
    let allHistory = getId('history')

    allHistory.innerHTML = '';
})



const copyButtons = getClass('copy-btn');
for (const copyBtn of copyButtons) {
    copyBtn.addEventListener('click', function () {

        const cardNumber = copyBtn.parentNode.parentNode.children[3].innerText;
        console.log(cardNumber);
        navigator.clipboard.writeText(cardNumber);
        alert('Number Copied: ' + cardNumber);
        getId('total-copy').innerText++;
    })

}



