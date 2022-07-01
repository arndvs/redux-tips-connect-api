import MenuItem from './MenuItem';

export const MenuItems = ({ items }) => {
    return (
      <div orientation="vertical" spacing="space60">
        {items.map((item) => (
          <MenuItem {...item} key={item.uuid} />
        ))}
      </div>
    );
  };
