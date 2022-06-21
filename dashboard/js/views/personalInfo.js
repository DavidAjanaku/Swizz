import View from "./View.js";

class PersonalInfoView extends View{
    _parentEl = document.querySelector('.personal_validate .row');

    
    _generateMarkup(){
        console.log(this._data);
        return `
            <div class="mb-3 col-xl-6 col-md-6">
                <label class="form-label">Your Name</label>
                <input type="text" class="form-control" placeholder="Fullname" value="${this._data.firstname} ${this._data.lastname}"
                    name="fullname">
            </div>
            <div class="mb-3 col-xl-6 col-md-6">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" placeholder="Example@email.com" value="${this._data.email}" name="email">
            </div>
            <div class="mb-3 col-xl-6 col-md-6">
                <label class="form-label">Date of birth</label>
                <input type="text" class="form-control" placeholder="day-month-year" id="datepicker" autocomplete="off" name="dob" value="${this._data.profile.dob}">
            </div>
            <div class="mb-3 col-xl-6 col-md-6">
                <label class="form-label">Present Address</label>
                <input type="text" class="form-control" placeholder="Present Address" name="presentaddress" value="${this._data.profile.present_address}">
            </div>
            <div class="mb-3 col-xl-6 col-md-6">
                <label class="form-label">Permanent Address</label>
                <input type="text" class="form-control" placeholder="Permanent Address" name="permanentaddress" value="${this._data.profile.permanent_address}">
            </div>
            <div class="mb-3 col-xl-6 col-md-6">
                <label class="form-label">City</label>
                <input type="text" class="form-control" placeholder="City" name="city" value="${this._data.profile.city}">
            </div>
            <div class="mb-3 col-xl-6 col-md-6">
                <label class="form-label">Postal Code</label>
                <input type="number" class="form-control" placeholder="25481" name="postal" value="${this._data.profile.postal_code}">
            </div>
            <div class="mb-3 col-xl-6 col-md-6">
                <label class="form-label">Wallet Address </label>
                <input type="text" class="form-control" placeholder="2548109876789" name="wallet_ad" value="${this._data.profile.wallest_add}">
            </div>
        `;
    }

    handleUpdateUserProfile(handler){
        const userProfileForm =  document.querySelector('.personal_validate');
        userProfileForm.addEventListener('submit',function(e){
            e.preventDefault();

            const inputs = Array.from(this.querySelectorAll('input'));
            if(!inputs || inputs.length === 0) return;
            const data = {};
            for(let input of inputs){
               data[input.name]= input.value;
            }

            handler(data);
        })
    }
}

export default new PersonalInfoView();