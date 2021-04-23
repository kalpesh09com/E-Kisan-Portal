import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailsService {

  constructor(private httpclient: HttpClient) { }

  //show order details
  getData() {
    return this.httpclient.get("http://localhost:8080/getOrderDetails");
  }

  //show order detais by user id
  getDataByUserId(id: any) {
    return this.httpclient.get("http://localhost:8080/getOrderDataByuserId/" + id);
  }

  //saving the order details
  saveData(data: any) {
    return this.httpclient.post("http://localhost:8080/saveOrderDetails", data);
  }

    updateOrderDetails(id:any,data:any)
    {
        return this.httpclient.put("http://localhost:8080/updateOrderDetailsById/"+id, data)
    }

    getDataByOrderId(id:any)
    {
        return this.httpclient.get("http://localhost:8080/getOrderDataByOrderId/"+id)
    }

}