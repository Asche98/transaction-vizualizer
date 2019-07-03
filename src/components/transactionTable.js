import React from 'react';
import data from '../data.json';

class transactionTable extends React.Component{
  state={
    search:""
  }
  onchange=e=>{
    this.setState({search:e.target.value});
  }
  render(){
    const {search}=this.state;
    var refundReason='';
    var purchaseInfo='';
    var statusStyle;
    var i=0;
    return(
      <div class="container">
      <div class="col-lg-12"><h3 className="tableHeader">Таблица транзакций</h3></div>
      <div class="col-lg-12">
  <input class="form-control"
         placeholder="Введите значение для поиска по таблице (например, Jack Black или Red Sauce)" onChange={this.onchange}/>
         <br/>
      <table className="table table-striped table-bordered">
      <thead>
      <th>№</th>
      <th>Название проекта</th>
      <th>Платёжный метод</th>
      <th>Дата передачи</th>
      <th>Статус</th>
      <th>Пользователь</th>
      <th>Оплаченные средства</th>
      <th>Заказ</th>
      </thead>
      <tbody>
      {
        data.map((data) => {
          var s1=data.transaction.project.name.toLowerCase().indexOf(search.toLowerCase())!=-1;
          var s2=data.transaction.payment_method.name.toLowerCase().indexOf(search.toLowerCase())!=-1;
          var s3=data.transaction.status.toLowerCase().indexOf(search.toLowerCase())!=-1;
          var s4=data.user.id.toLowerCase().indexOf(search.toLowerCase())!=-1;
          var s5=(data.user.email)&&data.user.email.toLowerCase().indexOf(search.toLowerCase())!=-1;
          if(search!="" && !(s1 || s2 ||s3 || s4 || s5)) return null;
          i++;
          refundReason='';
          purchaseInfo='';
          switch(data.transaction.status){
              case 'canceled':
              statusStyle={color: 'red'};
              if(data.transaction.refund_reason!=null) refundReason='('+data.transaction.refund_reason+')';
            break;
            case 'done':
              statusStyle={color: 'green'}
              break;
            default:
             statusStyle={color: 'blue'}
             break;
          }
          if(data.purchase.virtual_currency.amount!=0) purchaseInfo="Вирт. валюта: "+data.purchase.virtual_currency.amount+" "+data.purchase.virtual_currency.name+" \n";
          if(data.purchase.virtual_items!=null) purchaseInfo+="Вирт. предметы: "+data.purchase.virtual_items+" \n";
          if(data.purchase.pin_codes.amount!=null) purchaseInfo+="Пин-коды: "+data.purchase.pin_codes.content+" \n";
          if(data.purchase.simple_checkout.amount!=0) purchaseInfo+="Simple checkout: "+data.purchase.simple_checkout.amount+" "+data.purchase.simple_checkout.currency+" \n";
          if(data.purchase.subscription.name!=null) purchaseInfo+="Подписки: "+data.purchase.subscription.name+" ";
        var myDate=new Date(data.transaction.transfer_date);
        return( <tr>
        <td>{i}</td>
        <td>{data.transaction.project.name}</td>
        <td>{data.transaction.payment_method.name}</td>
        <td>{('0' + myDate.getDate()).slice(-2) + "." +  ('0' + (myDate.getMonth()+1)).slice(-2) + "." + myDate.getFullYear()+" "+('0' + myDate.getHours()).slice(-2)+":"+('0' + myDate.getMinutes()).slice(-2)+":"+('0' + myDate.getSeconds()).slice(-2)}</td>
        <td><span style={statusStyle}>{data.transaction.status}</span><br/>{refundReason}</td>
        <td>{data.user.id}<br />{data.user.email}</td>
        <td>{data.payment_details.payment.amount} {data.payment_details.payment.currency}</td>
        <td>{purchaseInfo}</td>
        </tr>);
      })
    }
      </tbody>
      </table>
      </div>
      </div>
    );
  }
}

export default transactionTable;
