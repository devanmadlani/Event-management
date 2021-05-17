import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EventService} from '../../../services/event.service';
import { Cities, EventDetails } from '../../../models/event.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.scss']
})
export class SubscriptionFormComponent implements OnInit, OnDestroy {
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  #destory$ = new Subject<boolean>();
  selectedEventDetails: EventDetails;
  userDetailsForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    dateOfBirth: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    cityName: new FormControl('',  [Validators.required]),
  });
  submitted = false;

  cityArr: Cities [] = ['Rotterdam', 'The Hague', 'Amsterdam', 'Utrecht', 'Leiden'];

  constructor(public route: ActivatedRoute, public eventService: EventService, private router: Router) {
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }

  ngOnInit(): void {
    this.eventService.setAllEvents();
    this.route.params.pipe(takeUntil(this.#destory$)).subscribe(params => {
      this.selectedEventDetails = this.eventService.getEventDetailsById(params.id);
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.userDetailsForm.valid) {
      this.eventService.subscribeToEvent(this.selectedEventDetails, this.userDetailsForm.value);
      this.router.navigate(['/home']);
    }
  }

  ngOnDestroy(): void {
    this.#destory$.next();
    this.#destory$.unsubscribe();
  }

}
