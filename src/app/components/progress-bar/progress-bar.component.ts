import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'tw2-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProgressBarComponent),
      multi: true,
    },
  ],
})
export class ProgressBarComponent implements ControlValueAccessor {

  @Input() formatter: (value: number, max?: number) => string;
  @Input() max = 1;

  @Input()
  set value(value: string | number) {
    this.viewValue = coerceNumberProperty(value);
  }

  get value(): number | string {
    return this.viewValue;
  }


  disabled = false;
  dragging = false;
  viewValue = 0;

  private onTouched = () => {
  }
  private onChange: (value: number) => void = () => {
  }

  writeValue(obj: any): void {
    this.viewValue = obj ? coerceNumberProperty(obj) : 0;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  get maxNumber(): number {
    return coerceNumberProperty(this.max);
  }

  get percent(): number {
    return 100 * this.viewValue / this.maxNumber;
  }

  onClick(e: MouseEvent): void {
    if (this.disabled || this.dragging) {
      return;
    }
    const w = ((e.target as HTMLElement).closest('.progress-wrapper') as HTMLElement)?.offsetWidth;
    const percent = e.offsetX / w;
    this.viewValue = Math.ceil(percent * this.maxNumber);
    this.onChange(this.viewValue);
  }

}
