import React, { ReactNode } from 'react';

export interface RsInputPropsType {
  // status?: string;
  // value?: string | number | undefined;
  defaultValue?: string | number | readonly string[] | undefined;
  // maxLength?: number;
  onChange?: React.FormEventHandler<HTMLInputElement> | undefined;
  // type?: 'text' | 'textarea';
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  // blur?: () => void;
  // focus?: (option?: { preventScroll?: boolean; cursor?: 'start' | 'end' | 'all' }) => void;
}
