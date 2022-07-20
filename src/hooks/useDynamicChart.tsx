import { dynamicChartData, isMonthData } from "../store/charts";
import {f, ff, fff, ffff} from "../components/charts/chartCustoms/OverallChangeValueData";
import { useRecoilState } from "recoil";
// 이부분 로직개선을 고민중입니다...!
export const useChangeChartDynamically = () => {
    const [dynamic, setDynamic] = useRecoilState(dynamicChartData);
    return ;
}