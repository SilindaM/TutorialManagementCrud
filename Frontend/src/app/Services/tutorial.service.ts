import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import {  Tutorial} from "src/app/Model/tutorial";

const baseUrl="http://localhost:8080/api/tutorials/";

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http:HttpClient) { }

  //get All tutorials
  getAll():Observable<Tutorial[]>{
    return this.http.get<Tutorial[]>(baseUrl);
  }
  //get tutorial by id
  getById(id:any):Observable<Tutorial>{
    return this.http.get<Tutorial>(`${baseUrl}/${id}`);
  }
  //create new tutorial
  createTutorial(data:any):Observable<any>{
    return this.http.post<any>(baseUrl,data);
  }
  //update Tutorial
  updateTutorial(id:any,data:any):Observable<any>{
    return this.http.put(`${baseUrl}/${id}`,data);
  }
  //delete
  deleteById(id:any):Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`);
  }
  //delete All
  deleteAll():Observable<any>{
    return this.http.delete(baseUrl);
  }
  //find by specific title
  findByTitle(title:any):Observable<Tutorial[]>{
    return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`)
  }
}