import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root",
})
export class DarkModeService {
  constructor() {}

  darkMode = false;

  toggleDarkMode(): void {
    const root = document.documentElement;

    // const isDarkMode = root.style.getPropertyValue('--background-color') === '#272935';

    const background_color_light = window.getComputedStyle(root).getPropertyValue('--background-color-light');
    const font_color_light = window.getComputedStyle(root).getPropertyValue('--font-color-light');
    const background_color_dark = window.getComputedStyle(root).getPropertyValue('--background-color-dark');
    const font_color_dark = window.getComputedStyle(root).getPropertyValue('--font-color-dark');

    const bg_dark = window.getComputedStyle(root).getPropertyValue('--bg-dark');
    const bg_light = window.getComputedStyle(root).getPropertyValue('--bg-light');


    if (this.darkMode) {
      // root.style.setProperty("--background-color", "white");
      // root.style.setProperty("--font-color", "black");
      root.style.setProperty("--background-color", background_color_light);
      root.style.setProperty("--font-color", font_color_light);
      root.style.setProperty('--bg', bg_light);
      this.darkMode = !this.darkMode;
      console.log('Dark Mode ' + this.darkMode);
    } else {
      // root.style.setProperty('--background-color', '#272935');
      // root.style.setProperty("--font-color", "white");
      root.style.setProperty('--background-color', background_color_dark);
      root.style.setProperty('--font-color',font_color_dark);
      root.style.setProperty('--bg', bg_dark);
      this.darkMode = !this.darkMode;
      console.log('Dark Mode ' + this.darkMode);
    }
  }
}
