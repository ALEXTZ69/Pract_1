import {IFunction,IParameter, functions} from '../interface/index' ;


export function updateStatusById(id: number, newStatus: string): void {
  let statusUpdated = functions.find(f => f.id === id);

  if (statusUpdated) {
      statusUpdated.status = newStatus;
        console.log()
  } else {
      console.log(`No se encontró la función con id ${id}`);
  }
}


