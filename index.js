const formData=document.querySelector('.input-form')
const calc=document.querySelector('.calculate')
const outputEl=document.querySelector('.output')

outputEl.style.display='none'

calc.addEventListener('click',()=>{

    var inputs=new FormData(formData)
    var i=0
    var inputArray=new Array(3).fill(0)
    //reading inputs
    for(let value of inputs.values()){
        inputArray[i]=Number(value)
        i++
    }
    //calculating profit/loss percentage
    if(inputArray[0] && inputArray[1] && inputArray[2]){
        var initialPrice=inputArray[0]
        var quantity=inputArray[1]
        var currentPrice=inputArray[2]

        var diff=Math.abs(initialPrice - currentPrice)
        console.log(typeof(initialPrice),currentPrice,initialPrice>currentPrice)
        if(initialPrice>currentPrice){
            var loss=Math.abs(diff)*quantity
            var lossPercentage=((diff)/initialPrice)*100
            //displaying loss and percentage
            outputEl.style.display='inline'
            outputEl.innerHTML=`Uh!oh bad investment<br><br><br>Loss : ${loss}<br><br><br>Loss percentage : ${lossPercentage}`
        }
        else if(initialPrice<currentPrice){
            var profit=Math.abs(diff)*quantity
            var profitPercentage=(diff/initialPrice)*100
            outputEl.style.display='inline'
            outputEl.innerHTML=`yay! good investment<br><br><br>Profit : ${profit}<br><br><br>Profit percentage : ${profitPercentage}`
        }
        else{
            outputEl.style.display='inline'
            outputEl.innerHTML=`No Difference...`
        }
    }
    else{
        outputEl.style.display='inline'
        outputEl.innerHTML=`Enter all the values`
    }

})
