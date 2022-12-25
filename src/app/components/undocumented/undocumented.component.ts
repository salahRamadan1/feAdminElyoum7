import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/service/AdminService/admin-service.service';

@Component({
  selector: 'app-undocumented',
  templateUrl: './undocumented.component.html',
  styleUrls: ['./undocumented.component.css'],
})
export class UndocumentedComponent implements OnInit {
  constructor(private _AdminServiceService: AdminServiceService) {}

  ngOnInit(): void {
    this.getData();
  }

  dataTrue: any[] = [];
  errTrue: string = '';

  getData() {
    this._AdminServiceService
      .getUserNewsForAdmin({ ConfirmTheNews: true })
      .subscribe((res) => {
        console.log(res);

        if (res.message == 'success') {
          this.dataTrue = res.news;
        } else {
          this.errTrue = res.message;
        }
      });

   
  }

  updateTrueToFalse(id: string) {
    console.log(id);
    let data = {
      _id: id,
      ConfirmTheNews: false,
    };

    this._AdminServiceService.updateToFalse(data).subscribe((res) => {
      console.log(res);
      if (res.message == 'success') {
        this.getData();
        this.dataTrue = [];
      }
    });
  }
}
