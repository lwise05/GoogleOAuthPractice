import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyHttpClientService } from './service/my-http-client.service';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { PublicContentComponent } from "./components/public-content/public-content.component";
import { PrivateContentComponent } from "./components/private-content/private-content.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, LoginFormComponent, PublicContentComponent, PrivateContentComponent],
})
export class AppComponent {

  title: string = 'OAuthGoogleFrontEnd';

  componentToShow: string = "welcome";

  constructor(private http: MyHttpClientService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        if (params["code"] !== undefined) {
          this.http.getToken(params["code"]).subscribe(result => {
            if (result === true) {
              this.componentToShow = "private";
            } else {
              this.componentToShow = "public";
            }
          });
        }
      }
    );
  }

}
