import { BannerActions } from './banner/banner.actions';
import { WineActions } from './wine/wine.actions';
import { TextActions } from './text/text.actions';

export type RootAction = BannerActions | TextActions | WineActions;
