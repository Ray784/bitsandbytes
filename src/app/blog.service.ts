import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BlogService {

  constructor(private http: HttpClient) { }
  getBlogurl = 'https://major-app.herokuapp.com/getBlog';

  getBlog(): Observable<any> {
    return this.http.get(this.getBlogurl);
  }
}