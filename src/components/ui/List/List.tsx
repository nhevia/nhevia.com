import React from 'react';

type Props<Item, As extends React.ElementType> = {
  items: Item[];
  renderItem: (item: Item) => React.ReactNode;
  as?: As;
};

export default function List<Item, As extends React.ElementType>({
  items,
  renderItem,
  as,
  ...rest
}: Props<Item, As> &
  Omit<React.ComponentPropsWithoutRef<As>, keyof Props<Item, As>>) {
  const Component = as ?? 'div';

  return <Component {...rest}>{items.map(renderItem)}</Component>;
}
