
class WithdrawForm{
    _parentEl = document.querySelector('.py-5.withdraw-form');

    _clearInput(){
        this._parentEl.querySelector('.form-control.text-end').value = null;
    }

    
    getQuery(){
      
        const query = +this._parentEl.querySelector('.form-control.text-end').value;

        if(!isFinite(query)) return;

        this._clearInput();
        return query;
    }

   addMakeWithdrawHandler(handler){
        this._parentEl.addEventListener('submit', e => {
            e.preventDefault();
            handler();
        })
    }

}

export default new WithdrawForm();