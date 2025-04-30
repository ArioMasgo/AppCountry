import { ChangeDetectionStrategy, Component, EventEmitter, input, output, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent {

    value = output<string>();
    placeholder = input.required<string>();

    
 
 }
