import View from "./View.js";

class DepositForm extends View{
    _parentEl = document.querySelector('.py-5.deposit-form');

    _clearInput(){
        this._parentEl.querySelector('.form-control.text-end').value = null;
    }

    _getMinAndMaxDeposit(){
        const {maxDeposit, minDeposit} = this._parentEl.querySelector('.form-control.text-end').dataset;
        return {maxDeposit,minDeposit};
    }

    _generateMarkup(){
        return `
            <div class="mb-3 row align-items-center">
            <div class="col-sm-4">
                <label for="inputEmail3" class="col-form-label">Amount ${this._data.plan}
                    <br />
                    <small>Deposit amount range: ${this._data.min} - ${this._data.max > 100000 ? 'unlimited' : this._data.max} USD</small>
                </label>
            </div>
            <div class="col-sm-8">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <label class="input-group-text bg-primary"><i
                                class="cc BTC-alt text-white"></i></label>
                    </div>
                    <input type="text" class="form-control text-end"
                        data-min-deposit="${this._data.min}"
                        data-max-deposit="${this._data.max ?? 'null'}"
                        placeholder=" ${this._data.max > 10000 ? '' : this._data.max} USD" required>
                </div>
            </div>
        </div>

        <div class="mb-3 row align-items-center">
            <div class="col-sm-6">
                <label for="inputEmail3" class="col-form-label">Bitcoin Network Fee
                    (${this._data.plan})
                    <br />
                    <small>Transactions on the Bitcoin network are priorirized by
                        fees</small>
                </label>
            </div>
            <div class="col-sm-6">
                <h4 class="text-end">0.005</h4>
            </div>
        </div>

        <div class="text-end">
            <button class="btn btn-primary">Deposit Now</button>
        </div>
        `;
    }
    
    getQuery(){
      
        const query = +this._parentEl.querySelector('.form-control.text-end').value;
        const {maxDeposit, minDeposit} = this._getMinAndMaxDeposit();

        if(!isFinite(query)) return;
        if(minDeposit > query || maxDeposit < query) return;

        this._clearInput();
        return query;
    }

   addMakeDepositHandler(handler){
        this._parentEl.addEventListener('submit', e => {
            e.preventDefault();
            handler();
        })
    }

}

export default new DepositForm();