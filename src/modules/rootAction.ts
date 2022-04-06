import { BannerActions } from './banner/banner.actions';
import { RecommendWineActions } from './recommendWine/recommendWine.actions';
import { TextActions } from './text/text.actions';

export type RootAction = BannerActions | TextActions | RecommendWineActions;
