import { createReducer, on } from '@ngrx/store';
import {
  crear,
  toggle,
  editar,
  borrar,
  toggleAll,
  limpiarCompletado,
} from './todo.actions';
import { Todo } from './models/todo.model';

export const estadoInicial: Todo[] = [
  new Todo('salvar al mundo'),
  new Todo('vencer al malo'),
  new Todo('liompiar traje'),
  new Todo('otr aprueba mas XD '),
];

const _todoReducer = createReducer(
  estadoInicial,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(limpiarCompletado, (state) => state.filter((item) => !item.completado)),
  on(toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return todo;
      }
    });
  }),
  on(editar, (state, { id, texto }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          texto: texto,
        };
      } else {
        return todo;
      }
    });
  }),
  on(borrar, (state, { id }) => state.filter((todo) => todo.id !== id)),

  on(toggleAll, (state, { completado }) =>
    state.map((todo) => {
      return { ...todo, completado };
    })
  )
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
