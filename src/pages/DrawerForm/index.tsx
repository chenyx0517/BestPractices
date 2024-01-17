import { Button } from 'antd';
import { useState } from 'react';
import MyDrawer from './components/MyDrawer';

const DrawerForm = () => {
  const [open, setOpen] = useState<boolean>(false);
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        style={{ width: 200 }}
        onClick={() => {
          setOpen(true);
        }}
      >
        设置
      </Button>
      <MyDrawer open={open} onClose={onClose} />
    </>
  );
};
export default DrawerForm;
