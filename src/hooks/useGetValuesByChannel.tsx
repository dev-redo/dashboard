import { PlatformItem } from '../types/platform'
type ChannelType = "google" | "naver" | "facebook" | "kakao";

export const useGetValuesByChannel = (platform:any) => {

  const imp = {name: '노출수', imp: { google: 0, naver: 0, facebook: 0, kakao: 0 }}
  const cost = {name: '광고단가', cost : { google: 0, naver: 0, facebook: 0, kakao: 0 }}
  const click = {name: '클릭수', click : {google: 0, naver: 0, facebook: 0, kakao: 0 }}
  const roas = {name: '매출', roas : { google: 0, naver: 0, facebook: 0, kakao: 0 }}
  const convValue = {name: '전환수', convValue : {google: 0, naver: 0, facebook: 0, kakao: 0 }}

  const pushDataInArray = (channel:ChannelType) => {
    
    platform.forEach((v:PlatformItem) => {
      if (v.channel === channel) {
        cost.cost[channel] = v.cost;
        imp.imp[channel] = v.imp;
        click.click[channel] = v.click;
        roas.roas[channel] = v.roas;
        convValue.convValue[channel] = v.convValue;
      }
    })
 };

 pushDataInArray('google')
 pushDataInArray('naver')
 pushDataInArray('facebook')
 pushDataInArray('kakao')

  const data = [cost, imp, click, roas, convValue]

  return data;
}
