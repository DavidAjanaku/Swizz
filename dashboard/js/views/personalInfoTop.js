import View from "./View.js";

class PersonalInfoTop extends View{
    _parentEl = document.querySelector(".row .setting-top-profile");

    _generateMarkup(){
        return `
            <div class="col-xl-6 col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">User Profile</h4>
                    </div>
                    <div class="card-body">
                        <form action="#">
                            <div class="row">
                                <div class="mb-3 col-xl-12">
                                    <div class="d-flex align-items-center mb-3">
                                        <img class="me-3 rounded-circle me-0 me-sm-3"
                                            src="images/profile/2.png" width="50" height="50" alt="">
                                        <div class="flex-grow-1">
                                            <h5 class="mb-0">${this._data.firstname} ${this._data.lastname}</h5>
                                            <p class="mb-0">Max file size is 20mb
                                            </p>
                                        </div>
                                    </div>
                                    <div class="file-upload-wrapper" data-text="Change Photo">
                                        <input name="file-upload-field" type="file"
                                            class="file-upload-field">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-success px-4">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `;
    }

}

export default new PersonalInfoTop();