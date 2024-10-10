import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-coin-detail-buy-order',
  standalone: true,
  imports: [
    NgbModule,
    RouterLink
  ],
  templateUrl: './coin-detail-buy-order.component.html',
  styleUrl: './coin-detail-buy-order.component.css'
})
export class CoinDetailBuyOrderComponent {
  @Input() data:any;
  @Input() hover_color:any;
}
