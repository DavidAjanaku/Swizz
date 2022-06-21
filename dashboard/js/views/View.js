
export default class View{
  _data;
  render(data){
    if(!data ||( Array.isArray(data) && data.length === 0)) 
      return new Error("data to render is invalid");

    this._data = data;
    const markUp = this._generateMarkup();
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin',markUp);
  }
    
    
  _clear(){
    this._parentEl.innerHTML = null;
  }

  update(data){
    this._data = data;
    const newMarkup = this._generateMarkup();

    const newDom = document.createRange().createContextualFragment(newMarkup);
    const newElement = Array.from(newDom.querySelectorAll('*'));
    const curElement = Array.from(this._parentEl.querySelectorAll('*'));

    

    newElement.forEach((newEl,i) => {
      const curEl = curElement[i];

      
      if(!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue?.trim() !== ''){
        curEl.textContent = newEl.textContent;
      }


      if(!newEl.isEqualNode(curEl)){
        Array.from(newEl.attributes).forEach(attr => curEl.setAttribute(attr.name, attr.value));
      }
    

      
    });

  }
}