import View from "./View.js";

class sidebarView extends View{
    _parentEl = document.querySelector('.menu');

    _generateMarkup(){
        return `
            <ul>
                <li>
                    <a href="account-overview.html#${this._data.id}" data-toggle="tooltip" data-placement="right" title="Accounts">
                        <span><i class="mdi mdi-face-profile"></i></span>
                    </a>
                </li>
                <li>
                    <a href="data-tbi.html#${this._data.id}" data-toggle="tooltip" data-placement="right" title="Data">
                        <span><i class="mdi mdi-database"></i></span>
                    </a>
                </li>
                <li>
                    <a href="settings.html#${this._data.id}" data-toggle="tooltip" data-placement="right" title="Setting">
                        <span><i class="mdi mdi-settings"></i></span>
                    </a>
                </li>
            </ul>
        `
    }
}

export default new sidebarView();