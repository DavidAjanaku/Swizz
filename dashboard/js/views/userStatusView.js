import View from "./View.js";

class UserStatusView extends View{
    _parentEl = document.querySelector('.row.user-status');

    _generateMarkup(){
        return `
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                <div class="card text-center pt-2">
                    <div class="card-body">
                        <p class="mb-1">STATUS:</p>
                        <h4>Pending</h4>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                <div class="card text-center pt-2">
                    <div class="card-body">
                        <p class="mb-1">Plan</p>
                        <h4>Diamond</h4>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                <div class="card text-center pt-2">
                    <div class="card-body">
                        <p class="mb-1">All Withdrawls</p>
                        <h4>${this._data.totalWithdrawal.toFixed(2)} $</h4>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                <div class="card text-center pt-2">
                    <div class="card-body">
                        <p class="mb-1">Total Deposit </p>
                        <h4>${this._data.totalDeposit.toFixed(2)} $</h4>
                    </div>
                </div>
            </div>        
        `;
    }
}

export default new UserStatusView();