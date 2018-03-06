// L'argomento State non è lo stato dell'applicazione, ma solo
// lo stato di cui è responsabile l'applicazione
export default function(state = null, action) {
  switch(action.type) {
    case 'LIBRO_SELEZIONATO':
      return action.payload;
  }
  return state;
}
