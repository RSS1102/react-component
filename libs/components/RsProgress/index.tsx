import { RsProgressType } from '../../types/model/RsProgress';
import './index.scss';

const RsProgress = (props: RsProgressType) => {
  return (
    <div className="rs-progress" style={{ width: props.rateWidth ?? 250 }}>
      <div
        className="rs-progress-rate"
        style={{
          width: (props.percent ?? 0) * ((props.rateWidth ?? 250) / 100),
          backgroundColor: props.rateColor ?? 'blue',
        }}
      />
    </div>
  );
};

export default RsProgress;
