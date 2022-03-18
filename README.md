# Hello world supabase

Este ejemplo de sign in, login y recuperación de información se basa en el ejemplo que podemos encontrar aquí: [Vanilla-js Auth Example](https://github.com/supabase/supabase/tree/master/examples/javascript-auth). Pero, como lo que he visto no me ha gustado he querido cambiar algunas cosas...

Varias páginas para navegar entre ellas. De este modo, puedo dar consciencia que `supabase.auth.signIn` está creando una entrada en la *Local Storage* con la información del usuario y el token del usuario...  *JWT* y *Local Storage*... [Here’s Why Storing JWT in Local Storage is a Disastrous Mistake](https://medium.com/kanlanc/heres-why-storing-jwt-in-local-storage-is-a-great-mistake-df01dad90f9e).

Para evitar exponer TAN FACILMENTE las credenciales públicas en el repositorio (aunque sean públicas da un poco de cosa ponerlas tan a la vista...) las he extraído a otro fichero y lo he *.gitignorado*.  En otros proyectos no vanilla.js las credenciales se pueden guardar en .env para cuando se rendericen los html 

<br>

## Base de datos

La base de datos a la cual me estoy conectando tiene dos tablas:

- `saludos`
- `saludos_privados`

Ambas con **RLS** (*Row Level Security*) habilitado:

| `tabla` | `política` | 
| - | - | 
|`saludos`  | `SELECT Enable access to all users true`|
| `saludos_privados` | `SELECT selección privada (role() = 'authenticated'::text)` | 

De esta forma acceder a la tabla saludos se puede hacer desde el anonimato pero acceder al contenido de `saludos_privados` se tiene que hacer desde un usuario autenticado.

<br>

### Cómo conectarnos a nuestra base de datos

Inspirándome en firebase y su [_SDK auto-configuration_](https://firebase.google.com/docs/hosting/reserved-urls#sdk_auto-configuration) Las credenciales estarán en `__/supabase/init.js` y/o `__/supabase/init.js`.  Para no añadirlas en el repositorio están *.gitignoradas* y en su lugar tenemos los sample.* que habrá que sustituir.

<br>
<br>
<br>
<center><h2>👋</h2></center>