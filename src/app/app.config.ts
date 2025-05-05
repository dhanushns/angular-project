import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import {
  customerFeatureKey,
  CustomerReducer,
} from './customer/store/reducer/customer.reducer';
import {
  provideStoreDevtools,
  StoreDevtoolsModule,
} from '@ngrx/store-devtools';
import {
  counterFeatureKey,
  counterReducer,
  CounterState,
} from './counter/reducer/counter.reducer';
import { reducers, metaReducers } from './reducers';
import {
  employeeFeatureKey,
  EmployeeReducer,
} from './employee/reducer/employee.reducer';
import { provideEffects } from '@ngrx/effects';
import { EmployeeEffects } from './employee/effect/employee.effects';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore(),
    provideState(customerFeatureKey, CustomerReducer),
    provideState(counterFeatureKey, counterReducer),
    provideState(employeeFeatureKey, EmployeeReducer),
    provideEffects(EmployeeEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: false }),
  ],
};
