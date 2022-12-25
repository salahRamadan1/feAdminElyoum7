import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/service/AdminService/admin-service.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  constructor(private _AdminServiceService: AdminServiceService) {}

  ngOnInit(): void {
    this.getData();
  }
  dataFalse: any[] = [];
  errFalse: string = '';

  getData() {
    this._AdminServiceService
      .getUserNewsForAdmin({ ConfirmTheNews: false })
      .subscribe((res) => {
        console.log(res);

        if (res.message == 'success') {
          this.dataFalse = res.news;
        } else {
          this.errFalse = res.message;
        }
      });
  }

  updateFalseToTrue(id: string) {
    console.log(id);
    let data = {
      _id: id,
      ConfirmTheNews: true,
    };

    this._AdminServiceService.updateToFalse(data).subscribe((res) => {
      console.log(res);
      if (res.message == 'success') {
        this.getData();
        this.dataFalse = [];
      }
    });
  }
}
