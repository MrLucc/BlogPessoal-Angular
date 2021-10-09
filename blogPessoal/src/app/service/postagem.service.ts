import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>("https://blogmrlucc.herokuapp.com/postagem/todes",this.token)
  }

  getByIdPostagem(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`https://blogmrlucc.herokuapp.com/postagem/${id}`)
  }

  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>("https://blogmrlucc.herokuapp.com/postagem/save", postagem, this.token)
  }

  putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>("https://blogmrlucc.herokuapp.com/postagem/update", postagem, this.token)
  }

  deletePostagem(id: number){
    return this.http.delete(`https://blogmrlucc.herokuapp.com/postagem/deletar/${id}`)
  }

}
