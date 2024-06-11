import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BeanFlavor } from '../interfaces/bean-flavor';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  private url = 'http://localhost:3000';
  
  createBeanFlavor<T>(item: T): Observable<BeanFlavor> {
    return this.http.post<BeanFlavor>(`${this.url}/bean-flavor`, item);
  }

  updateBeanFlavor(id: string, item: BeanFlavor): Observable<BeanFlavor> {
    return this.http.patch<BeanFlavor>(`${this.url}/bean-flavor/${id}`, item);
  }

  deleteBeanFlavor(id: string): Observable<BeanFlavor> {
    return this.http.delete<BeanFlavor>(`${this.url}/bean-flavor/${id}`);
  }

  getBeanFlavors(): Observable<BeanFlavor[]> {
    return this.http.get<BeanFlavor[]>(`${this.url}/bean-flavor`);
  }
}
