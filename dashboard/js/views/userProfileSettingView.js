import View from "./View.js";

class UserProfileSettingView extends View{
    _parentEl = document.querySelector('.dropdown-menu.dropdown-menu-end.user-setting');



    _generateMarkup(){
            return `
            <div class="user-email">
                <div class="user">
                    <i class="thumb"><i class="mdi mdi-account"></i></i>
                    <div class="user-info">
                        <h6>${this._data.firstname} ${this._data.lastname}</h6>
                        <span><a href="https://demo.quixlab.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="8bfafee2f3e7eae9a5e8e4e6cbece6eae2e7a5e8e4e6">[email&#160;protected]</a></span>
                    </div>
                </div>
            </div>

            <div class="user-balance">
                <div class="available">
                    <p>Available</p>
                    <span>${this._data.transactionTotal.availBal.toFixed(2)} USD</span>
                </div>
                <div class="total">
                    <p>Total</p>
                    <span>${this._data.transactionTotal.totalDeposit.toFixed(2)} USD</span>
                </div>
            </div>
            <a href="account-overview.html" class="dropdown-item">
                <i class="mdi mdi-account"></i> Account
            </a>
            <a href="data-tbi.html" class="dropdown-item">
                <i class="mdi mdi-history"></i> History
            </a>
            <a href="settings.html" class="dropdown-item">
                <i class="mdi mdi-settings"></i> Setting
            </a>
            <a href="lock.html" class="dropdown-item">
                <i class="mdi mdi-lock"></i> Lock
            </a>
            <a href="#" class="dropdown-item logout">
                <i class="mdi mdi-logout"></i> Logout
            </a>
        `;
    }


    addLogoutHandler(handler){
        this._parentEl.addEventListener('click', e => {
            e.preventDefault();
            const logoutBtn = e.target.closest('.logout');
            if(!logoutBtn) return;
            handler();
        })
    }
}

export default new UserProfileSettingView();