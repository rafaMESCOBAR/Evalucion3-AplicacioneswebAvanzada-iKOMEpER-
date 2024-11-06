import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements AfterViewInit {

  constructor() { }

  // Este ciclo de vida garantiza que el DOM ya está renderizado
  ngAfterViewInit(): void {
    this.setupFilterButtons();
  }

  // Método que configura los botones de filtrado
  setupFilterButtons(): void {
    // Selecciona todos los botones de filtro
    const filters = document.querySelectorAll('#portfolio-flters li');
    const items = document.querySelectorAll('.portfolio-item');

    // Añade un evento de clic a cada botón de filtro
    filters.forEach(filter => {
      filter.addEventListener('click', () => {
        // Remueve la clase activa de todos los botones y agrégala al seleccionado
        filters.forEach(f => f.classList.remove('filter-active'));
        filter.classList.add('filter-active');

        // Filtra los elementos
        const filterValue = filter.getAttribute('data-filter');
        
        // Aseguramos que filterValue no sea null
        if (filterValue) {
          items.forEach(item => {
            // Usamos aserción de tipo para indicar que 'item' es un HTMLElement
            const htmlItem = item as HTMLElement;

            if (filterValue === '*' || htmlItem.classList.contains(filterValue.substring(1))) {
              htmlItem.style.display = 'block';
            } else {
              htmlItem.style.display = 'none';
            }
          });
        }
      });
    });
  }
}
