import { IBannerState } from './banner/banner.models';
import { ITextState } from './text/text.models';

export interface RootState {
  banner: IBannerState;
  text: ITextState;
}
