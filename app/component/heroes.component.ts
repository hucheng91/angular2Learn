/**
 * Created by Administrator on 6/25/2017.
 */
import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'


import {Hero} from '../data/hero'
import {HeroService} from  '../service/hero.service'

@Component({
    moduleId : module.id,
    selector : 'my-heroes',
    templateUrl : '../tpl/heroes.component.html',
    styleUrls : ['../tpl/heroes.component.css']
})

export class  HeroesComponent implements  OnInit{
    ngOnInit(): void {
        this.getHeroes();
    }

    heroes : Hero[];
    selectedHero : Hero;

    constructor(
        private  heroService : HeroService,
        private  router : Router
    ){}

    getHeroes():void{
            this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.heroService.create(name)
            .then(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            });
    }

    delete(hero: Hero): void {
        this.heroService
            .delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            });
    }


    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}