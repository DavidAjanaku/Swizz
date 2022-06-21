import View from "./View.js";

class transactionView extends View{
    _parentEl = document.querySelector('.transactions');

    _generateMarkup(){
        return this._data.map(this._generateMarkupPreview).join('');
    }

    _generateMarkupPreview(data){

       const date1 = new Date();
       const date2 = new Date(data.time);

        return `
            <tr>
                <td>${data.tid}</td>
                <td>
                    ${
                        (
                            date1.getFullYear() === date2.getFullYear() &&
                            date1.getMonth() === date2.getMonth() &&
                            date1.getDate() === date2.getDate()
                        )

                        ? 'Today'
                        

                        :Intl.DateTimeFormat('en-GB',{
                            month: 'long',
                            day:'2-digit',
                            year:'numeric'
                        }).format(date2)
                        
                    }
                </td>
                <td>${data.type}</td>
                <td>${data.amount}</td>
                <td>${data.status}</td>
                <td>${data.amount}</td>
            </tr>
        `;
    }
}

export default new transactionView();