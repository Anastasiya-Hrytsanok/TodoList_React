import React, { FC, MouseEventHandler } from 'react';
import './component.css';

interface ChangingTaskModalProps {
  onClickCancelButton: () => void;
  onClickSaveButton: MouseEventHandler;
  taskValue: string;
}

const ChangingTaskModal: FC<ChangingTaskModalProps> = ({
  onClickCancelButton,
  onClickSaveButton,
  taskValue,
}) => {
  return (
    <div
      className="changing_task_modal_container"
      onClick={onClickCancelButton}
    >
      <div className="changing_task_modal" onClick={(e) => e.stopPropagation()}>
        <input type="text" id="changed_task" defaultValue={taskValue}></input>
        <div className="changing_task_modal_button_container">
          <button type="button" onClick={onClickSaveButton}>
            Save
          </button>
          <button type="button" onClick={onClickCancelButton}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangingTaskModal;
