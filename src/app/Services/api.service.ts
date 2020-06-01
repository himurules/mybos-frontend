import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://127.0.0.1:8000/api';

  register(data) {
    return this.http.post(`${this.baseUrl}/auth/register`, data);
  }

  login(data) {
    return this.http.post(`${this.baseUrl}/auth/login`, data);
  }

  logout() {
    return this.http.post(`${this.baseUrl}/auth/logout`, null);
  }

  buildingSummary(buildingId) {
    return this.http.get(`${this.baseUrl}/buildings/${buildingId}/summary`);
  }

  casesSummary(buildingId) {
    return this.http.get(`${this.baseUrl}/buildings/${buildingId}/cases-summary`);
  }

  casesAll(buildingId) {
    return this.http.get(`${this.baseUrl}/buildings/${buildingId}/cases`);
  }

  workOrders(buildingId) {
    return this.http.get(`${this.baseUrl}/buildings/${buildingId}/work-orders`);
  }

  actionItems(buildingId) {
    return this.http.get(`${this.baseUrl}/buildings/${buildingId}/action-items`);
  }

  notes(buildingId) {
    return this.http.get(`${this.baseUrl}/buildings/${buildingId}/notes`);
  }

  importantNumbers() {
    return this.http.get(`${this.baseUrl}/important-numbers`);
  }

  activityFeed(buildingId) {
    return this.http.get(`${this.baseUrl}/buildings/${buildingId}/activity-feed`);
  }
}
