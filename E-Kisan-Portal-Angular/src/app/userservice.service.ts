import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private httpclient: HttpClient) { }

  saveUserData(data: any) {
    return this.httpclient.post("http://localhost:8080/addUser", data);
  }

  getData() {
    return this.httpclient.get("http://localhost:8080/getUser");
  }

  getDataById(id: any) {
    return this.httpclient.get("http://localhost:8080/getUserById/" + id);
  }

  deleteData(id: any) {
    return this.httpclient.delete("http://localhost:8080/deleteUserById/" + id);
  }

  updateUserData(id: any, data: any) {
    return this.httpclient.put("http://localhost:8080/updateUserById/" + id, data);
  }

  login(data: any) {
    return this.httpclient.post("http://localhost:8080/login", data);
  }

  forgotPass(data: any) {
    return this.httpclient.post("http://localhost:8080/changePassword", data);
  }


  getMyCartDataById(id:any)
  {
    return this.httpclient.get("http://localhost:8080/getMyCartProductById/" + id);
  }

  saveMyCartProductDetail(data: any) {
    return this.httpclient.post("http://localhost:8080/saveMyCartDetails", data)
  }

  deleteMyCartProduct(id: any) {
    return this.httpclient.delete("http://localhost:8080/deleteMyCartProductById/"+ id)
  }

  updateMyCartProduct(id:any,data:any)
  {
    return this.httpclient.put("http://localhost:8080/updateMyCartProductById/"+id,data)
  }

  getMyCartDataByUserId(id:any)
  {
    return this.httpclient.get("http://localhost:8080/getMyCartProductByUserId/"+id);
  }

  getDataByMobileNumber(id: any) {
    return this.httpclient.get("http://localhost:8080/getAdminByMobileData/" + id);
  }

}
