import {sequence, trigger, stagger, animate, style, group, query as q, transition, keyframes, animateChild} from '@angular/animations';
const query = (s, a, o= { optional: true}) => q(s, a, o);
const left = (fromState, toState) => +fromState > +toState;
const right = (fromState, toState) => +fromState < +toState;


export const routerTransition = trigger('routerTransition', [
  transition(right, [
    query(':enter', style({ transform: 'translateX(100%)' })),
    group([
      sequence([
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('500ms linear',
            style({ transform: 'translateX(-100%)' }))
        ]),
        // query(':leave', [
        //   style({ transform: 'scale(1)' }),
        //   animate('500ms linear',
        //     style({ transform: 'scale(0.4)' }))
        // ]),
      ]),
      sequence([
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('500ms linear',
            style({ transform: 'translateX(0%)' })),
        ]),
        // query(':enter', [
        //   style({ transform: 'scale(0.4)' }),
        //   animate('500ms linear',
        //     style({ transform: 'scale(1)' }))
        // ])
      ])
    ])
  ]),
  transition(left, [
    query(':enter', style({ transform: 'translateX(-100%)' })),
    group([
      sequence([
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('500ms linear',
            style({ transform: 'translateX(100%)' }))
        ]),
      ]),
      sequence([
        query(':enter', [
          style({ transform: 'translateX(-100%)' }),
          animate('500ms linear',
            style({ transform: 'translateX(0%)' })),
        ]),
      ])
    ])
  ])
]);
