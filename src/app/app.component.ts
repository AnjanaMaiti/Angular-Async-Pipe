import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  NODE_REPO$ : Observable<any[]>;
  ANG_REPO:any;

  constructor(private http: HttpClient){}
  ngOnInit(){
      const params = new HttpParams();
      params.set("page", "1");
      params.set("pageSize", "3");
      
      const path1 = 'http://api.github.com/search/repositories?q=angular';
      this.ANG_REPO = this.http.get<any>(path1)
      .pipe(
        map(data => data.items) //iterating by items array
      )

      const path2 = 'http://api.github.com/search/repositories?q=node';
      this.NODE_REPO$ = this.http.get<any[]>(path2, {params}); 
  }
}
