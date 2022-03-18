# el directorio mágico `__/supabase`

`init.js` y `init.json` contienen las credenciales públicas para conectarse a la base de datos como usuario anónimo. Se entiende que no importa que sean públicos así que no haría falta quitarlos del repositorio, **pero** los he quitado.

Así que `sample.init.js` se tiene que modificar a `init.js` e introducir las credenciales que se pueden encontrar en el dashboard de supabase.

`__/supabase/init.js` es una "inspiración" a firebase hosting.  Si habilitamos el hosting en firebase veremos que las credenciales estarán disponibles en `__/firebase/init.js`, lo que llaman [_SDK Autoconfiguration_](https://firebase.google.com/docs/hosting/reserved-urls#sdk_auto-configuration).  Entiendo que si ellos saben lo que hacen, ¿por qué no hacerlo igual?