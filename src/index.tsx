import { NativeModules } from 'react-native';

type VitalsType = {
  reportFullyDrawn: () => void;
};

const { Vitals } = NativeModules;

export default Vitals as VitalsType;
