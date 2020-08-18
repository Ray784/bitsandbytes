import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BlogService {

  constructor(private http: HttpClient) { }
  rootUrl = 'http://localhost:8080';
  getBlogRoute = '/getBlog';

  getBlogs(): Observable<any> {
    return this.http.get(this.rootUrl+this.getBlogRoute);
  }

  getBlog(id): Observable<any> {
    return this.http.get(this.rootUrl+this.getBlogRoute+'/'+id);
  }
}