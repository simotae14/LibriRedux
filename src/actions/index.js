export function selezionaLibro(libro) {
  // selezionaLibro è un ActionCreator, che restituisce una action,
  // un oggetto che abbia la pty type
  return {
    type: 'LIBRO_SELEZIONATO',
    payload: libro
  };
}
