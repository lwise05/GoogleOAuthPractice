import { Component } from '@angular/core';
import { MyHttpClientService } from '../../service/my-http-client.service';
import { Message } from '../../models/message';

@Component({
  selector: 'app-public-content',
  imports: [],
  templateUrl: './public-content.component.html',
  styleUrl: './public-content.component.css'
})
export class PublicContentComponent {

content: string = "";
constructor(private http: MyHttpClientService){}

ngOnInit(): void {
  this.http.getMessages().subscribe((data: Message) => {
    this.content = data.message;
  });

};

}
