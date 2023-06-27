import { Injectable } from '@angular/core';
import {Observable, map} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {CaseRecordDTO} from "../domain/case-record-dto";

@Injectable({
  providedIn: 'root'
})
export class CaseRecordService {

  constructor( private http: HttpClient ) { }

  getCaseRecordsList():  Observable<CaseRecordDTO[]> {
    return this.http.get(environment.apiUrl + '/ecr-manager/ECR').pipe(map((resultList: any) =>
        resultList.map(result => new CaseRecordDTO(result))
      ),
    );
  };

  getRecordDetailsById(recordId: number):  Observable<any> {
    return this.http.get(environment.apiUrl + '/ecr-manager/ECR', {params: new HttpParams()
      .append('id', recordId)}).pipe(map((result: any) =>
        result as Object
      ),
    );
  };

  getRecordHistoryById(recordId: number):  Observable<any> {
    return this.http.get("http://brownunify01.icl.gtri.org:8085/ecr-manager/ECRhistory", {params: new HttpParams()
        .append('id', recordId)}).pipe(map((result: any) =>
        result as Object
      ),
    );
  };

}
