import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  categoriasCollection = { count: 0, data: []}

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.firebaseService.getCategoria().subscribe(resp=>{
      this.categoriasCollection.data = resp.map((e:any)=>{
        return{
          nombre: e.payload.doc.data().nombre,
        }
      })
    },
      error=>{
        console.error(error);
      }
    );
  }

}
