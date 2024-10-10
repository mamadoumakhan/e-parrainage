import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

interface chartType {
  id: string,
  data: {
    img: string,
    mssg: string,
    time: string,
    send: boolean
  }[]

}

interface listType {
  id: string,
  image: string,
  name: string,
  msg: string,
  time: string,
}
@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    NgbModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  active = 1;
  activeChatList: any = '';
  chatBoxData: any = '';
  messageChatList: any = '';
  ngOnInit() {
    this.opneChat('person2');
  }
  text: String = '';


  sendMessage() {
    if (!this.text) {
      return;
    }
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });
    let msgData = {
      img: 'assets/images/profile/pic1.jpg',
      mssg: (this.text).toString(),
      time: time,
      send: false
    }
    let filter_id = this.chatMessage.filter((val) => val.id === this.activeChatList);
    if (filter_id.length != 0) {
      filter_id[0].data.push(msgData);
    } else {
      this.chatMessage.push({
        id: this.activeChatList,
        data: [msgData]
      });
      setTimeout(() => {
        this.opneChat(this.activeChatList);
      }, 100);
    }
  }

  opneChat(id: any) {
    this.activeChatList = id;
    this.AllMessage.map((val: any, i: any) => {
      if (id == val.id) {
        this.chatBoxData = val;
      }
    });
    const data = this.AllMessage.filter((val: any) => val.id === id);
    this.chatMessage.map((val) => {
      if (data[0].id == val.id) {
        this.messageChatList = val;
      }
    });
    if (data[0].id != this.messageChatList.id) {
      this.messageChatList = [];
    };
  }
  chatMessage: chartType[] = [
    {
      id: 'person1',
      data: [
        {
          img: 'assets/images/users/pic1.jpg',
          mssg: 'Sed ut perspiciatis unde omnis iste natus error',
          time: '4.30 AM',
          send: true
        },
        {
          img: 'assets/images/profile/pic1.jpg',
          mssg: ' Neque porro quisquam est, qui dolorem ipsum quia',
          time: '9.30 AM',
          send: false
        },
        {
          img: 'assets/images/profile/pic1.jpg',
          mssg: ' eum iure reprehenderit qui in ea',
          time: '9.31 AM',
          send: false
        },
        {
          img: 'assets/images/users/pic1.jpg',
          mssg: 'Hey, check my design update last night.',
          time: '9.32 AM',
          send: true
        }
      ],
    },
    {
      id: 'person2',
      data: [
        {
          img: 'assets/images/users/pic2.jpg',
          mssg: '"But I must explain to you',
          time: '9.20 AM',
          send: true
        },
        {
          img: 'assets/images/profile/pic1.jpg',
          mssg: '"Sed ut perspiciatis unde omnis',
          time: '9.25 AM',
          send: false
        },
        {
          img: 'assets/images/users/pic2.jpg',
          mssg: 'Tell me what you think and if that is OK.',
          time: '9.20 AM',
          send: true
        }
      ]
    },
    {
      id: 'person3',
      data: [
        {
          img: 'assets/images/profile/pic1.jpg',
          mssg: ' Neque porro quisquam est, qui dolorem ipsum quia',
          time: '9.30 AM',
          send: false
        },
        {
          img: 'assets/images/profile/pic1.jpg',
          mssg: ' eum iure reprehenderit qui in ea',
          time: '9.31 AM',
          send: false
        },
        {
          img: 'assets/images/users/pic3.jpg',
          mssg: 'Hey, check my design update last night.',
          time: '9.32 AM',
          send: true
        }
      ],
    },
    {
      id: 'person4',
      data: [
        {
          img: 'assets/images/users/pic3.jpg',
          mssg: 'Hay !',
          time: '9.30 AM',
          send: false
        },
        {
          img: 'assets/images/users/pic4.jpg',
          mssg: 'Hello !',
          time: '9.32 AM',
          send: true
        }
      ],
    },
  ]

  AllMessage: listType[] = [
    {
      id: 'person1',
      image: 'assets/images/users/pic1.jpg',
      name: 'Harry Marten',
      msg: 'Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor',
      time: 'Online'
    },
    {
      id: 'person2',
      image: 'assets/images/users/pic2.jpg',
      name: 'Baby Joies',
      msg: 'Wasup for the third time like is you bling bitch',
      time: 'Online'
    },
    {
      id: 'person3',
      image: 'assets/images/users/pic3.jpg',
      name: 'Alexendra jr.',
      msg: 'It is a long established fact that a reader will be distracted by the readable',
      time: 'Online'
    },
    {
      id: 'person4',
      image: 'assets/images/users/pic4.jpg',
      name: 'Alexa Hanery',
      msg: 'There are many variations of passages of Lorem Ipsum available, but the',
      time: '15m ago'
    },
    {
      id: 'person5',
      image: 'assets/images/users/pic5.jpg',
      name: 'Roberto Charloz',
      msg: '"But I must explain to you how all this mistaken idea of denouncing pleasure',
      time: '21m ago'
    },
    {
      id: 'person6',
      image: 'assets/images/users/pic6.jpg',
      name: 'Verla Morgano',
      msg: 'Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      time: '10m ago'
    },
    {
      id: 'person7',
      image: 'assets/images/users/pic7.jpg',
      name: 'Tinks Sr.',
      msg: 'Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      time: '25m ago'
    },
    {
      id: 'person8',
      image: 'assets/images/users/pic8.jpg',
      name: 'Hans man',
      msg: 'Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      time: '25m ago'
    },
    {
      id: 'person9',
      image: 'assets/images/profile/Untitled-2.jpg',
      name: 'Deeps Gr.',
      msg: 'Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      time: '16m ago'
    },
    {
      id: 'person10',
      image: 'assets/images/profile/Untitled-2.jpg',
      name: 'Sal Piggee',
      msg: 'There are many variations of passages of Lorem Ipsum available, but the',
      time: '15m ago'
    }
  ]

  tabpanel: listType[] = [
    {
      id: 'person11',
      image: 'assets/images/users/pic1.jpg',
      name: 'Harry Marten',
      msg: 'Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor',
      time: 'Online'
    },
    {
      id: 'person12',
      image: 'assets/images/users/pic2.jpg',
      name: 'Baby Joies',
      msg: 'Wasup for the third time like is you bling bitch',
      time: '29m ago'
    }
  ]

  archivedList: listType[] = [
    {
      id: 'person13',
      image: 'assets/images/users/pic5.jpg',
      name: 'Roberto Charloz',
      msg: '"But I must explain to you how all this mistaken idea of denouncing pleasure',
      time: '5hr ago'
    },
    {
      id: 'person14',
      image: 'assets/images/users/pic6.jpg',
      name: 'Verla Morgano',
      msg: 'Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      time: '1day ago'
    }
  ]
}
