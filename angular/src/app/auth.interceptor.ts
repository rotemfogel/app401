import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
        'Authorization': `Bearer _eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlF6TXhNRFV3TkVaQk5FTXdRa0l6UWtSQlFVWXdSRGMzTTBNd056RXdOVGRHTVRWR1F6RXdOZyJ9.eyJodHRwczovL3d3dy51cHN0cmVhbXNlY3VyaXR5LmlvL21ldGFkYXRhbWV0YWRhdGEiOnsibmFtZSI6ImJyaW9AdXBzdHJlYW1zZWN1cml0eS5pbCIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci84MGViNmYzY2MxZWU1YWY4MzZlNDliN2M5ZTI1ZjkxZD9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRmJyLnBuZyIsInBob25lIjoiKzk3MjUzNTk0OTMxMSJ9LCJuaWNrbmFtZSI6ImJyaW8iLCJuYW1lIjoiYnJpb0B1cHN0cmVhbXNlY3VyaXR5LmlvIiwicGljdHVyZSI6Imh0dHBzOi8vcy5ncmF2YXRhci5jb20vYXZhdGFyLzgwZWI2ZjNjYzFlZTVhZjgzNmU0OWI3YzllMjVmOTFkP3M9NDgwJnI9cGcmZD1odHRwcyUzQSUyRiUyRmNkbi5hdXRoMC5jb20lMkZhdmF0YXJzJTJGYnIucG5nIiwidXBkYXRlZF9hdCI6IjIwMTktMDMtMjZUMDc6MDI6NTUuNzMzWiIsImVtYWlsIjoiYnJpb0B1cHN0cmVhbXNlY3VyaXR5LmlvIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOi8vdXBzdHJlYW1zZWN1cml0eS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NWE5MmFmNWY3MWJjNmQwMjEyNDk3OTAxIiwiYXVkIjoiSTdyWTBvNEVDUlF6OWUwSDIzNnptWnpxd2NEdmhlcGEiLCJpYXQiOjE1NTM1ODM3NzUsImV4cCI6MTU1MzYxNjE3NX0.OSAqsd2uGnM3WEfipa5r25xqaUC6YdPoU9RRdpqViUFO-KJ08Md7ixnWDcAcYsDzzT25vDg0mQq__u48gETDctT-bw34fXBZ-wa584U6wHhip3BR96Y4FcX1WpIlgSQuxZLB2I_ugVVCT5lxw6VQ-HKzhN4zRiuywS5xl7L816OBZ-zHUF522YY9qYPZInGfmEj0NDnncAqrQFzmlzoXerUaVKxLFWUdVbKzLoQUYINWA_2LCY-k_jJhFSfAi4DSduIp7kSbkoHlQJ2YkFoRJ634fEdD4CNnkQoA9EIwKjivrmkUZizdiEj2-bSS19kD7xrMzyZ8UCY_SdqyyXhrIg`,
      },
    });

    return next.handle(req);
  }
}
