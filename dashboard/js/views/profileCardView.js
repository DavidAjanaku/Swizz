import View from "./View.js";


class ProfileCard extends View{
    _parentEl = document.querySelector('.profile_card');
    
    _generateMarkup(){
        return `
            <div class="card-body">
                <div class="d-flex">
                    <img class="me-3 rounded-circle me-0 me-sm-3" src="images/profile/2.png" width="60"
                        height="60" alt="">
                    <div class="flex-grow-1">
                        <span>Hello</span>
                        <h4 class="mb-2"> ${this._data.firstname} ${this._data.lastname}</h4>
                        <p class="mb-1"> <span><i class="fa fa-phone me-2 text-primary"></i></span>${this._data.profile?.phone_number ?? 'none'}</p>
                        <p class="mb-1"> <span><i class="fa fa-envelope me-2 text-primary"></i></span>
                            <a href="https://demo.quixlab.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="d6beb3babab996b3aeb7bba6bab3f8b5b9bb">[email&#160;protected]</a>
                        </p>
                    </div>
                </div>

                <ul class="card-profile__info">
                    <li>
                        <h5 class="me-4">Address</h5>
                        <span class="text-muted">${this._data?.profile?.present_address}</span>
                    </li>
                    <li>
                        <h5 class="text-danger me-4">Last Log</h5>
                        <span class="text-danger">
                        ${new Date().toDateString()}
                        </span>
                    </li>
                </ul>
                
            </div>        
        `;
    }
}

export default new ProfileCard();
