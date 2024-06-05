import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-foto-pokemon',
  templateUrl: './foto-pokemon.component.html',
  styleUrls: ['./foto-pokemon.component.scss'],
  imports: [NgClass],
})
export class FotoPokemonComponent {
  @Input() src: string | undefined;
  @Input() alt: string | undefined;
}
