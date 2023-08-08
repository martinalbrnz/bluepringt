#!/bin/bash
# Call script from project's root folder

echo "Bienvenido!"

read -p "Por favor escriba el nombre de la ruta de vista (plural): " FRONT_ROUTE

# read -p "Por favor escriba el nombre de la ruta de API: " API_ROUTE

echo "FRONT: $FRONT_ROUTE"
# echo "API: $API_ROUTE"

mkdir -p "./src/app/views/${FRONT_ROUTE}"

echo "<p>resource works!</p>
" > ./src/app/views/${FRONT_ROUTE}/${FRONT_ROUTE}.component.html

echo "" > ./src/app/views/${FRONT_ROUTE}/${FRONT_ROUTE}.component.scss

echo "import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
  selector: 'bp-${FRONT_ROUTE}',
  standalone: true,
  imports: [
		CommonModule,
	],
  templateUrl: './${FRONT_ROUTE}.component.html',
  styleUrls: ['./${FRONT_ROUTE}.component.scss']
})
export default class ${FRONT_ROUTE^}Component {

}
" > ./src/app/views/${FRONT_ROUTE}/${FRONT_ROUTE}.component.ts

