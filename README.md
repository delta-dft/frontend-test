# frontend-test

## Instrucciones

Esta prueba es para la evaluación de conocimiento de front con el uso de las herramientas de: 
- Vue3
- Tailwind
- Vuex

Se debe de bifurcar ycrear una rama del repositorio, la cual debe de incluir el nombre y apellido del candidato en camelCase. Al finalizar, se hara un push a la rama del candidato y se pasará a la calificación de la prueba.

**NO HACER NINGUNA MODIFICACIÓN A LA RAMA DE MASTER**

El objetivo consta de correguir una pantalla y crear una vista con las herramientas mencionadas.

Las pantallas deberan verse como se encuentran las imágenes de `./mock/`. 
![alt text](https://github.com/delta-dft/frontend-test/blob/master/mock/Home.png?raw=true)
![alt text](https://github.com/delta-dft/frontend-test/blob/master/mock/Profile.png?raw=true)
### Pantalla Home.
- Se debe crear un "componente" del header que se encuentra en home para su utilización en las dos vistas.
- Se debe poder regresar a home dando click en la imágen del logo de Broxia.
- Se debe de unir la información del usuario que se encuentra en `.src/store/index.js` a la estado de vuex de 'user' para mostrar la información. dentro de la vista 'Home' y 'Perfil'. (**Bonus** Lograr que al recargar la pagina la información no se pierda).
- En la imágen de perfil del usuario, si el usuario no cuenta con la información de una foto. Se debe de poner la foto 'default_user.png' que se encuentra en `./src/assets/images/`.
- El submenu que arroja el header debe mostrarse al darle click en el nombre del usuario y cerrar cuando ce vuelve a dar click en el nombre del usuario o al dar click fuera del recuadro.
- Los botones de catálogo, mis flujos y biblioteca, deben de contar con un hover que haga la imagen oscura. (los íconos se encuentran `./src/assets/icons/`).
- Crear las cosas faltantes que aparecen en el mockup.

### Pantalla Perfil.
- Crear la plantilla de Perfil usando los frameworks mencionados. Los datos del usuario deben de ser los que están en el vuex.
- Debe de contener el mimso componente de header que el Home. 
- El botón de atrás debe de regresar al home.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

