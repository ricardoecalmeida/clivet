import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animais } from '../models/animais';

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  animaisUrl: string = "http://localhost:3000/animais";

  animais: Array<Animais> = [];

  constructor(private http: HttpClient) { }

  // CRUD

  getAll(): Observable<Animais[]> {
    return this.http.get<Animais[]>(this.animaisUrl);
  }

  getById(id: string): Observable<Animais> {
    return this.http.get<Animais>(`${this.animaisUrl}/${id}`);
  }

  create(animais: Animais): Observable<Animais> {
    return this.http.post<Animais>(this.animaisUrl, animais);
  }

  update(animais: Animais): Observable<Animais> {
    return this.http.put<Animais>(`${this.animaisUrl}/${animais.id}`, animais);
  }

  delete(animais: Animais): Observable<Animais> {
    return this.http.delete<Animais>(`${this.animaisUrl}/${animais.id}`);
  }

}
