import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CourseCategory } from '../models/course-category.model';
import { environment } from '../../../environments/environment';
import { Center } from '../models/center.model';

@Injectable({
  providedIn: 'root'
})
export class CourseCategoryService {

  private baseUrl = 'http://localhost:8080/api/course-categories';

  constructor(private http: HttpClient) { }

  getAllCourseCategories(): Observable<CourseCategory[]> {
    return this.http.get<CourseCategory[]>(this.baseUrl);
  }

  getCourseCategoryById(id: number): Observable<CourseCategory> {
    return this.http.get<CourseCategory>(`${this.baseUrl}/${id}`);
  }

  postCourseCategory(data: CourseCategory): Observable<CourseCategory> {
    return this.http.post<CourseCategory>(this.baseUrl, data);
  }

  updateCategory(id: number, data: CourseCategory): Observable<CourseCategory> {
    return this.http.put<CourseCategory>(`${this.baseUrl}/${id}`, data);
  }

  deleteCategoryById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}
