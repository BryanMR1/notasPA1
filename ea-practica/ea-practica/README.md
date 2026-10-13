# IEA Energy Monitoring Platform

Angular application for managing international energy reports.

**Course:** Desarrollo de Aplicaciones Open Source — UPC  
**Framework:** Angular 22  
**IDE:** JetBrains WebStorm  
**Backend:** JSON Server + DummyJSON

---

## 1. Crear un proyecto Angular

Verificar versión:

```bash
ng version
```

Actualizar Angular CLI cuando sea necesario:

```bash
npm install -g @angular/cli@latest
```

Crear proyecto:

```bash
ng new nombre-proyecto
```

Entrar al proyecto:

```bash
cd nombre-proyecto
```

Verificar carpeta actual en PowerShell:

```powershell
pwd
```

Ejecutar Angular:

```bash
ng serve --open
```

Frontend: `http://localhost:4200`

**Importante:** para ejecutar los comandos Angular debes estar dentro de la carpeta que contiene `angular.json`.

---

## 2. Instalar Angular Material

```bash
ng add @angular/material
```

Seleccionar un tema preconstruido, por ejemplo Azure/Blue.

### Imports frecuentes

```typescript
import { MatToolbar } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
```

En componentes standalone, recuerda incluir los componentes o módulos utilizados dentro de `@Component({ imports: [...] })`.

---

## 3. Instalar JSON Server

Versión utilizada en clases y en el parcial de referencia:

```bash
npm install json-server@0.17.4 --save-dev
```

Verificar versión:

```bash
npx json-server --version
```

### Crear db.json

Ejemplo básico:

```json
{
  "categories": [
    {
      "id": 1,
      "name": "Java"
    }
  ],
  "courses": [
    {
      "id": 1,
      "title": "Java for Beginners",
      "categoryId": 1
    }
  ]
}
```

Para el parcial de referencia, el archivo `db.json` debe estar dentro de la carpeta `server`.

### Configurar package.json

Dentro de `scripts`, añadir:

```json
"server": "json-server --watch server/db.json"
```

No eliminar los demás scripts.

### Ejecutar backend

Desde la raíz del proyecto:

```bash
npm run server
```

Alternativa:

```bash
npx json-server --watch server/db.json
```

Backend: `http://localhost:3000`

**Recordatorio:** mantener dos terminales funcionando:

- Terminal 1: `ng serve --open`
- Terminal 2: `npm run server`

### Operaciones HTTP comunes

| Método | Función |
|---|---|
| GET | Obtener registros |
| POST | Crear registros |
| PUT | Reemplazar registros |
| PATCH | Actualizar parcialmente |
| DELETE | Eliminar registros |

---

## 4. Crear componentes Angular

Comando general:

```bash
ng g c ruta/nombre-componente --skip-tests
```

### Ejemplos de componentes shared

```bash
ng g c shared/presentation/components/layout --skip-tests
ng g c shared/presentation/components/toolbar --skip-tests
ng g c shared/presentation/components/footer --skip-tests
ng g c shared/presentation/views/page-not-found --skip-tests
```

### Ejemplos de componentes monitoring

```bash
ng g c monitoring/presentation/views/home --skip-tests
ng g c monitoring/presentation/views/new-energy-report --skip-tests
ng g c monitoring/presentation/components/energy-report-summary --skip-tests
```

**Regla:**

- `views`: componentes asociados directamente a rutas.
- `components`: componentes incluidos dentro de otras vistas.
- `shared`: funcionalidades generales de la aplicación.

---

## 5. Configurar Environments

Generar archivos:

```bash
ng generate environments
```

### environment.ts

```typescript
export const environment = {
  production: true,
  serverApiUrl: 'http://localhost:3000',
  dummyJsonApiUrl: 'https://dummyjson.com',
  energyMonitoringCentersPath: '/energy-monitoring-centers',
  energyReportItemsPath: '/energy-report-items',
  usersPath: '/users'
};
```

### environment.development.ts

