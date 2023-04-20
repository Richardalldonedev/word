import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { Document, Paragraph, TextRun } from 'docx';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: '',
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
