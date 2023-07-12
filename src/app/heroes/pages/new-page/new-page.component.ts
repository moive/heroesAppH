import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [],
})
export class NewPageComponent {
  heroForm = new FormGroup({
    id: new FormControl(''),
    superhero: new FormControl<string>(''),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl(''),
  });

  publishers = [
    { id: 'DC-Comics', desc: 'DC-Comics' },
    { id: 'Marvel Comics', desc: 'Marvel Comics' },
  ];

  constructor(private heroesService: HeroesService) {}

  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero;
    return hero;
  }

  onSubmit(): void {
    // console.log({
    //   formIsValid: this.heroForm.valid,
    //   value: this.heroForm.value,
    // });
    if (this.heroForm.invalid) return;
    // this.heroesService.updateHero(this.heroForm.value as Hero);
  }
}
