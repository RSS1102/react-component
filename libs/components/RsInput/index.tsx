import { RsInputPropsType } from '../../types/model/RsInput';
import './index.scss';
const RsInput = (props: RsInputPropsType) => {
  return (
    <div className="rs-input-wrapper">
      {props.iconStart && <span className="rs-input-icon rs-input-icon-start">{props.iconStart}</span>}
      <input defaultValue={props.defaultValue} onInput={props?.onChange} />
      {props.iconEnd && <span className="rs-input-icon rs-input-icon-end">{props.iconEnd}</span>}
    </div>
  );
};

export default RsInput;
