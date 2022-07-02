import { MenuItemContainer } from '../containers/MenuItemContainer';


export const MenuItems = ({ items }) => {
    return (
      <div orientation="vertical" spacing="space60">
        {items.map((item) => (
          <MenuItemContainer
            {...item}
            key={item.uuid}
          />
        ))}
      </div>
    );
  };
