import { Injectable } from '@angular/core';

import { Hero } from './hero';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HeroService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private heroesUrl = 'api/heroes';  // URL to web api

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

  /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  // getHero(id: number): Observable<Hero> {
  //   this.messageService.add(`HeroService: fetched hero id=${id}`);
  //   return of(HEROES.find(hero => hero.id === id));
  // }
}
