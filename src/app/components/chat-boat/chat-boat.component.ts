import { Component, OnInit } from '@angular/core';
import { DialogflowService } from 'src/app/services/dialogflow.service';
export interface messages {
  message: string;
  type: string;
  time: any;
}
@Component({
  selector: 'app-chat-boat',
  templateUrl: './chat-boat.component.html',
  styleUrls: ['./chat-boat.component.scss']
})
export class ChatBoatComponent implements OnInit {
  messages: messages[] = new Array<messages>();
  textMessage: string;

  constructor(private dialogFlowService: DialogflowService) { }

  ngOnInit() {
  }

  scrollMessageDiv() {
    var objDiv = document.getElementById("chat_messages");
    objDiv.scrollTop = objDiv.scrollHeight;
  }
  sendMessage(message: string) {
    let date = new Date();
    this.messages.push({ message: message, type: 'sender', time: `${date.getHours()}:${date.getMinutes()}` });
    this.getResponse(message);
    setTimeout(() => {
      this.textMessage = "";
      this.scrollMessageDiv();
    }, 10);
  }

  getResponse(message: string) {
    let date = new Date();
    this.dialogFlowService.getResponse(message).subscribe(response => {
      this.messages.push({ message: response["result"].fulfillment.speech, type: 'bot', time: `${date.getHours()}:${date.getMinutes()}` });
      setTimeout(() => {
        this.scrollMessageDiv();
      }, 10);
    });
  }

}
