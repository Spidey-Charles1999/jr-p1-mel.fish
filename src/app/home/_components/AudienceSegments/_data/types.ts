export type IconId = 'startups' | 'enterprises' | 'innovators';

export type Target = {
  id: IconId;
  icon: IconId;
  title: string;
  subTitle: string;
  text: string;
};

export type IconSet = {
  [K in IconId]: { '1x': string; '2x': string };
};

