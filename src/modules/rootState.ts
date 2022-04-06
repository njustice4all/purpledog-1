import { IBannerState } from './banner/banner.models';
import { IRecommendWineState } from './recommendWine/recommendWine.models';
import { ITextState } from './text/text.models';

export interface RootState {
  banner: IBannerState;
  text: ITextState;
  recommendWine: IRecommendWineState;
}
