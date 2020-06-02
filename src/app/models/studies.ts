import { Category } from '../interfaces/category';

export class Studies {

  studies: Category[] = [
    { value: 'matematicas', viewValue: 'Matemáticas' },
    { value: 'lengua', viewValue: 'Lengua' },
    { value: 'quimica', viewValue: 'Física/Química' },
    { value: 'biologia', viewValue: 'Biología' },
    { value: 'edu. fisica', viewValue: 'Edu Física' },
    { value: 'ingles', viewValue: 'Inglés' },
    { value: 'frances', viewValue: 'Francés' },
    { value: 'tecnologia', viewValue: 'Tecnología' },
    { value: 'historia', viewValue: 'Historia' },
    { value: 'cultura clasica', viewValue: 'Cultura Clásica' },
    { value: 'practicas comunicativas', viewValue: 'Prácticas Comunicativas' },
  ];

  get StudiesCategories(): Category[] {
    return this.studies;
  }
}


