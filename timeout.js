function payment(callback, num){
    const date_clicked = new Date()
    console.log(date_clicked)

    paymentstatus(num)

    function paymentstatus(n){
        let date_accessed = new Date(date_clicked)
        let date_now = new Date()

        if(date_now-date_accessed > n){
            console.log(date_now)
            console.log(Math.floor((date_now-date_accessed)/1000)+"s")
            callback()
            
        }
        else{
            console.log("waiting...")
            while (date_now-date_accessed <= n){
                date_now = new Date()
            }
            paymentstatus(n)
        }

    }

}


payment(function (){
    console.log("Payment Successfull")
}, 2000)