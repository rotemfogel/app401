import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Violation } from './violation';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'violations';
  violations = [];

  private url = 'http://localhost:8088/api/v1/violations?hoursBack=88888888&serviceId=22712304361904&severity=1%7C2%7C3&hidden=false&useCache=false&maxRows=150&sessionId=bd6f9305';

  constructor(private http: HttpClient,
              private toast: ToastrService) {
    this.http.get<Violation[]>(this.url).subscribe(
      (data) => {
        this.violations = data;
      },
      (res) => {
        this.toast.error(JSON.stringify(res));
      }
    );
  }
}
