import ChannelReport from "../data/channel-report.json";


export const useGetValuesByChannel = (dateRange:any) => {

  const dateReduce = dateRange.reduce((acc: Array<object>, current:string) => {
    if (current) {const values = ChannelReport.filter(value => value.date === current);
    acc.push(...values);}
    return acc;
  }, []);
    // console.log(dateReduce)

  const imp = {name: '노출수', imp: { google: 0, naver: 0, facebook: 0, kakao: 0 }}
  const cost = {name: '광고단가', cost : { google: 0, naver: 0, facebook: 0, kakao: 0 }}
  const click = {name: '클릭수', click : {google: 0, naver: 0, facebook: 0, kakao: 0 }}
  const roas = {name: '매출', roas : { google: 0, naver: 0, facebook: 0, kakao: 0 }}
  const convValue = {name: '전환수', convValue : {google: 0, naver: 0, facebook: 0, kakao: 0 }}

  const costs = dateReduce.forEach((v:any) => {
    if(v.channel === 'google') {
      cost.cost.google = v.cost;
    }
    else if(v.channel === 'naver') cost.cost.naver = v.cost;
    else if(v.channel === 'facebook')cost.cost.facebook = v.cost;
    else if(v.channel === 'kakao')cost.cost.kakao = v.cost;
  })

  const imps = dateReduce.forEach((v:any) => {
    if(v.channel === 'google') {
      imp.imp.google = v.imp;
    }
    else if(v.channel === 'naver') imp.imp.naver = v.imp;
    else if(v.channel === 'facebook')imp.imp.facebook = v.imp;
    else if(v.channel === 'kakao')imp.imp.kakao = v.imp;
  })

  const clicks = dateReduce.forEach((v:any) => {
    if(v.channel === 'google') {
      click.click.google = v.click;
    }
    else if(v.channel === 'naver') click.click.naver = v.click;
    else if(v.channel === 'facebook')click.click.facebook = v.click;
    else if(v.channel === 'kakao')click.click.kakao = v.click;
  })

  const roases = dateReduce.forEach((v:any) => {
    if(v.channel === 'google') {
      roas.roas.google = v.roas;
    }
    else if(v.channel === 'naver') roas.roas.naver = v.roas;
    else if(v.channel === 'facebook')roas.roas.facebook = v.roas;
    else if(v.channel === 'kakao')roas.roas.kakao = v.roas;
  })

  const convValues = dateReduce.forEach((v:any) => {
    if(v.channel === 'google') {
      convValue.convValue.google = v.convValue;
    }
    else if(v.channel === 'naver') convValue.convValue.naver = v.convValue;
    else if(v.channel === 'facebook')convValue.convValue.facebook = v.convValue;
    else if(v.channel === 'kakao')convValue.convValue.kakao = v.convValue;
  })
  
  const data = [cost, imp, click, roas, convValue]

  return data;
}
