import { Component } from '@angular/core';
import { MyHttpClientService } from '../../service/my-http-client.service';
import { Message } from '../../models/message';

@Component({
  selector: 'app-private-content',
  imports: [],
  templateUrl: './private-content.component.html',
  styleUrl: './private-content.component.css'
})
export class PrivateContentComponent {

content: string = "";

constructor(private http: MyHttpClientService) {}

ngOnInit(): void {
  this.http.getPrivateMessage().subscribe((data: Message) => this.content = data.message);
}

}
