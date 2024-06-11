import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BeanFlavor } from '../interfaces/bean-flavor';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  private url = 'http://localhost:3000/bean-flavor';
  createBeanFlavor<T>(item: T): Observable<T> {
    return this.http.post<T>(`${this.url}`, item);
  }

  updateBeanFlavor(id: string, item: any): Observable<any> {
    return this.http.patch<any>(`${this.url}/${id}`, item);
  }

  deleteBeanFlavor(id: string): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }

  getBeanFlavors(): Observable<BeanFlavor[]> {
    return this.http.get<BeanFlavor[]>(`${this.url}`);
  }
}
