export abstract class Constants {
  static readonly themeType: { [k: string]: ThemeType } = { light: 'light', dark: 'dark' };
  static readonly routes: string[] = ['/', 'about', 'education', 'experience', 'skills', 'projects', 'contact'];
}
