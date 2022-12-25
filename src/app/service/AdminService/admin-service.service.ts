import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminServiceService {
  constructor(private _HttpClient: HttpClient) {}
  basUrl: string = 'http://localhost:3000/';

  addNews(obj: any): Observable<any> {
    return this._HttpClient.post(this.basUrl + 'News', obj);
  }

  getNews(): Observable<any> {
    return this._HttpClient.get(this.basUrl + 'News');
  }
  deleteNewsApi(obj: any): Observable<any> {
    return this._HttpClient.delete(this.basUrl + 'News', obj);
  }
  getSpacialNews(obj: any): Observable<any> {
    return this._HttpClient.post(this.basUrl + 'News/getNewsSpicily', obj);
  }
  getNewsSpicilyUserNotToken(obj: any): Observable<any> {
    return this._HttpClient.post(
      this.basUrl + 'userNews/getNewsSpicilyForUser',
      obj
    );
  }
  // التوثيق

  getUserNewsForAdmin(obj: any): Observable<any> {
    return this._HttpClient.post(this.basUrl + 'News/getUserNewsForAdmin', obj);
  }

  updateToFalse(obj: any): Observable<any> {
    return this._HttpClient.patch(this.basUrl + 'News', obj);
  }
}
