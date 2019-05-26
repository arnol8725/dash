import { IngresoEgreso } from './ingreso-egreso.model';
import * as fromIngresoEgreso from './ingreso-egreso.actions';
import { State } from '../shared/ui.reducer';
import { acciones } from '../shared/ui.actions';
import { map } from 'rxjs/operators';
import { fromEventPattern } from 'rxjs';
import { AppState } from '../app.reducer';

export interface IngresoEgresoState{
    items: IngresoEgreso[];
}

export interface AppState extends AppState{
    IngresoEgreso: IngresoEgresoState;
}

const estadoInicial : IngresoEgresoState = {
    items : []   
};

export function ingresoEgresoReducer(state =estadoInicial, action: fromIngresoEgreso.accionesIngresoEgreso) : IngresoEgresoState{
    switch(action.type){
        case fromIngresoEgreso.statesIngresoEgreso.SET_ITEMS:
            return { items: [...action.items.map(item => {
                    return {
                        ...item     
                    }      
            })]};
        case fromIngresoEgreso.statesIngresoEgreso.UNSET_ITEMS:
            return { items : [] }
        default:           
            return state;
    }
}



