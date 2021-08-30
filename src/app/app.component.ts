import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataHtml = `
    <p style="text-align: right;" data-mce-style="text-align: right;"><img style="text-align: right;" src="http://10.100.10.33/assets/images/logo-new.png" width="120" alt="" data-mce-src="http://10.100.10.33/assets/images/logo-new.png" data-mce-style="text-align: right;"></p>
    <p style="text-align: right;" data-mce-style="text-align: right;"><strong>Unit Dummy 01</strong></p>
  `;
  onSave() {
    console.log(this.dataHtml);
  }
  onPrint() {
    window.print();
  }
}
