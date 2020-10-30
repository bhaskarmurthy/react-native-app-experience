import { NativeModules } from 'react-native';

type VitalsType = {
  multiply(a: number, b: number): Promise<number>;
};

const { Vitals } = NativeModules;

export default Vitals as VitalsType;