```typescript
export const environment = {
  production: false,
  serverApiUrl: 'http://localhost:3000',
  dummyJsonApiUrl: 'https://dummyjson.com',
  energyMonitoringCentersPath: '/energy-monitoring-centers',
  energyReportItemsPath: '/energy-report-items',
  usersPath: '/users'
};
```

Las URLs y rutas pueden cambiar según el enunciado.

No colocar claves privadas en archivos que se suban a GitHub. Los archivos de environment del frontend no protegen secretos.

---

## 6. Configurar HttpClient

Archivo: `src/app/app.config.ts`

Ejemplo:

```typescript
import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners
} from '@angular/core';

import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient()
  ]
};
```

Cuando se implemente ngx-translate, conservar también su proveedor en este archivo.

### Petición GET básica

```typescript
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  private readonly http = inject(HttpClient);

  getAll() {
    return this.http.get('http://localhost:3000/courses');
  }
}
```

En la solución del examen, sustituir la URL fija por las variables de `environment`.

---

## 7. Instalar i18n — Inglés y Español

Instalar:

```bash
npm install @ngx-translate/core @ngx-translate/http-loader
```

Crear:

```text
public/
└── i18n/
    ├── en.json
    └── es.json
```

### en.json

```json
{
  "home": "Home",
  "new-report": "New Report",
  "create": "Create",
  "cancel": "Cancel"
}
```

### es.json

```json
{
  "home": "Inicio",
  "new-report": "Nuevo Reporte",
  "create": "Crear",
  "cancel": "Cancelar"
}
```

### Configuración del servicio

Agregar estos imports a `app.config.ts`:

```typescript
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
```

Dentro del array `providers`, agregar:

```typescript
provideTranslateService({
  fallbackLang: 'en',
  lang: 'en',
  loader: provideTranslateHttpLoader({
    prefix: '/i18n/',
    suffix: '.json'
  })
})
```

Conservar también `provideRouter(routes)` y `provideHttpClient()`.

### Utilizar traducciones en HTML

Importar `TranslatePipe` en el componente:

```typescript
import { TranslatePipe } from '@ngx-translate/core';
```

Agregar `TranslatePipe` a `imports`.

En HTML:

```html
<h1>{{ 'home' | translate }}</h1>
```

### Cambiar idioma

```typescript
import { inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

private readonly translate = inject(TranslateService);

changeLanguage(language: string): void {
  this.translate.use(language);
}
```

En HTML:

```html
<button (click)="changeLanguage('en')">EN</button>
<button (click)="changeLanguage('es')">ES</button>
```

---

## 8. Angular Routing

Archivo: `src/app/app.routes.ts`

```typescript
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./monitoring/presentation/views/home/home')
        .then(m => m.Home)
  },
  {
    path: '**',
    loadComponent: () =>
      import('./shared/presentation/views/page-not-found/page-not-found')
        .then(m => m.PageNotFound)
  }
];
```

### Navegación HTML

Importar `RouterLink` y utilizarlo:

```html
<a routerLink="/home">Home</a>
```

Para mostrar el contenido de la ruta:

```html
<router-outlet />
```

Importar `RouterOutlet` en el componente correspondiente.

### Navegación con TypeScript

```typescript
import { Router } from '@angular/router';
import { inject } from '@angular/core';

private readonly router = inject(Router);

goHome(): void {
  this.router.navigate(['/home']);
}
```

Para el parcial de referencia, utilizar también child routes organizadas por bounded context.

---

## 9. Angular Signals

Importación:

```typescript
import { signal, computed } from '@angular/core';
```

### Crear un Signal

```typescript
readonly loading = signal(false);
```

### Leer su valor

```typescript
this.loading()
```

### Cambiar su valor

```typescript
this.loading.set(true);
```

### Actualizar según el valor anterior

```typescript
readonly collapsed = signal(false);

toggleMenu() {
  this.collapsed.update(value => !value);
}
```

### Signal calculado

```typescript
readonly quantity = signal(2);

readonly doubleQuantity = computed(
  () => this.quantity() * 2
);
```

---

## 10. Reactive Forms

Imports:

