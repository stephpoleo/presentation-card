import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css',
})
export class PresentationComponent {
  nombre: string = 'Miguelina Ruiz';
  titulo: string =
    'Directora de la ofina de turismo de la Republica Dominicana';
  descripcion: string =
    'Soy un apasionado desarrollador con experiencia en el desarrollo de aplicaciones web y móviles. Me encanta aprender nuevas tecnologías y enfrentar nuevos desafíos.';
  email: string = 'juan.perez@example.com';
  telefono: string = '+123 456 7890';
  linkedin: string = 'https://www.linkedin.com/in/juanperez';

  saveContact(type: string) {
    switch (type) {
      case 'instagram':
        alert('Información de Instagram guardada.');
        break;
      case 'linkedin':
        alert('Información de LinkedIn guardada.');
        break;
      case 'phone':
        alert('Información de contacto telefónico guardada.');
        break;
      default:
        alert('Tipo de contacto no reconocido.');
    }
  }
}
