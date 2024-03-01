const accoridonBtn = document.querySelectorAll('.cont-btn')

accoridonBtn.forEach(btn=> {
    btn.addEventListener('click',function () {
        this.classList.toggle('active')
        const contentNote = this.nextElementSibling
        const plusIcon = this.querySelector('.plus')
        const minusIcon = this.querySelector('.icon-minus')

        if(contentNote.style.maxHeight){
            contentNote.style.maxHeight = null
            plusIcon.style.display= 'block'
            minusIcon.style.display = 'none'
        }
else{
    contentNote.style.maxHeight = contentNote.scrollHeight + 'px'
    plusIcon.style.display = 'none'
    minusIcon.style.display = 'block'
}

    })

})