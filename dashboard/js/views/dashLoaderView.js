import View from "./View.js";

class DashLoader extends View{
    _parentEl = document.querySelector('.dashloader');
    
    _generateMarkup(){
        return `
        <div class="col-6">
            <div class="page-title-content">
                <p>
                    Welcome Back,
                    <span> ${this._data.firstname} ${this._data.lastname}</span>
                </p>
            </div>
        </div>
        <div class="col-6">
            <ul class="text-end breadcrumbs list-unstyle">
                <li class="active"><a href="settings.html#${this._data.id}">Settings </a></li>
            </ul>
        </div>
        `;
    }

   


}

export default new DashLoader();
