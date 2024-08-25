import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Machine } from '../models/machine.model';

@Injectable({
  providedIn: 'root',
})
export class ProductionLineBaggingService {
  private readonly dataUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getProductionLineData(): Observable<Machine[]> {
    return this.http.get<Machine[]>(this.dataUrl);
  }
}
