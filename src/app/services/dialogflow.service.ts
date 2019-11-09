import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DialogflowService {
  private baseURL: string = "https://api.dialogflow.com/v1/query?v=20150910";
  private token: string = environment.token;

  constructor(private http: HttpClient) { }


  public getResponse(query: string) {
    let data = {
      query: query,
      lang: 'en',
      sessionId: '12345'
    }
    return this.http
      .post(`${this.baseURL}`, data, { headers: new HttpHeaders({ Authorization: `Bearer ${this.token}` }) })

  }
  public getHeaders() {
    let headers = new HttpHeaders();
    headers.set('Authorization', `Bearer ${this.token}`);
    return headers;
  }
}
