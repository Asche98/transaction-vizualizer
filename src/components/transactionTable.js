import React from 'react';
import data from '../data.json';

class transactionTable extends React.Component{
  render(){
    var refundReason='';
    var purchaseInfo='';
    var statusStyle;
    return(
      <div class="container">
      <div class="col-lg-12"><h3 className="tableHeader">Таблица транзакций</h3></div>
      <div class="col-lg-12">
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
        data.map((data,i) => {
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
        <td>{i+1}</td>
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
