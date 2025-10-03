import type { IconSet } from './types';

import startups1x from "../_assets/audience-startups-1x.png";
import startups2x from "../_assets/audience-startups-2x.png";
import enterprises1x from "../_assets/audience-enterprises-1x.png";
import enterprises2x from "../_assets/audience-enterprises-2x.png";
import innovators1x from "../_assets/audience-innovators-1x.png";
import innovators2x from "../_assets/audience-innovators-2x.png";

export const icons: IconSet = {
  startups: { '1x': startups1x as unknown as string, '2x': startups2x as unknown as string },
  enterprises: { '1x': enterprises1x as unknown as string, '2x': enterprises2x as unknown as string },
  innovators: { '1x': innovators1x as unknown as string, '2x': innovators2x as unknown as string },
};

