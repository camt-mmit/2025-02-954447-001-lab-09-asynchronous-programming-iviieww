import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { DynamicSectionDataStorage } from '../../services/dynamic-section-data.storage';
import { DynamicSection } from '../../types';
import { form, FormField } from '@angular/forms/signals';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-dynamics-section-form',
  standalone: true,
  imports: [DecimalPipe, FormField],
  templateUrl: './dynamics-section-form.html',
  styleUrl: './dynamics-section-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicsSectionForm {
  private readonly storage = inject(DynamicSectionDataStorage);

  readonly sectionModel = signal<DynamicSection>([]);

  readonly sectionForm = form(this.sectionModel);

  constructor() {
    this.storage.get().then((data) => {
      if (data) this.sectionModel.set(data);
    });

    effect(() => {
      this.storage.set(this.sectionModel());
    });
  }

  addSection() {
    this.sectionModel.update((sections) => [...sections, []]);
  }

  removeSection(index: number) {
    this.sectionModel.update((sections) => sections.filter((_, i) => i !== index));
  }

  addNumber(sectionIndex: number) {
    this.sectionModel.update((sections) => {
      const newSections = [...sections];
      newSections[sectionIndex] = [...newSections[sectionIndex], 0];
      return newSections;
    });
  }

  removeNumber(sectionIndex: number, numberIndex: number) {
    this.sectionModel.update((sections) => {
      const newSections = [...sections];
      newSections[sectionIndex] = newSections[sectionIndex].filter((_, i) => i !== numberIndex);
      return newSections;
    });
  }

  sum(numbers: readonly number[]): number {
    return numbers.reduce((a, b) => a + (b || 0), 0);
  }
}
