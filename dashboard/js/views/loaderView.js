
class loadUserView{
    _parentEl =  document.getElementById('preloader');

    render(){
        this._parentEl.style.display = 'block';

    }

    remove(){
        this._parentEl.style.display = 'none';

    }

  
    

}

export default new loadUserView();