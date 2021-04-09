import { Injectable, EventEmitter} from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';


@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  invokeFunction = new EventEmitter();
  subvar : Subscription;
  constructor() { }

    emitFunction(){
      this.invokeFunction.emit();
    }
  
}
