import { IBannerState } from './banner/banner.models';
import { IWineState } from './wine/wine.models';
import { ITextState } from './text/text.models';

export interface RootState {
  banner: IBannerState;
  text: ITextState;
  wine: IWineState;
}
