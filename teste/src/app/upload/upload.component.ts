import { HttpClient, HttpEventType} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  selectedFile: File = null;
  // ainda não tem api
  url: string[] = [];
  private http;

  // constructor(private http: HttpClient) { 
  // }

  ngOnInit(): void {
  }

  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
    console.log(event);
  }

  onUpload(){
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('url', fd, {
      reportProgress: true,
      observe: 'events'
    }).subscribe(event =>{
        if(event.type === HttpEventType.UploadProgress){
          console.log('Upload Progress: ' + Math.round(event.loaded / event.total) * 100 + '%');
        }else if (event.type === HttpEventType.Response){
          console.log(event);
        }
        console.log(event);
    });
  }
}

