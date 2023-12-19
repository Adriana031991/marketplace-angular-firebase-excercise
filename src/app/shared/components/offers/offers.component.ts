import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'marketplace-offers',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OffersComponent implements OnInit {

  ngOnInit(): void { }

}
