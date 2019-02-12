import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero.class';
import { HeroService } from '../services/hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  
  constructor(private service: HeroService) { }

  ngOnInit() {
    this.getHeros();
  }

  getHeros(): void{
    this.service.getHeros()
    .subscribe(data => this.heroes = data);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.service.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.service.deleteHero(hero).subscribe();
  }
 

}
