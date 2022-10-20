import { Platform } from 'react-native';
import Colors from './colors';

const base = {
  fontSize: 17,
  lineHeight: 22,
  fontWeight: '400',
  color: Colors.greyDarkest,
};

export const largeTitle = {
  ...base,
  fontSize: 34,
  lineHeight: 41,
};

export const largeTitleEmphasized = {
  ...largeTitle,
  fontWeight: 'bold',
};

export const body = {
  ...base,
};

export const bodyEmphasized = {
  ...body,
  fontWeight: '600',
};

export const subhead = {
  ...base,
  fontSize: 15,
  lineHeight: 20,
};


export const title = {
  ...base,
  fontSize: 25,
  lineHeight: 29,
};

