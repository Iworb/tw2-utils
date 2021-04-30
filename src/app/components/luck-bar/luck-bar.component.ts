import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'tw2-luck-bar',
  templateUrl: './luck-bar.component.html',
  styleUrls: ['./luck-bar.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LuckBarComponent),
      multi: true,
    },
  ],
})
export class LuckBarComponent implements ControlValueAccessor {

  @Input()
  set value(value: string | number) {
    this.viewValue = coerceNumberProperty(value);
  }

  get value(): number | string {
    return this.viewValue;
  }

  disabled = false;
  viewValue = 0;

  private onTouched = () => {
  };
  private onChange: (value: number) => void = () => {
  };

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

  get percent(): number {
    return Math.abs(100 * this.viewValue / 15);
  }

  onClick(type: 'luck' | 'unluck' | 'zero', e: MouseEvent): void {
    if (this.disabled) {
      return;
    }
    let percent;
    try {
      if (type === 'zero') {
        percent = 0;
      } else {
        const w = ((e.target as HTMLElement).closest('.progress-wrapper') as HTMLElement)?.offsetWidth;
        percent = (type === 'luck' ? e.offsetX : e.offsetX - w) / w;
      }
      this.viewValue = Math.ceil(percent * 15);
      this.onChange(this.viewValue);
    } catch (err) {}
  }
}
