import { trigger, state, transition, style, animate } from '@angular/animations'

export const slideToRight = trigger('square', [
  state('green', style({'background-color': 'green', 'height': '100px'})),
  state('red', style({'background-color': 'red', 'height': '50px'})),
  transition('green => red', animate(1000)),
  transition('red => green', animate(1000)),
])