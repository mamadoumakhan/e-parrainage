import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-coin-detail-sell-order',
  standalone: true,
  imports: [
    NgbModule,
    RouterLink
  ],
  templateUrl: './coin-detail-sell-order.component.html',
  styleUrl: './coin-detail-sell-order.component.css'
})
export class CoinDetailSellOrderComponent {
  @Input() data:any;
  @Input() hover_color:any;
}
