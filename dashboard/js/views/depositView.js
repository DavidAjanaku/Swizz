class DepositView {
    _parentEl = document.getElementById('deposits');

    _getCurrentCoin(){
        return this._parentEl.querySelector('.nav-link.active').textContent;
    }

    addChangeRangeHandler(handler){
        this._parentEl.addEventListener('click', (e) =>{
            const rangeEl = e.target.closest('.selection label');
            if(!rangeEl) return;

            const range = rangeEl.textContent
            .split(" ")
            .filter(word => word.startsWith("$"))
            .map(word => +word.slice(1));

            const curCoin = this._getCurrentCoin();
            handler(curCoin,...range);

        })
        // return this._parentEl('.nav-link.active').textContent;
    }

}

export default new DepositView();