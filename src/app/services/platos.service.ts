import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatosService {

  url: string = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  async post(param: any){
    return this.http.post(this.url+'platos', param);
  };

  async get(){
    return this.http.get(this.url+ 'platos');
  };

  async delete(param: any){
    return this.http.delete(this.url+`platos/${param}`);
  };

  async put(param: any){
    return this.http.put(this.url+`platos/${param}`, param);
  };
}
