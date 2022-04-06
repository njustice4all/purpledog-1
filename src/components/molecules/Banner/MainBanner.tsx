import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { actionGetBanner } from 'modules/banner/banner.actions';

export default function MainBanner() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetBanner.request({ bannerCodeId: 'MAIN_TOP' }));
  }, [dispatch]);

  return <div>MainBanner</div>;
}
