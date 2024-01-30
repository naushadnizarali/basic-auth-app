/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TApiResponse } from '@shared/interfaces';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiHelperService {
  constructor(private readonly http: HttpClient) {}

  private get apiHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      //Authorization: `Bearer ${localStorage.getItem(LocalStorageConstants.ACCESS_TOKEN) ?? ''}`,
    });
  }

  async getRaw(
    url: string,
    params?: Record<string, string | number | boolean>
  ): Promise<TApiResponse> {
    try {
      const response = await lastValueFrom(
        this.http.get(url, {
          headers: this.apiHeaders,
          responseType: 'text',
          params,
        })
      );
      return {
        isSuccess: true,
        data: response,
        statusCode: 200,
      };
    } catch (error: any) {
      return {
        isSuccess: false,
        message: error?.error?.message,
        statusCode: error?.status,
        stackTrace: error?.error,
      };
    }
  }

  async downloadFile(
    endpoint: string,
    fileName: string,
    fileType: string = 'application/pdf',
    params?: Record<string, string | number | boolean>
  ): Promise<void> {
    try {
      const response = await lastValueFrom(
        this.http.get(endpoint, {
          headers: this.apiHeaders,
          responseType: 'blob',
          params,
        })
      );
      const blob = new Blob([response], { type: fileType });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error: any) {
      console.error('File download failed:', error);
      throw error;
    }
  }

  async get<T>(
    url: string,
    params?: Record<string, string | number | boolean>
  ): Promise<TApiResponse<T>> {
    try {
      const response = await lastValueFrom(
        this.http.get<T>(url, {
          headers: this.apiHeaders,
          params,
        })
      );
      return {
        isSuccess: true,
        data: response,
        statusCode: 200,
      };
    } catch (error: any) {
      return {
        isSuccess: false,
        message: error?.error?.message,
        statusCode: error?.status,
        stackTrace: error?.error,
      };
    }
  }

  async post<T>(
    url: string,
    body?: unknown,
    params?: Record<string, string | number | boolean>
  ): Promise<TApiResponse<T>> {
    try {
      const response = await lastValueFrom(
        this.http.post<T>(url, body, {
          headers: this.apiHeaders,
          params,
        })
      );
      return {
        isSuccess: true,
        data: response,
        statusCode: 200,
      };
    } catch (error: any) {
      return {
        isSuccess: false,
        message: error?.error?.message,
        statusCode: error?.status,
        stackTrace: error?.error,
      };
    }
  }

  async put<T>(
    url: string,
    body?: unknown,
    params?: Record<string, string | number | boolean>
  ): Promise<TApiResponse<T>> {
    try {
      const response = await lastValueFrom(
        this.http.put<T>(url, body, {
          headers: this.apiHeaders,
          params,
        })
      );
      return {
        isSuccess: true,
        data: response,
        statusCode: 200,
      };
    } catch (error: any) {
      return {
        isSuccess: false,
        message: error?.error?.message,
        statusCode: error?.status,
        stackTrace: error?.error,
      };
    }
  }

  async delete<T>(
    url: string,
    params?: Record<string, string | number | boolean>
  ): Promise<TApiResponse<T>> {
    try {
      const response = await lastValueFrom(
        this.http.delete<T>(url, {
          headers: this.apiHeaders,
          params,
        })
      );
      return {
        isSuccess: true,
        data: response,
        statusCode: 200,
      };
    } catch (error: any) {
      return {
        isSuccess: false,
        message: error?.error?.message,
        statusCode: error?.status,
        stackTrace: error?.error,
      };
    }
  }
}