```typescript
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators
} from '@angular/forms';
```

Ejemplo:

```typescript
private readonly fb = inject(FormBuilder);

readonly form = this.fb.group({
  name: ['', Validators.required],
  quantity: [0, [Validators.required, Validators.min(1)]]
});
```

HTML:

```html
<form [formGroup]="form">
  <input formControlName="name">

  <input type="number" formControlName="quantity">

  <button type="submit" [disabled]="form.invalid">
    Create
  </button>
</form>
```

El ejemplo muestra la validación del formulario; el envío real requiere conectar el evento `ngSubmit` a un método.

---

## 11. Arquitectura DDD

Estructura de referencia:

```text
src/app/
├── shared/
│   └── presentation/
│       ├── components/
│       └── views/
├── monitoring/
│   ├── domain/
│   │   └── model/
│   ├── application/
│   ├── infrastructure/
│   │   ├── model/
│   │   ├── mappers/
│   │   └── services/
│   └── presentation/
│       ├── components/
│       └── views/
└── energy/
    ├── domain/
    ├── application/
    ├── infrastructure/
    └── presentation/
```

### Responsabilidad de cada parte

| Elemento | Responsabilidad |
|---|---|
| Entity | Representa un objeto del dominio |
| Resource | Representa datos recibidos de la API |
| Assembler | Transforma Resource en Entity |
| Service | Realiza operaciones HTTP |
| Store | Gestiona el estado compartido |
| View | Representa una página |
| Component | Representa una parte reutilizable de la interfaz |

---

## 12. Errores frecuentes

### Angular CLI outside a workspace

**Causa:** estás fuera de la carpeta del proyecto.

Solución:

```bash
cd nombre-proyecto
```

### mat-sidenav is not a known element

Revisar el import:

```typescript
import { MatSidenavModule } from '@angular/material/sidenav';
```

Agregar `MatSidenavModule` dentro de `imports`.

### mat-icon no funciona

Import correcto:

```typescript
import { MatIconModule } from '@angular/material/icon';
```

No utilizar:

```typescript
@angular/material/icon-module.d
```

### Error al instalar JSON Server

Correcto:

```bash
npm install json-server@0.17.4 --save-dev
```

Debe existir un espacio antes de `--save-dev`.

### Unable to load data

Comprobar que JSON Server esté ejecutándose:

```bash
npm run server
```

Verificar los endpoints desde el navegador.

### Error en importaciones

Comprobar:

- Que exista el archivo.
- Que su nombre coincida con el import.
- Que la ruta relativa sea correcta.
- Que la clase o interfaz esté exportada.

### Verificar compilación

```bash
ng build
```

---

## 13. Comandos útiles de Git

Inicializar un repositorio, si todavía no existe:

```bash
git init
```

Ver estado:

```bash
git status
```

Agregar cambios:

```bash
git add .
```

Crear commit:

```bash
git commit -m "docs: add project documentation"
```

Subir cambios, si ya tienes configurado el repositorio remoto y la rama main:

```bash
git push origin main
```

---

## 14. Checklist antes de entregar

- [ ] Angular compila correctamente.
- [ ] JSON Server funciona.
- [ ] Los endpoints corresponden al enunciado.
- [ ] Las rutas funcionan.
- [ ] La aplicación tiene Page Not Found.
- [ ] Los formularios validan los datos.
- [ ] GET y POST funcionan.
- [ ] Se utilizan Angular Signals.
- [ ] Las traducciones EN/ES funcionan.
- [ ] Se utilizan componentes de Angular Material.
- [ ] Se cumplen las convenciones DDD.
- [ ] Se usan atributos ARIA.
- [ ] Se documentan las clases y métodos con TSDoc.
- [ ] El README contiene la información del autor.
- [ ] Eliminar `node_modules` antes de generar el ZIP.
- [ ] El ZIP tiene el nombre exigido en el examen.

**Nota:** Este README es una guía de estudio basada en una práctica de examen parcial anterior. Los endpoints, entidades, rutas y requisitos deberán adaptarse al enunciado real.
