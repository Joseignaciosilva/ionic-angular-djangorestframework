import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormularioService {
  private apiUrl = 'http://127.0.0.1:8000/api/productos/';  // URL del backend

  constructor(private http: HttpClient) {}

  enviarFormulario(formData: FormData): Observable<any> {
    const headers = new HttpHeaders({});

    return this.http.post(this.apiUrl, formData, { headers });
  }
}
