import { useState, useImperativeHandle } from '@tarojs/taro';
import { ClModal } from 'mp-colorui';
import { ModalBtns } from '../../constants/modal';

const initialVisible: boolean = true;

const ConfirmModal = props => {
  const [visible, setVisible] = useState(initialVisible);

  const actions = [
    {
      text: '取消',
      color: 'red',
    },
    {
      text: '确定',
      color: 'blue',
    },
  ];

  function open() {
    setVisible(true);
  }

  function close() {
    setVisible(false);
  }

  function handleClick(index: number) {
    if (index === ModalBtns.Confirm) {
      close();
    }
  }

  // useImperativeHandle(props.modalRef, () => ({
  //   open,
  // }));

  // console.log(props)

  return (
    <ClModal ref={props.modalRef} show={visible} actions={actions} onClick={handleClick}>
      <span>请先进行授权登录</span>
    </ClModal>
  );
};

export default ConfirmModal;
