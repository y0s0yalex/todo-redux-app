import { createAction, props } from "@ngrx/store";

export type filtrosValidos = 'todos'|'completados'|'pendientes';

export const setFiltro = createAction(
    '[filtro] set filtro',
    props<{filtro:filtrosValidos}>()
);