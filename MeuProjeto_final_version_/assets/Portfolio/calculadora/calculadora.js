const calculator = () => {

    const screen = document.querySelector('.screen')
    const buttons = document.querySelectorAll('#btn')
    const equal = document.querySelector('.btn-green')
    const reset = document.querySelector('.btn-orange')

    buttons.forEach((button) => {

        button.addEventListener('click', (e) => {
            let value = e.target.dataset.num
            screen.value += value;
        })

    })

    equal.addEventListener('click', (e) => {

        if(screen.value === ''){
            screen.value = 'Please Enter'
        }else{
            let asnwer = eval(screen.value)
            screen.value = asnwer;
        }

    })

    reset.addEventListener('click', () => {
        screen.value = ''
    })



}
calculator()