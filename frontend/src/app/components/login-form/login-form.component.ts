import { Component } from '@angular/core';
import { MyHttpClientService } from '../../service/my-http-client.service';

@Component({
  selector: 'app-login-form',
  imports: [],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
 url: string = "";

 constructor(private http: MyHttpClientService){}

 ngOnInit(): void {
  this.http.getLoginUrl().subscribe((data: any) => {
    this.url = data.url;
    console.log(data);
    console.log(this.url);
  });
}

}
