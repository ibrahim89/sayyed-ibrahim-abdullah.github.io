type ThemeType = 'light' | 'dark'

interface ITheme {
  palette: {
    mode: ThemeType;
  }
}

type AppState = {
  theme: ITheme
}

type AppAction = {
  type: string
}

type DispatchType = (args: AppAction) => AppAction

declare module '*.mp4' {
  const src: string;
  export default src;
}
