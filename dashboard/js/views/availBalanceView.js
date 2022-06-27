
import View from './View.js';

class AvailBalanceView extends View{
    _parentEl= document.querySelector('.card-body--main');

    _generateMarkup(){
        const availBal = new Intl.NumberFormat("en-US",{
            style: 'currency',
            currency:'USD'
        }).format(this._data.profit)

        return `
            <span>Available Balance</span>
            <h3> ${availBal} </h3>
        `;

    }
    
}

export default new AvailBalanceView();