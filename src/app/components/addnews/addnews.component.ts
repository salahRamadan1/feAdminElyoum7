import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminServiceService } from 'src/app/service/AdminService/admin-service.service';

@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.css'],
})
export class AddnewsComponent implements OnInit {
  constructor(private _AdminServiceService: AdminServiceService) {}
  ngOnInit(): void {
    this.getNewsApi();
  }
  formAddNews: FormGroup = new FormGroup({
    addressHeadline: new FormControl(null, Validators.required),
    ExplanationOfTheNews: new FormControl(null, Validators.required),
    newsType: new FormControl(null, Validators.required),
  });
  //  send news for api
  img: any;
  choosePhoto(event: any) {
    this.img = event.target.files[0];
  }
  errSendNews: string = '';
  sendNews() {
    let newsType = (<HTMLSelectElement>document.getElementById('newsType'))
      .value;
    let addressHeadline = (<HTMLInputElement>(
      document.getElementById('addressHeadline')
    )).value;
    let ExplanationOfTheNews = (<HTMLInputElement>(
      document.getElementById('ExplanationOfTheNews')
    )).value;
    let fileMe = new FormData();
    fileMe.append('addressHeadline', addressHeadline);
    fileMe.append('newsType', newsType);
    fileMe.append('ExplanationOfTheNews', ExplanationOfTheNews);
    fileMe.append('Image', this.img);
    this._AdminServiceService.addNews(fileMe).subscribe((res) => {
      if (res.message == 'success') {
        this.getNewsApi();

        (<HTMLInputElement>document.getElementById('addressHeadline')).value =
          '';
        (<HTMLInputElement>(
          document.getElementById('ExplanationOfTheNews')
        )).value = '';
      } else {
        this.errSendNews = res.message;
      }
    });
  }

  // get news from api
  dataNews: any[] = [];
  getNewsApi() {
    this._AdminServiceService.getNews().subscribe((res) => {
      console.log(res);
      if (res.message == 'success') {
        this.dataNews = res.news;
      }
    });
  }
  // delete
  deleteNews(id: string) {
    let data = { _id: id };

    this._AdminServiceService.deleteNewsApi(data).subscribe((res) => {
      console.log(res);

      if (res.message == 'success') {
        this.getNewsApi();
        this.dataNews = [];
      }
    });
  }

  dataOneNews: any[] = [];
  getNewsOne(id: string) {
    let data = { _id: id };
    this._AdminServiceService.getSpacialNews(data).subscribe((res) => {
      this.dataOneNews.push(res.news);
    });
  }

  remove() {
    this.dataOneNews = [];
  }
}
