import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { DynamicSectionDataStorage } from '../../services/dynamic-section-data.storage';
import { DynamicSection } from '../../types';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-dynamics-section-view',
  imports: [DecimalPipe],
  templateUrl: './dynamics-section-view.html',
  styleUrl: './dynamics-section-view.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicsSectionView {
  private readonly storage = inject(DynamicSectionDataStorage);
  readonly data = signal<DynamicSection | null>(null); // เริ่มต้นเป็น null

  constructor() {
    this.storage.get().then((res) => {
      // ถ้า array ว่างถือว่า Not Found ด้วยก็ได้ แล้วแต่ Logic
      this.data.set(res && res.length > 0 ? res : null);
    });
  }

  sum(numbers: readonly number[]): number {
    return numbers.reduce((acc, curr) => acc + (curr || 0), 0);
  }
}
