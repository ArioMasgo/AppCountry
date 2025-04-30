import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-app-footer',
  imports: [],
  templateUrl: './app-footer.component.html',
  styleUrl: './app-footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppFooterComponent {

  date = signal(new Date().getFullYear());
 }
