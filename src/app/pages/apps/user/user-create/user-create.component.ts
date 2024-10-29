import { UserService } from './../../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})
export class UserCreateComponent  implements OnInit{

  createUserForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  
  ngOnInit(): void {
    this.createUserForm = this.fb  .group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],

    });
  }

  ajouterRegion() {
    if (this.createUserForm.valid) {
      // Créez un objet Region à partir des valeurs du formulaire
      const nom_region = this.createUserForm.get('nom_region')?.value;
      const data ={
      nom_region: nom_region,
     }
     console.log("_______________Region saisie est ",nom_region)

      this.userService.addUser(data).subscribe(
        response => {
          Swal.fire('Succès', 'Ajout réussi', 'success').then(() => {
            this.createUserForm.reset(); // Réinitialiser le formulaire après ajout
           
          });
        },
        error => {
          console.error('Erreur lors de l\'ajout :', error);
        }
      );
    } else {
      Swal.fire('Erreur', 'Veuillez remplir tous les champs obligatoires.', 'error');
    }
  }


  

}
