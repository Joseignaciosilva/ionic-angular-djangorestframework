import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormularioService } from '../servicios/formulario.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  myForm: FormGroup;
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder, 
    private formularioService: FormularioService ) 

    {
    this.myForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  alertButtons = ['OK'];

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  submitForm() {
    const formData = new FormData();
    formData.append('nombre', this.myForm.get('nombre')?.value);
    formData.append('descripcion', this.myForm.get('descripcion')?.value);
    if (this.selectedFile) {
      formData.append('imagen', this.selectedFile, this.selectedFile.name);
    }

    // formData para enviar al backend :)
    this.formularioService.enviarFormulario(formData).subscribe(
      (response) => {
        console.log('Formulario enviado :)', response);
      },
      (error) => {
        console.log('Error al enviar formulario :(', error);
      }
    )
  }
  // para resetear el formulario
    public resetForm() {
     this.myForm.reset();
}

}