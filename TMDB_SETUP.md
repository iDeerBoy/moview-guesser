# TMDB API Setup

Este proyecto usa The Movie Database (TMDB) API para obtener información de películas y pósters.

## Configuración Inicial

### 1. Obtener tu API Key y Access Token

1. Ve a [TMDB](https://www.themoviedb.org/)
2. Crea una cuenta o inicia sesión
3. Ve a Settings → API
4. Solicita una API Key (gratis)
5. Copia tu **API Read Access Token** (es el token largo tipo JWT)

### 2. Configurar Variables de Entorno

1. Copia el archivo `.env.example` y renómbralo a `.env`:

   ```bash
   cp .env.example .env
   ```

2. Abre el archivo `.env` y reemplaza los valores:
   ```
   VITE_TMDB_ACCESS_TOKEN=tu_access_token_aqui
   VITE_TMDB_API_KEY=tu_api_key_aqui
   ```

**IMPORTANTE:** El archivo `.env` no se sube al repositorio (está en `.gitignore`).

### 3. Reinicia el servidor de desarrollo

Después de configurar las variables de entorno:

```bash
npm run dev
```

## Uso

### Obtener películas por rango de años

```typescript
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "@/store/MoviesDataSlice";
import type { AppDispatch, RootState } from "@/store/store";

const Component = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading, error } = useSelector(
    (state: RootState) => state.moviesData
  );

  useEffect(() => {
    // Obtener películas del 1990 al 2010
    dispatch(fetchMovies({ startYear: 1990, endYear: 2010, page: 1 }));
  }, [dispatch]);

  // ... resto del componente
};
```

### Obtener URL de póster

```typescript
import { getPosterUrl } from "@/services/tmdbService";

const posterUrl = getPosterUrl(movie.poster_path, "w500");
// Resultado: https://image.tmdb.org/t/p/w500/path-del-poster.jpg
```

Tamaños disponibles para pósters:

- `w92` - muy pequeño
- `w154` - pequeño
- `w185` - pequeño/mediano
- `w342` - mediano
- `w500` - grande (recomendado)
- `w780` - muy grande
- `original` - tamaño original

## Servicios Disponibles

El archivo `src/services/tmdbService.ts` incluye:

- `getMoviesByYearRange(startYear, endYear, page)` - Películas por rango de años
- `searchMovie(query)` - Buscar película por título
- `getPopularMovies(page)` - Películas populares
- `getPosterUrl(posterPath, size)` - URL del póster
- `getBackdropUrl(backdropPath, size)` - URL del backdrop

## Troubleshooting

### Error 401 Unauthorized

- Verifica que estés usando el **Access Token** (no el API Key) en el archivo `.env`
- Asegúrate de que el token tenga el prefijo `VITE_` para que Vite lo reconozca
- Reinicia el servidor después de modificar `.env`

### Variables de entorno no definidas

- Asegúrate de que el archivo `.env` existe en la raíz del proyecto
- Las variables deben tener el prefijo `VITE_`
- Reinicia el servidor de desarrollo

### CORS errors

- TMDB API soporta CORS, no deberías tener problemas
- Si ocurre, verifica que la URL sea correcta: `https://api.themoviedb.org/3/...`
